import React from "react";
import PricingCard, { type PricingCardProps } from "./PricingCard"; // Import the interface

const PricingSection: React.FC = () => {
  // Define the type for the pricing plans array using the imported interface
  const pricingPlans: PricingCardProps[] = [
    {
      title: "رایگان", // Free
      price: "$0",
      period: "/ماه", // /month
      buttonText: "شروع کنید", // Get Started
      features: ["کمک نوشتاری پایه", "امکانات محدود"], // Basic writing assistance, Limited features
    },
    {
      title: "حرفه‌ای", // Pro
      price: "$19",
      period: "/ماه", // /month
      buttonText: "ارتقا", // Upgrade
      features: [
        "ابزارهای نوشتاری پیشرفته",
        "تولید محتوای نامحدود",
        "پشتیبانی ویژه",
      ], // Advanced writing tools, Unlimited content generation, Priority support
      isPopular: true,
      buttonBgClass: "bg-blue-600",
      buttonHoverClass: "hover:bg-blue-700",
      borderClass: "focus:ring-blue-500",
      titleClass: "text-blue-600",
    },
    {
      title: "سازمانی", // Enterprise
      price: "$99",
      period: "/ماه", // /month
      buttonText: "تماس با ما", // Contact Us
      features: ["راه‌حل‌های سفارشی", "مدیر حساب اختصاصی", "منابع مقیاس‌پذیر"], // Custom solutions, Dedicated account manager, Scalable resources
    },
  ];

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold text-slate-800">قیمت‌گذاری</h2>{" "}
      {/* Pricing */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
