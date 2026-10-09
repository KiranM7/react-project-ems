import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)


    return (

        <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-60 '>
            <div className='bg-[#2c2c2c] mb-2 py-2 px-4 flex justify-between rounded text-center pr-8 font-bold '>

                <h2 className='w-1/5 text-white'>Employee Name</h2>
                <h3 className='w-1/5 text-white'>New Task</h3>
                <h5 className='w-1/5 text-white'>Active Task</h5>
                <h5 className='w-1/5 text-white'>Completed</h5>
                <h5 className='w-1/5 text-white'>Failed</h5>

            </div>

            <div className='h-[80%] overflow-auto align-center '>
                {authData.employees.map((elem, idx) => [
                    <div key={idx} className='bg-[#2c2c2c] mb-2 py-2 px-4 flex justify-between rounded text-center '>

                        <h2 className='w-1/5 text-white'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
                        <h5 className='w-1/5 text-green-400'>{elem.taskCounts.completed}</h5>
                        <h5 className='w-1/5 text-red-500'>{elem.taskCounts.failed}</h5>

                    </div>
                ])}
            </div>


        </div>

    )
}

export default AllTask