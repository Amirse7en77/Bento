import React from 'react';

import HeroBanner from './components/productComponents/HeroBanner';
import ActionButtons from './components/productComponents/ActionButtons';
import ExpertReviewSection from './components/productComponents/ExpertReviewSection';
import PricingSection from './components/productComponents/PricingSection';
import TagsSection from './components/productComponents/TagsSection';
import AccessibilityInfo from './components/productComponents/AccessibilityInfo';
import AiReviewSection from './components/productComponents/AiReviewSection';

const ToolDetail: React.FC = () => {
  const toolTags: string[] = ['نوشتار', 'بهره‌وری', 'تولید محتوا', 'هوش مصنوعی', 'دستیار']; // Writing, Productivity, Content Creation, AI, Assistant

  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden" dir="rtl" lang="fa">
      {/*
        Head elements (meta, links, title) are typically managed in public/index.html
        or by a library like react-helmet-async in a React application.
        They are not rendered directly within a React component's return.
        Ensure your public/index.html is configured for RTL, fonts, and icons.
      */}

      

      <main className="flex-1">
        <HeroBanner
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD8sKcaekBbABQT2Gtt3_RFazri9IKujvPpir6ySfM9KVow9RZ9f7dmKSU7dBvOHXKorIWxCwG_23hG_OZwJCWJ3yQbGgKBE03cxStfodgwP64X9WNHx9NnSZXjMBGpLM7h5xVcth7Q3d3aGkZy38PTqpUX2tNRH8"
          altText="بنر فناوری انتزاعی" // Abstract Technology Banner
          title="دستیار نوشتاری هوش مصنوعی حرفه‌ای" // AI Writing Assistant Pro
        />

        <div className="mx-auto max-w-7xl px-4 py-8 lg:py-12">
          <ActionButtons visitUrl="#" likesCount="1.2K" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <ExpertReviewSection />
              <PricingSection />
            </div>

            <aside className="space-y-8 lg:sticky lg:top-28 lg:h-fit">
              <TagsSection tags={toolTags} />
              <AccessibilityInfo text="غیر قابل دسترس در ایران" /> {/* Accessible in Iran */}
              <AiReviewSection />
            </aside>
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default ToolDetail;