import React from 'react'
import logo from './../assets/images/logo.png'
import { HiHome, 
        HiMagnifyingGlass,
        HiStar,
        HiPlayCircle,
        HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from '../components/HeaderItem';

function Header() {

    const menu=[
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {   name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return (
      <div className="flex items-center justify-between py-5">
        <div className="flex gap-8 items-center">
          <img
            src={logo}
            className="w-[80px] 
        md:w-[115px] object-cover"
          />
          <div className="hidden md:flex gap-8">
            {menu.map((item)=>(
              <HeaderItem name={item.name} Icon={item.icon} />
            ))}
          </div>
          <div className='flex md:hidden gap-5'>
            {menu.map((item,index)=> index<3&&(
              <HeaderItem name={item.name} Icon={item.icon} />
            ))}
            <div className='md:hidden'>
                <HeaderItem name={""} Icon={HiDotsVertical} />
            </div>
          </div>
        </div>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          className="w-[30px] founded-full"
        />
      </div>
    );
}

export default Header