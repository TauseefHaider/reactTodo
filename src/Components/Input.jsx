import React from 'react'

export default function Input({ value, onChange }) {
  return (
    <div>
        <input type='text' value={value} onChange={onChange} className='rounded-lg h-13 font-semibold w-[350px] p-3' placeholder='Enter Your Task'/>
    </div>
  )
}
