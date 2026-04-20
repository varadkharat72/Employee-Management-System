import React, { useState } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeDashboard = (props) => {
   const [tasks, setTasks] = useState(props.data?.tasks || [])

  const handleStatusChange = (index, newStatus) => {
    setTasks(prev =>
      prev.map((task, i) =>
        i === index
          ? {
              ...task,
              active: newStatus === 'accepted',
              newTask: false,
              completed: newStatus === 'completed',
              failed: newStatus === 'failed',
            }
          : task
      )
    )
  }

  const counts = {
    newTask:   tasks.filter(t => t.newTask === true).length,
    active:    tasks.filter(t => t.active === true && t.newTask === false).length,
    completed: tasks.filter(t => t.completed === true).length,
    failed:    tasks.filter(t => t.failed === true).length,
  }

  return (
    <div className='p-10  h-screen bg-[#1c1c1c]'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers counts={counts}/>
        <TaskList tasks={tasks} onStatusChange={handleStatusChange}/>
    </div>
  )
}

export default EmployeDashboard


