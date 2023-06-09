import React from 'react';
import logo from './../assets/images/disney.png';

function Header() {
  return (
    <div>
        <img src={logo} className='w-[80] object=cover' />
    </div>
  )
}

export default Header