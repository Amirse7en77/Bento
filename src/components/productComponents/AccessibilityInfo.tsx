import React from "react";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

interface AccessibilityInfoProps {
  text: string;
}

const AccessibilityInfo: React.FC<AccessibilityInfoProps> = ({ text }) => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-300 text-white">
          <span className="material-icons text-xl">
            <RiGitRepositoryPrivateFill />
          </span>
        </div>
        <p className="text-base font-medium text-slate-700">{text}</p>
      </div>
    </section>
  );
};

export default AccessibilityInfo;
