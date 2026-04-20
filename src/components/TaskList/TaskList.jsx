import React, { useState } from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailTask from './FailTask'

const TaskList = ({ tasks, onStatusChange  }) => {


 

  return (
      <div id='tasklist' className='flex h-[50%] overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16 '>
        {tasks.map((task, index) => {
          if (task.completed)
            return <CompleteTask key={index} data={task} />
          if (task.failed)
            return <FailTask key={index} data={task} />
          if (task.active && task.newTask)
            return <NewTask key={index} data={task} index={index} onStatusChange={onStatusChange} />
          if (task.active && !task.newTask)
            return <AcceptTask key={index} data={task} index={index} onStatusChange={onStatusChange} />
        })}
      </div>
  )
}

export default TaskList