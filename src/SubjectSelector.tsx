"use client";

import * as React from "react";

interface SubjectOption {
  label: string;
  selected: boolean;
}

export const SubjectSelector: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = React.useState(0);

  const subjects: SubjectOption[] = Array(4).fill({
    label: "General Inquiry",
    selected: false,
  });

  return (
    <div className="mb-10">
      <h3 className="mb-4 text-sm font-semibold">Select Subject?</h3>
      <div className="flex gap-5 max-sm:flex-wrap">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="flex gap-2.5 items-center text-xs cursor-pointer max-sm:w-[calc(50%_-_10px)]"
            onClick={() => setSelectedSubject(index)}
          >
            <div
              className={`rounded-full h-[13px] w-[13px] ${
                selectedSubject === index ? "bg-black" : "bg-neutral-200"
              }`}
              role="radio"
              aria-checked={selectedSubject === index}
            />
            <span>{subject.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SubjectSelector;