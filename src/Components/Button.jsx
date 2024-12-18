import React from 'react'
import add from "../../public/add.svg";

export default function Button({ onClick }) {
  return (
    <div>
        <button
        onClick={onClick}
        className='bg-green-600 p-3 rounded-full text-center  font-semibold'>
        <img  
        className='w-7 h-7'
        src={add} />
      </button>
    </div>
  )
}

