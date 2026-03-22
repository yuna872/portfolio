"use client";

import { useState } from "react";

interface TimelineItem {
  id: string;
  title: string;
  period: string;
  summary: string;
  content: React.ReactNode;
}

export default function TimelineAccordion({
  items,
}: {
  items: TimelineItem[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const isLast = index === items.length - 1;

        return (
          <div key={item.id} className="relative flex gap-4">
            {/* 세로 라인 */}
            {!isLast && (
              <div className="absolute left-3 top-6 bottom-0 w-px bg-neutral-200" />
            )}

            {/* 도트 */}
            <div
              className={`relative z-10 mt-1 w-6 h-6 rounded-full border-2 bg-white shrink-0 ${
                isOpen ? "border-neutral-900" : "border-neutral-300"
              }`}
            />

            {/* 콘텐츠 */}
            <div className="flex-1 pb-8">
              <button
                onClick={() => toggle(item.id)}
                className="w-full text-left group"
              >
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-lg group-hover:text-neutral-600 transition-colors">
                    {item.title}
                  </h4>
                  <svg
                    className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <p className="text-sm text-neutral-400 mt-0.5">{item.period}</p>
                <p className="text-sm text-neutral-500 mt-1">{item.summary}</p>
              </button>

              {/* 아코디언 */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pt-4">{item.content}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
