import React from 'react'
import { SkeletonCard } from './Skeletons';



const DashboardCards = React.memo(({ statusData }) => {
  
  if (!statusData || Object.keys(statusData).length === 0) {
    return (
      <div className="grid grid-cols-5 gap-4 md:gap-40 sm:gap-40 ml-16 sm:ml-0 px-8 sm:px-2 relative overflow-x-auto -mt-5 md:mt-5 sm:mt-5 scrollnone pb-5">
        {[...Array(5)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  
  return (
    <div className="grid grid-cols-5 gap-4 md:gap-40 sm:gap-40 ml-16 sm:ml-0 px-8 sm:px-2 relative overflow-x-auto -mt-5 md:mt-5 sm:mt-5 scrollnone pb-5">
      {Object.entries(statusData).map(([key, value], index) => (
        <div key={index} className="bg-white shadow-lg py-3 px-4 rounded-md max-h-24 sm:min-w-36 md:min-w-44 border-l-[#0cc9e8] border-l-[5px]">
          <p className="text-[15px] md:text-[14px] sm:text-[13px] font-medium text-[#4f5357] fontfamilyMon">{key}</p>
          <h2 className="text-[40px] md:text-[33px] sm:text-[26px] text-[#474d52] font-semibold fontfamilyMon">{value}</h2>
        </div>
      ))}
    </div>
  );
});
export default DashboardCards