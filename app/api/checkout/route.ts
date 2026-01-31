import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Product } from "@/lib/data/products";
import { incrementCouponUsage } from "@/lib/data/coupons";

interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-01-28.clover",
  });
}

export async function POST(request: Request) {
  try {
    const { cart, couponCode, discountPercent } = await request.json();

    if (!cart || cart.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    const stripe = getStripe();

    // Calculate line items
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = cart.map(
      (item: CartItem) => {
        // Apply discount if employee coupon is used
        const unitAmount = discountPercent
          ? Math.round(item.price * (1 - discountPercent / 100))
          : item.price;

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              description: item.selectedSize
                ? `Size: ${item.selectedSize}`
                : item.description,
              images: [], // Add product images here in production
            },
            unit_amount: unitAmount,
          },
          quantity: item.quantity,
        };
      }
    );

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/merch/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/merch/cart`,
      metadata: {
        couponCode: couponCode || "",
      },
    });

    // Increment coupon usage if applicable
    if (couponCode) {
      incrementCouponUsage(couponCode);
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}
