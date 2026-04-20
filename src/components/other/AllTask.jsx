import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-60 overflow-auto'>
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
        <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Completed Task</h5>
        <h5 className='w-1/5 text-lg font-medium'>Failed Task</h5>
      </div>
      <div className='h-[80%] overflow-auto'>
        {userData.map((elem, idx) => {
          // ✅ Compute live counts from actual tasks array
          const newTask   = elem.tasks.filter(t => t.newTask === true).length
          const active    = elem.tasks.filter(t => t.active === true && t.newTask === false).length
          const completed = elem.tasks.filter(t => t.completed === true).length
          const failed    = elem.tasks.filter(t => t.failed === true).length

          return (
            <div key={idx} className="border-2 border-emerald-600 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className='w-1/5 text-lg font-medium'>{elem.firstName}</h2>
              <h3 className='w-1/5 text-lg font-medium text-blue-400'>{newTask}</h3>
              <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{active}</h5>
              <h5 className='w-1/5 text-lg font-medium text-green-600'>{completed}</h5>
              <h5 className='w-1/5 text-lg font-medium text-red-600'>{failed}</h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllTask