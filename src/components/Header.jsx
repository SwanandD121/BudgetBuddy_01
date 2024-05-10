import React from 'react'
import { MdDarkMode } from "react-icons/md";


const Header = () => {
  function logoutFnc(){
    alert("Logout");
  }
  return (
    <div className='header sticky p-4 px-6  top-0 left-0 text-white  bg-blue-500 w-full flex justify-between items-center'>
      <h2 className='cursor-pointer font-semibold text-lg'>BudgetBuddy</h2>
      <div className='flex gap-4'>
        <div className='darkmodeicon text-2xl cursor-pointer text-black'><MdDarkMode /></div>
        <h2 className='cursor-pointer text-md opacity-60 hover:opacity-100 hover:scale-105 transition-all' onClick={logoutFnc}>Logout</h2>
      </div>
    </div>
  )
}

export default Header