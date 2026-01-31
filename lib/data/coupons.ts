export interface EmployeeCoupon {
  code: string;
  employeeName: string;
  discountPercent: number; // percentage to bring products to cost
  isActive: boolean;
  usageCount: number;
  maxUsage?: number; // optional usage limit
  createdAt: Date;
}

// In production, this would be in a database
// For now, we'll use a simple in-memory store
export const employeeCoupons: EmployeeCoupon[] = [
  {
    code: "EMP-JOHN-2024",
    employeeName: "John Doe",
    discountPercent: 52, // ~52% discount brings $25 to $12
    isActive: true,
    usageCount: 0,
    createdAt: new Date("2024-01-01"),
  },
  {
    code: "EMP-JANE-2024",
    employeeName: "Jane Smith",
    discountPercent: 52,
    isActive: true,
    usageCount: 0,
    createdAt: new Date("2024-01-01"),
  },
  {
    code: "EMP-MIKE-2024",
    employeeName: "Mike Johnson",
    discountPercent: 52,
    isActive: true,
    usageCount: 0,
    createdAt: new Date("2024-01-01"),
  },
];

export function validateCoupon(code: string): EmployeeCoupon | null {
  const coupon = employeeCoupons.find(
    (c) => c.code.toUpperCase() === code.toUpperCase() && c.isActive
  );

  if (!coupon) return null;

  // Check if max usage exceeded
  if (coupon.maxUsage && coupon.usageCount >= coupon.maxUsage) {
    return null;
  }

  return coupon;
}

export function incrementCouponUsage(code: string): void {
  const coupon = employeeCoupons.find((c) => c.code.toUpperCase() === code.toUpperCase());
  if (coupon) {
    coupon.usageCount++;
  }
}

export function generateCouponCode(employeeName: string): string {
  const namePart = employeeName.toUpperCase().replace(/\s+/g, "-");
  const year = new Date().getFullYear();
  return `EMP-${namePart}-${year}`;
}
