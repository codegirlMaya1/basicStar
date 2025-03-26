import React from 'react';

// Define props for the component
interface TwoColumnProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const TwoColumnLayout: React.FC<TwoColumnProps> = ({ leftContent, rightContent }) => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        {leftContent}
      </div>
      <div className="w-1/2 flex items-center justify-center p-5">
        {rightContent}
      </div>
    </div>
  );
};

export default TwoColumnLayout;