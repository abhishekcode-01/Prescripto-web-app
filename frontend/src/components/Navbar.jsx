import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const [showmenu, setshowmenu] = useState();
    const [token, settoken] = useState(true);
    return (
        <div className='flex justify-between items-center p-2'>
            <img className='w-50 ml-10' src={assets.logo} />
            <ul className='flex space-x-4'>
                <NavLink to='/'>
                    <li>HOME</li>
                </NavLink>
                <NavLink to='/about'>
                    <li>ABOUT</li>
                </NavLink>
                <NavLink to='./contact'>
                    <li>CONTACT</li>
                </NavLink>
                <NavLink to='/doctors'>
                    <li>ALL DOCTORS</li>
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                <div>
                    {
                        token
                            ?
                            <div className='items-center gap-2 mr-16 cursor-pointer relative group flex'>
                                <img className='w-8 rounded-full' src={assets.profile_pic} />
                                <img className='w-2.5' src={assets.dropdown_icon} />
                                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                    <div className='min-w-40 bg-stone-100 flex flex-col gap-4 p-2 rounded'>
                                        <p className=''>My profile</p>
                                        <p className=''>My Appointments</p>
                                        <p className=''>Logout</p>
                                    </div>
                                </div>


                            </div>
                            : <button onClick={() => navigate('/login')} className='bg-blue-400 mr-12 py-2 px-3 rounded-[50px] text-white text-[15px] cursor-pointer'>Create Account</button>
                    }
                </div>

            </div>
        </div>
    );
}

export default Navbar
