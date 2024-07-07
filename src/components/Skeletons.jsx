export const SkeletonCard = () => (
    <div className="bg-gray-200 shadow-lg py-3 px-4 rounded-md max-h-24 sm:min-w-36 md:min-w-44 border-l-[#0cc9e8] border-l-[5px]">
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-12 bg-gray-300 rounded"></div>
    </div>
  );


 export const SkeletonTable = () => (
    <tr className="animate-pulse">
      <td className="px-3 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
      <td className="px-1 py-7 whitespace-nowrap bg-white dark:bg-gray-700"></td>
    </tr>
  );


  export const SkeletonProjectCardMobile = () => (
    <div className="bg-white rounded-2xl p-4 shadow-lg animate-pulse">
      <div className="text-gray-900">
        <div className="flex justify-between">
          <span className="font-semibold text-[14.5px] w-3/4 h-3/4">{/* Placeholder for projectName */}</span>
          <span className="hidden sm:inline font-semibold text-[14.5px] ml-auto w-1/4 h-3/4">
         
          </span>
        </div>
        <div className="-mt-3 text-[12.5px] py-4 whitespace-nowrap text-gray-900">
       
        </div>
      </div>
      <div className="mt-2 text-capitalize text-[12.5px] text-gray-900">
        <div className="flex sm:block text-sm font-medium mb-1">
          <span className="px-1 py-4 whitespace-nowrap text-gray-500 mr-1 w-1/4 h-3/4">Reason :</span>{' '}
        
        </div>
        <div className="flex sm:block text-sm font-medium mb-1">
          <span className="px-1 py-4 whitespace-nowrap text-gray-500 mr-1 w-1/4 h-3/4">Type:</span> {/* Placeholder for type */}
        </div>
        <div className="flex sm:block text-sm font-medium mb-1">
          <span className="px-1 py-4 whitespace-nowrap text-gray-500 mr-1 w-1/4 h-3/4">Division:</span>{' '}
        
        </div>
        <div className="flex sm:block text-sm font-medium mb-1">
          <span className="px-1 py-4 whitespace-nowrap text-gray-500 mr-1 w-1/4 h-3/4">Category:</span>{' '}
      
        </div>
        <div className="flex sm:block text-sm font-medium mb-1">
          <span className="px-1 py-4 whitespace-nowrap text-gray-500 mr-1 w-1/4 h-3/4">Priority:</span>{' '}
       
        </div>
        <div className="flex sm:block text-sm font-medium mb-1">
          <span className="px-1 py-4 whitespace-nowrap text-gray-500 mr-1 w-1/4 h-3/4">Department:</span>{' '}
         
        </div>
        <div className="flex sm:block text-sm font-medium mb-1">
          <span className="px-1 py-4 whitespace-nowrap text-gray-500 mr-1 w-1/4 h-3/4">Location:</span>{' '}
        
        </div>
        <div className="sm:hidden font-bold text-[13px] text-gray-500 mb-1">
          <span className="px-1 py-4 whitespace-nowrap text-gray-500 mr-1 w-1/4 h-3/4">Status:</span>{' '}
       
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 space-x-2">
        <div className="w-20 h-10 bg-gray-300 rounded-full"></div> {}
        <div className="w-20 h-10 bg-gray-300 rounded-full"></div> {}
        <div className="w-20 h-10 bg-gray-300 rounded-full"></div> {}
      </div>
    </div>
  );