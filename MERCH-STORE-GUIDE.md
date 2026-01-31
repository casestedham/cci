# CCI Merchandise Store Setup Guide

## 🛍️ Overview

Your website now includes a **fully functional e-commerce store** with:
- Product catalog with real-time inventory
- Shopping cart with quantity management
- Employee discount system with unique coupon codes
- Stripe payment integration
- Order confirmation

## 📦 Features

### For Customers
- Browse CCI branded merchandise
- Add products to cart with size selection
- Secure checkout with Stripe
- Order confirmation emails (configured in Stripe)

### For Employees
- Enter unique coupon codes at checkout
- Get products at cost (percentage discount)
- Track usage per employee
- Coupon validation in real-time

## 🔧 Setup Instructions

### 1. Create Stripe Account

1. Go to [stripe.com](https://stripe.com) and sign up
2. Complete account setup
3. Get your API keys from [Dashboard > Developers > API Keys](https://dashboard.stripe.com/apikeys)

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Stripe keys:

```env
# Test mode keys (for development)
STRIPE_SECRET_KEY=sk_test_YOUR_TEST_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_TEST_PUBLISHABLE_KEY

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Important:** Never commit `.env.local` to git! It's already in `.gitignore`.

### 3. Test with Stripe Test Mode

Use these test card numbers in Stripe test mode:
- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- Use any future expiration date and any 3-digit CVC

### 4. Configure Products

Edit `/lib/data/products.ts` to customize your merchandise:

```typescript
{
  id: "product-id",
  name: "Product Name",
  description: "Product description",
  price: 2500,  // Price in cents ($25.00)
  cost: 1200,   // Cost in cents ($12.00) for employee discount
  image: "/images/merch/product.png",
  category: "apparel" | "gear" | "accessories",
  sizes: ["S", "M", "L", "XL"],  // Optional
  inStock: true,
}
```

### 5. Add Product Images

Add product photos to `/public/images/merch/`:
- `tshirt.png`
- `hoodie.png`
- `hat.png`
- `mug.png`
- `stickers.png`

Recommended image size: 800x800px (square)

## 👥 Employee Discount System

### Current Employee Codes

The system includes 3 sample employee codes (in `/lib/data/coupons.ts`):
- `EMP-JOHN-2024` (52% discount)
- `EMP-JANE-2024` (52% discount)
- `EMP-MIKE-2024` (52% discount)

### How It Works

1. Employee adds products to cart
2. At checkout, enters unique coupon code
3. System validates code via API
4. If valid, applies percentage discount
5. Employee pays cost price instead of retail

### Adding New Employee Codes

#### Option A: Manually (Simple)

Edit `/lib/data/coupons.ts`:

```typescript
{
  code: "EMP-SARAH-2024",
  employeeName: "Sarah Wilson",
  discountPercent: 52,  // Adjust based on your markup
  isActive: true,
  usageCount: 0,
  createdAt: new Date(),
}
```

#### Option B: Create Admin Dashboard (Advanced)

Build an admin page at `/admin/coupons` to:
- Generate new codes automatically
- View usage statistics
- Activate/deactivate codes
- Set usage limits

**Note:** In production, you should move coupons to a database (PostgreSQL, MongoDB, etc.) instead of the in-memory array.

### Calculating Discount Percentage

To calculate the discount needed to bring retail to cost:

```
discountPercent = ((retail - cost) / retail) × 100
```

Example:
- Retail: $25.00
- Cost: $12.00
- Discount: ((25 - 12) / 25) × 100 = 52%

## 🚀 Going Live

### 1. Switch to Production Keys

In Stripe Dashboard:
- Toggle from "Test mode" to "Live mode"
- Get your production API keys
- Update `.env.local` with live keys:

```env
STRIPE_SECRET_KEY=sk_live_YOUR_LIVE_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_LIVE_PUBLISHABLE_KEY
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

### 2. Deploy to Vercel

```bash
# Push your code
git add .
git commit -m "Add merchandise store"
git push

# In Vercel Dashboard:
# 1. Go to your project settings
# 2. Add environment variables:
#    - STRIPE_SECRET_KEY
#    - NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  
#    - NEXT_PUBLIC_BASE_URL
# 3. Redeploy
```

### 3. Configure Stripe Webhooks (Optional but Recommended)

For order tracking and email confirmations:

1. Go to [Stripe Dashboard > Developers > Webhooks](https://dashboard.stripe.com/webhooks)
2. Add endpoint: `https://your-domain.vercel.app/api/webhooks/stripe`
3. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
4. Copy webhook secret and add to Vercel env vars: `STRIPE_WEBHOOK_SECRET`

## 📊 Managing Orders

### View Orders in Stripe

All orders appear in your Stripe Dashboard:
- [Dashboard > Payments](https://dashboard.stripe.com/payments)
- Filter by status, amount, date
- Export to CSV for accounting

### Customer Data

Customer information (name, email, address) is collected during Stripe Checkout and stored in Stripe.

Access via:
- Stripe Dashboard > Customers
- Or programmatically via Stripe API

## 🎨 Customization

### Change Colors/Styling

The store uses your existing brand colors (#f66400 orange, #000000 black).

To customize, edit components in `/app/merch/`:
- `page.tsx` - Product listing
- `cart/page.tsx` - Shopping cart

### Add New Product Categories

1. Update product type in `/lib/data/products.ts`:
```typescript
category: "apparel" | "gear" | "accessories" | "new-category"
```

2. Add filtering on the merch page (optional)

### Shipping

By default, Stripe Checkout doesn't collect shipping info. To enable:

In `/app/api/checkout/route.ts`, add to session creation:

```typescript
shipping_address_collection: {
  allowed_countries: ["US", "CA"],  // Add your countries
}
```

## 💡 Advanced Features to Add

### Inventory Management
- Track stock levels in database
- Update `inStock` status automatically
- Send low-stock alerts

### Order Fulfillment
- Integrate with fulfillment service (Printful, Printify)
- Or build custom fulfillment dashboard

### Analytics
- Track best-selling products
- Monitor employee discount usage
- Revenue reports

### Email Notifications
- Send custom order confirmations
- Use SendGrid, Resend, or Mailgun
- Include order details and tracking

## 🔒 Security Notes

1. **Never expose secret keys**: Keep `STRIPE_SECRET_KEY` server-side only
2. **Validate on server**: Always validate coupons server-side (done)
3. **Use HTTPS**: Vercel provides this automatically
4. **Monitor for fraud**: Check Stripe Radar for suspicious activity

## 🆘 Troubleshooting

### "Stripe is not defined" Error
- Check that environment variables are set
- Restart dev server after adding .env.local

### Checkout Not Working
- Verify Stripe keys are correct (test vs live)
- Check browser console for errors
- Verify BASE_URL matches your domain

### Coupon Not Applying
- Check code matches exactly (case-sensitive converted to uppercase)
- Verify coupon is active in `/lib/data/coupons.ts`
- Check browser network tab for API errors

## 📞 Support

- **Stripe Documentation**: [docs.stripe.com](https://docs.stripe.com)
- **Stripe Support**: Available in your dashboard
- **Test Cards**: [stripe.com/docs/testing](https://stripe.com/docs/testing)

---

**Your merch store is ready to generate revenue! 🎉**
