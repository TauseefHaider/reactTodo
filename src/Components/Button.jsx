import React from 'react'

export default function Button({ onClick }) {
  return (
    <div>
        <button
        onClick={onClick}
        className='bg-white p-3 rounded-lg text-center font-semibold'>Add Task</button>
    </div>
  )
}

