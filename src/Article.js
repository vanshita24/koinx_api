import React from 'react'

const Article = () => {
  return (
    
    <div class="w-full lg:max-w-full lg:flex  ">
      <div class="flex  md:flex-row sm:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
        <div>
        <img class=" w-32 p-2 h-32 md:h-auto object-cover md:w-32 rounded-t-lg md:rounded-none md:rounded-l-lg overflow-hidden" src="https://images.unsplash.com/photo-1649274496773-c40eacd66e2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5mdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
    
    <div class="p-6 sm:p-2 flex flex-col">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Portfolio</h5>
      
      <p class="text-gray-600 text-xs">Track your trades in one place, not all over the place </p>
    </div>
  </div>
</div>


  )
}

export default Article