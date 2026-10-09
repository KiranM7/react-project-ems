import React, { useState } from 'react'
import NewTask from '../../TaskList/NewTask'

const CreateTask = () => {
    const [taskTiltle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [task, setTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setTask({ taskTiltle, taskDescription, taskDate, category, active: false, NewTask: true, failed: true, completed: false })
        const data = JSON.parse(localStorage.getItem('employees'))
        data.forEach((elem)=>{
        if(asignTo == elem.firstName){
            console.log("xxxxxxxxxxxx");
            
        }            
        })

    }
    return (
        <div>
            <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }}
                    className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2 bg'>
                        <div>
                            <h3 className='text-sm text-white mb-0.5 '>Task Title</h3>
                            <input value={taskTiltle} onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }} className='text-sm text-white  py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white mb-4 placeholder:text-gray-500' type="text" placeholder='Make UI design' required />
                        </div>
                        <div>
                            <h3 className='text-sm text-white mb-0.5'>Date</h3>
                            <input value={taskDate} onChange={(e) => {
                                setTaskDate(e.target.value)
                            }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white mb-4 text-gray-400' type="date" required />
                        </div>
                        <div>
                            <h3 className='text-sm text-white mb-0.5'>Asign to</h3>
                            <input value={asignTo} onChange={(e) => {
                                setAsignTo(e.target.value)
                            }} className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white mb-4 placeholder:text-gray-500' type="text" placeholder='Employee Name' required />
                        </div>
                        <div>
                            <h3 className='text-sm text-white mb-0.5'>Category</h3>
                            <input value={category} onChange={(e) => {
                                setCategory(e.target.value)
                            }} className='text-sm text-white py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-white placeholder:text-gray-500' type="text" placeholder='dsgin, dev, etc' required />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-white mb-0.5'>Dscription</h3>
                        <textarea value={taskDescription} onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} className='w-full h-50 text-sm py-2 px-4 rounded outline-none bg-transparent border border-white text-white placeholder:-text-gray-500' name="" id="" placeholder='Enter Here' required></textarea>
                        <button className='bg-green-400 py-3 hover:bg-green-600 px-5 rounded text-sm mt-7 w-full active:scale-98'>Create Task</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default CreateTask