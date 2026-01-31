"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useCart } from "@/lib/cart-context";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to add your Stripe publishable key to .env.local
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    couponCode,
    setCouponCode,
    discountPercent,
    setDiscountPercent,
  } = useCart();

  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const formatPrice = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = Math.round(subtotal * (discountPercent / 100));
  const total = subtotal - discount;

  const handleApplyCoupon = async () => {
    if (!couponInput.trim()) {
      setCouponError("Please enter a coupon code");
      return;
    }

    setIsValidating(true);
    setCouponError("");
    setCouponSuccess("");

    try {
      const response = await fetch("/api/validate-coupon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: couponInput }),
      });

      const data = await response.json();

      if (data.valid) {
        setCouponCode(couponInput);
        setDiscountPercent(data.discountPercent);
        setCouponSuccess(`Employee discount applied: ${data.discountPercent}% off!`);
        setCouponError("");
      } else {
        setCouponError(data.error || "Invalid coupon code");
        setCouponSuccess("");
      }
    } catch (error) {
      setCouponError("Error validating coupon. Please try again.");
    } finally {
      setIsValidating(false);
    }
  };

  const handleRemoveCoupon = () => {
    setCouponCode("");
    setDiscountPercent(0);
    setCouponInput("");
    setCouponSuccess("");
    setCouponError("");
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);

    try {
      // Create checkout session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cart,
          couponCode,
          discountPercent,
        }),
      });

      const { url } = await response.json();

      // Redirect to Stripe Checkout
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      alert("Error processing checkout. Please try again.");
      setIsCheckingOut(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold text-secondary mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Add some awesome CCI merch to your cart!
            </p>
            <Button href="/merch" size="lg">
              Browse Merchandise
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-16">
      <Container>
        <h1 className="text-4xl font-bold text-secondary mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize || "no-size"}`}
                  className="bg-white border border-border rounded-xl p-6 flex gap-4"
                >
                  {/* Product Image Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">
                      {item.category === "apparel" ? "👕" : "🎁"}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-secondary">{item.name}</h3>
                    {item.selectedSize && (
                      <p className="text-sm text-muted-foreground">Size: {item.selectedSize}</p>
                    )}
                    <p className="text-primary font-bold mt-2">{formatPrice(item.price)}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1, item.selectedSize)
                        }
                        className="w-8 h-8 border border-border rounded-lg hover:bg-muted transition-colors"
                      >
                        −
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1, item.selectedSize)
                        }
                        className="w-8 h-8 border border-border rounded-lg hover:bg-muted transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="ml-auto text-red-600 hover:underline text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="font-bold text-lg text-secondary">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-border rounded-xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-secondary mb-6">Order Summary</h2>

              {/* Coupon Code */}
              {!couponCode ? (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Employee Coupon Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                      placeholder="EMP-XXXX-2024"
                      className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button
                      onClick={handleApplyCoupon}
                      disabled={isValidating}
                      variant="outline"
                      size="sm"
                    >
                      {isValidating ? "..." : "Apply"}
                    </Button>
                  </div>
                  {couponError && (
                    <p className="text-red-600 text-sm mt-2">{couponError}</p>
                  )}
                  {couponSuccess && (
                    <p className="text-green-600 text-sm mt-2">{couponSuccess}</p>
                  )}
                </div>
              ) : (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-semibold text-green-800">Coupon Applied</p>
                      <p className="text-xs text-green-700">{couponCode}</p>
                      <p className="text-xs text-green-700">{discountPercent}% discount</p>
                    </div>
                    <button
                      onClick={handleRemoveCoupon}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Employee Discount ({discountPercent}%)</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="border-t border-border pt-3 flex justify-between text-xl font-bold text-secondary">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                size="lg"
                className="w-full"
              >
                {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
