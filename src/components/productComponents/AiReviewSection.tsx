import React from "react";

const AiReviewSection: React.FC = () => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-semibold text-slate-800">
        بررسی هوش مصنوعی (اختیاری)
      </h2>{" "}
      {/* AI Review (Optional) */}
      <div className="prose prose-sm prose-slate max-w-none text-slate-600">
        <p className="text-right">
          این دستیار نوشتاری هوش مصنوعی یک تحول‌ساز برای تولیدکنندگان محتوا است.
          توانایی آن در تولید متن با کیفیت بالا در موضوعات مختلف، بسیار چشمگیر
          است. رابط کاربری آن بصری است و استفاده از آن را حتی برای کسانی که تازه
          با ابزارهای نوشتاری هوش مصنوعی آشنا شده‌اند، آسان می‌کند. در حالی که
          نسخه رایگان نقطه شروع خوبی را ارائه می‌دهد، طرح‌های حرفه‌ای و سازمانی
          با تولید محتوای نامحدود و ویژگی‌های پیشرفته، ارزش قابل توجهی را فراهم
          می‌کنند. به طور کلی، این ابزار برای هر کسی که به دنبال افزایش بهره‌وری
          نوشتاری خود است، بسیار توصیه می‌شود.
        </p>
      </div>
    </section>
  );
};

export default AiReviewSection;
