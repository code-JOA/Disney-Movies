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
        <div className='flex items-center gap-8'>
        <img
            src={logo}
            className="w-[80px] 
        md:w-[115px] object-cover"
        />
        {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>
    );
}

export default Header