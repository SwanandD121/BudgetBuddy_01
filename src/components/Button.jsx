import React from 'react'

const Button = ({ text, onClick, blue, disabled }) => {
  return (
    <div onClick={onClick} disabled={disabled} className={blue? "btn-blue mt-8 bg-blue-500 hover:bg-white text-white hover:text-blue-500 px-6 py-2 text-center rounded border-2 cursor-pointer  hover:border-blue-500 transition-all" : "btn-normal mt-4 bg-white hover:bg-blue-500 text-blue-500 hover:text-white px-6 py-2 text-center rounded border-2 cursor-pointer border-blue-500  transition-all"}>{text}</div>
  )
}

export default Button