import React from 'react'

export default function Input({ value, onChange }) {
  return (
    <div>
        <input type='text' value={value} onChange={onChange} className='rounded-lg h-10 w-[250px] p-2' placeholder='Input todo'/>
    </div>
  )
}
