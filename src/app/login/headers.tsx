import Link from 'next/link'
import React from 'react'

const Headers = (props:any) => {
  return (
    <div className="pr-20 pt-5">
      {
        props.isLoginPages &&  <div className='flex justify-end items-center gap-4'>
          <span className='text-sky-600'>Login</span>
          <button type='button' className='header-btn text-sky-700'><Link href={"/register"}>Register</Link></button>
          </div>
      }
      {
        !props.isLoginPages &&  <div className='flex justify-end'>
          <span className='text-sky-600'>Register</span>
          <button type='button' className='header-btn text-sky-700'>Login</button>
          </div>
      }
    </div>
  )
}

export default Headers