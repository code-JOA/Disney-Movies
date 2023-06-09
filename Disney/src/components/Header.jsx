import React from 'react'
import logo from './../assets/images/logo.png'
import { HiHome, HiMagnifyingGlass } from 'react-icons'

function Header() {
  return (
    <div>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
    </div>
  )
}

export default Header