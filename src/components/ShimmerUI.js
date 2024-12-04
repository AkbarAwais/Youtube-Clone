import React from 'react';

const ShimmerUI = () => (
    <div
        className="
      w-[250px]
      cursor-pointer
      space-y-3
      mb-4
      relative
      overflow-hidden
      animate-pulse
    "
    >
        {/* Thumbnail shimmer */}
        <div className="w-full h-[140px] bg-gray-300 rounded-xl" />

        {/* Content shimmer */}
        <div className="flex space-x-3">
            {/* Circle for play icon */}
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-2">
                {/* Title shimmer */}
                <div className="h-4 bg-gray-300 rounded w-4/5" />
                {/* Channel shimmer */}
                <div className="h-3 bg-gray-300 rounded w-2/3" />
                {/* Views and time shimmer */}
                <div className="h-3 bg-gray-300 rounded w-1/2" />
            </div>
        </div>
    </div>
);

export default ShimmerUI;
