import React from "react";

const RadialGauge = ({ value, max, size = 200, gradientId }) => {
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;

  return (
    <div className="relative flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md">
      <svg
        width="100%"
        height="auto"
        viewBox={`0 0 ${size} ${size / 2}`}
        preserveAspectRatio="xMidYMid meet"
      >
      
        <path
          d={`M 10 ${size / 2} A ${radius} ${radius} 0 0 1 ${size - 10} ${size / 2}`}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="10"
        />

       
        <path
          d={`M 10 ${size / 2} A ${radius} ${radius} 0 0 1 ${size - 10} ${size / 2}`}
          fill="none"
          stroke="orange"
          strokeWidth="10"
          strokeDasharray={circumference / 2}
          strokeDashoffset={circumference / 2 - progress / 2}
          strokeLinecap="round"
        />

       
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" /> 
            <stop offset="100%" stopColor="#06b6d4" /> 
          </linearGradient>
        </defs>
      </svg>

    
      <div className="absolute bottom-0 text-center text-sm font-semibold text-gray-700">
        <span className="text-purple-700 font-extrabold text-2xl">{value}</span> / {max}
      </div>
    </div>
  );
};

export default RadialGauge;
