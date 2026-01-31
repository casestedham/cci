"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { products, Product } from "@/lib/data/products";
import { useCart } from "@/lib/cart-context";
import type { Metadata } from "next";

export default function MerchPage() {
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});
  const [addedToCart, setAddedToCart] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    const size = product.sizes ? selectedSizes[product.id] : undefined;
    
    if (product.sizes && !size) {
      alert("Please select a size");
      return;
    }

    addToCart(product, size);
    setAddedToCart(product.id);
    
    // Clear the "added" message after 2 seconds
    setTimeout(() => setAddedToCart(null), 2000);
  };

  const formatPrice = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  return (
    <div className="py-16">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            CCI Merchandise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Show your pride! Get official CCI gear and accessories.
          </p>
          <div className="bg-primary/10 border border-primary rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-secondary">
              <strong className="text-primary">CCI Employees:</strong> Use your unique coupon code at checkout to get products at cost!
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Product Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-2">
                    {product.category === "apparel" ? "👕" : "🎁"}
                  </div>
                  <p className="text-sm text-muted-foreground">Product Photo</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-secondary">{product.name}</h3>
                  {product.inStock ? (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-semibold">
                      Out of Stock
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <p className="text-2xl font-bold text-primary mb-4">
                  {formatPrice(product.price)}
                </p>

                {/* Size Selection */}
                {product.sizes && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Select Size:
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() =>
                            setSelectedSizes({ ...selectedSizes, [product.id]: size })
                          }
                          className={`px-4 py-2 border-2 rounded-lg font-semibold transition-colors ${
                            selectedSizes[product.id] === size
                              ? "border-primary bg-primary text-white"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className="w-full"
                >
                  {addedToCart === product.id ? "✓ Added!" : "Add to Cart"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Employee Info */}
        <div className="bg-muted rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Employee Discount Information
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            CCI employees receive special pricing! Enter your unique coupon code at checkout 
            to purchase items at cost.
          </p>
          <p className="text-sm text-muted-foreground">
            Don't have a coupon code? Contact HR to get yours.
          </p>
        </div>
      </Container>
    </div>
  );
}
