import React from 'react'
import Header from '../components/Header'
import Signupsignin from '../components/Signupsignin'

const Signup = () => {
  return (
    <div>
        <Header />
        <div className='wrapper flex items-center justify-center relative w-full h-[600px]'>
            <Signupsignin />
        </div>
    </div>
  )
}

export default Signup