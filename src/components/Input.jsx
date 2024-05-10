import React from 'react'

const Input = ({label, state, setState, placeholder, type}) => {
  return (
    <div className='wrapper flex flex-col mb-1'>
        <p className='label-input mt-6 '>{label}</p>
        <input type={type} value={state} placeholder={placeholder} onChange={(e) => setState(e.target.value)} className='custom-input border-b-2 border-b-slate-300 focus:outline-none opacity-60 focus:opacity-100 transition-all placeholder:text-gray-400'/>
    </div>
  )
}

export default Input