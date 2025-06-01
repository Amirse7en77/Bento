import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export interface PricingCardProps {
  // Export this interface as it's used by PricingSection
  title: string;
  price: string;
  period: string;
  buttonText: string;
  features: string[];
  isPopular?: boolean;
  buttonBgClass?: string;
  buttonHoverClass?: string;
  borderClass?: string;
  titleClass?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  buttonText,
  features,
  isPopular = false, // Default value for optional prop
  buttonBgClass,
  buttonHoverClass,
  borderClass,
  titleClass,
}) => {
  return (
    <div
      className={`relative flex flex-col gap-4 rounded-lg p-6 transition-shadow hover:shadow-xl ${
        isPopular
          ? "border-2 border-blue-600 bg-white shadow-2xl"
          : "border border-slate-200 bg-slate-50"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          محبوب‌ترین
        </div> // Most Popular
      )}
      <div className="flex flex-col gap-1">
        <h3
          className={`text-lg font-semibold ${titleClass || "text-slate-800"}`}
        >
          {title}
        </h3>
        <p className="flex items-baseline gap-1 text-slate-800">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          <span className="text-sm font-semibold">{period}</span>
        </p>
      </div>
      <button
        className={`flex w-full cursor-pointer items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          buttonBgClass || "bg-slate-600"
        } ${buttonHoverClass || "hover:bg-slate-700"} ${
          borderClass || "focus:ring-slate-500"
        }`}
      >
        {buttonText}
      </button>
      <ul className="space-y-2 text-sm text-slate-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="material-icons text-base text-green-500">
              <FaCheckCircle />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
