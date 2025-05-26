import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
const ExpertReviewSection: React.FC = () => {
  return (
    <section className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold text-slate-800">بررسی تخصصی</h2> {/* Expert Review */}
      <div className="prose prose-slate max-w-none text-slate-600">
        <p className="text-right">
          این دستیار نوشتاری هوش مصنوعی ابزاری چندمنظوره است که برای کمک به کاربران در تولید
          سریع و کارآمد محتوای نوشتاری با کیفیت بالا طراحی شده است. این ابزار از تکنیک‌های
          پیشرفته پردازش زبان طبیعی (NLP) برای درک درخواست‌های کاربر و تولید متنی منسجم و
          مرتبط با زمینه استفاده می‌کند.
        </p>
        <p className="text-right">
          این دستیار طیف گسترده‌ای از وظایف نوشتاری، از جمله نگارش ایمیل، ایجاد پست‌های
          وبلاگ، خلاصه‌سازی مقالات، و حتی تولید محتوای خلاقانه مانند داستان یا شعر را پشتیبانی
          می‌کند. رابط کاربری ساده و کنترل‌های بصری آن، استفاده از آن را برای نویسندگان مبتدی و
          با تجربه آسان می‌سازد.
        </p>
        <p className="text-right">
          این ابزار همچنین گزینه‌های سفارشی‌سازی را ارائه می‌دهد که به کاربران امکان می‌دهد
          لحن، سبک و طول متن را برای مطابقت با نیازهای خاص خود تعیین کنند. با مجموعه ویژگی‌های
          قوی و عملکرد قابل اعتماد، این دستیار نوشتاری هوش مصنوعی دارایی ارزشمندی برای هر کسی
          است که به دنبال افزایش بهره‌وری و کیفیت نوشتار خود است.
        </p>
        <h3>ویژگی‌های کلیدی:</h3> {/* Key Features */}
        <ul className="list-none pr-0">
          <li className="flex items-center gap-2">
            <span className="material-icons text-base text-green-500"><FaCheckCircle /></span>
            NLP پیشرفته برای تولید متن طبیعی
          </li> {/* Advanced NLP for natural text generation */}
          <li className="flex items-center gap-2">
            <span className="material-icons text-base text-green-500"><FaCheckCircle /></span>
            پشتیبانی از طیف گسترده‌ای از وظایف نوشتاری
          </li> {/* Wide range of writing task support */}
          <li className="flex items-center gap-2">
            <span className="material-icons text-base text-green-500"><FaCheckCircle /></span>
            رابط کاربری ساده
          </li> {/* User-friendly interface */}
          <li className="flex items-center gap-2">
            <span className="material-icons text-base text-green-500"><FaCheckCircle /></span>
            خروجی قابل تنظیم (لحن، سبک، طول)
          </li> {/* Customizable output (tone, style, length) */}
          <li className="flex items-center gap-2">
            <span className="material-icons text-base text-green-500"><FaCheckCircle /></span>
            عملکرد قابل اعتماد و کارآمد
          </li> {/* Reliable and efficient performance */}
        </ul>
      </div>
    </section>
  );
};

export default ExpertReviewSection;