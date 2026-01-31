"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart after successful purchase
    clearCart();
  }, [clearCart]);

  return (
    <div className="py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-12">
            <div className="text-6xl mb-6">✓</div>
            <h1 className="text-4xl font-bold text-green-800 mb-4">
              Order Successful!
            </h1>
            <p className="text-lg text-green-700 mb-8">
              Thank you for your purchase! Your order has been confirmed and 
              you'll receive an email confirmation shortly.
            </p>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Your CCI merchandise will be shipped soon. Keep an eye on your 
                email for tracking information.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/merch" size="lg">
                Continue Shopping
              </Button>
              <Button href="/" variant="outline" size="lg">
                Return Home
              </Button>
            </div>
          </div>

          <div className="mt-8 bg-muted rounded-xl p-6">
            <h2 className="font-bold text-secondary mb-2">Need Help?</h2>
            <p className="text-muted-foreground">
              Questions about your order? Contact us at{" "}
              <a href="mailto:info@ccind.com" className="text-primary hover:underline">
                info@ccind.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
