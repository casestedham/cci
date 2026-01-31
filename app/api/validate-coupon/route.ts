import { NextResponse } from "next/server";
import { validateCoupon } from "@/lib/data/coupons";

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json(
        { valid: false, error: "Coupon code is required" },
        { status: 400 }
      );
    }

    const coupon = validateCoupon(code);

    if (!coupon) {
      return NextResponse.json(
        { valid: false, error: "Invalid or expired coupon code" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      valid: true,
      discountPercent: coupon.discountPercent,
      employeeName: coupon.employeeName,
    });
  } catch (error) {
    console.error("Error validating coupon:", error);
    return NextResponse.json(
      { valid: false, error: "Error validating coupon" },
      { status: 500 }
    );
  }
}
