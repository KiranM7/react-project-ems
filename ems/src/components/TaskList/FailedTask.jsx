import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className='shrink-0 h-full w-75 bg-yellow-400 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'> {data.category}</h3>
                <h4 className='text-base'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold underline'>{data.taskTitle}</h2>
            <p className='text-sm mt-4'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-2'>
                <button className='w-full bg-red-500 mt-4 rounded text-white'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask