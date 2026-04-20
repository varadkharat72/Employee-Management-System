import React from 'react'

const TaskListNumbers = ({counts}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400 text-white">
        <h2 className='text-3xl font-semibold'>{counts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-green-400 text-white">
        <h2 className='text-3xl font-semibold'>{counts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-400 text-white">
        <h2 className='text-3xl font-semibold'>{counts.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400 text-white">
        <h2 className='text-3xl font-semibold'>{counts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
