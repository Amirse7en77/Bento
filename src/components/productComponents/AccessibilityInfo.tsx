import React from 'react';

interface AccessibilityInfoProps {
  text: string;
}

const AccessibilityInfo: React.FC<AccessibilityInfoProps> = ({ text }) => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
          <span className="material-icons text-xl">public</span>
        </div>
        <p className="text-base font-medium text-slate-700">{text}</p>
      </div>
    </section>
  );
};

export default AccessibilityInfo;