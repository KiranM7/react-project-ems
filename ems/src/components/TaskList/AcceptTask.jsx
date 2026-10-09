import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data);
    
  return (
    <div className='shrink-0 h-full w-75 bg-green-400 rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                    <h4 className='text-base'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold underline'>{data.taskTitle}</h2>
                <p className='text-sm mt-4'>
                    {data.taskDescription}
                </p>
                <div className='flex justify-between mt-5'>
                    <button className='bg-white py-1 px-2 text-sm rounded active:bg-green-700 text-black cursor-pointer'>Mark as completed</button>
                    <button className='bg-red-500 py-1 px-2 text-sm rounded active:bg-red-700 cursor-pointer text-white'>Mark as Failed</button>
                </div>
            </div>
            
  )
}

export default AcceptTask