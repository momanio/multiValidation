import React from "react";

interface PaginationBarProps {
  step: number;
  totalSteps: number;
}

const PaginationBar: React.FC<PaginationBarProps> = ({ step, totalSteps }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-8 rounded-full transition-all duration-300
            ${index <= step ? "bg-blue-500" : "bg-gray-300"}`}
        />
      ))}
    </div>
  );
};

export default PaginationBar;
