import useIsMobile from '@/utils/hooks/useIsMobile';
import React from 'react';

type TooltipProps = {
    country: string;
    count: number;
    position: { x: number; y: number } | null;
};

export const Tooltip: React.FC<TooltipProps> = ({ country, count, position }) => {
    const isMobile = useIsMobile();

    if (!country) return null;

    const countColor = count > 0 
    ? 'rounded py-[2px] px-[6px] text-green-100 bg-green-200' 
    : 'rounded py-[2px] px-[6px] text-orange-100 bg-orange-200';

    const tooltipStyle = isMobile
        ? {top: '80%', left: '40%' } // Fixed position on mobile
        : { top: position?.y ? position.y - 220 : 'auto', left: position?.x ? position.x - 970 : 'auto' }; // Dynamic on larger screens

    return (
        <div
        className={`shadow-tooltip border border-gray-100 rounded bg-white-100 absolute flex items-center text-white text-sm px-2 py-[6px] pointer-events-none`}
        style={tooltipStyle}
        >
            <span className='mr-2 font-medium text-sm leading-[16.94px] text-[#3C4257]'>{country}</span> <span className={countColor}>{count}</span>
        </div>
    );
};
