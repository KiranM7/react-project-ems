import React from 'react'
import Header from './others/Header'
import TaskListBumbers from './others/TaskListBumbers'
import TaskLIst from '../TaskList/TaskLIst'

const EmployeeDashboard = (props) => {


  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListBumbers data={props.data} />
      <TaskLIst data={props.data} />
    </div>
  )
}

export default EmployeeDashboard