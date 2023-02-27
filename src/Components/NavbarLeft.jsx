import React from 'react'
import { MdHomeFilled, MdLanguage } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { VscLibrary } from 'react-icons/vsc';
import { RiAddBoxFill } from 'react-icons/ri';
import { BsSuitHeartFill } from 'react-icons/bs';
import { FaSpotify } from 'react-icons/fa';
import { Link, NavLink, Router, Route, Routes } from 'react-router-dom';
import Search from './Search';
import Main from './Main';

const Navbar = () => {

    return (
        <>
            {/* // <div className='flex overflow-hidden'>
        //     <div className='flex h-screen'> */}
            {/* //     <div className="flex flex-1 overflow-hidden"> */}

            {/* <aside className=' bg-black h-screen w-[16rem]'> */}

            <aside className='hidden lg:block h-screen flex-shrink w-64 bg-black text-gray-100 overflow-y-auto'>

                <div>
                    <Link to="/" className='flex m-6 gap-1 text-white '>
                        <FaSpotify size={40} />
                        <p className='flex items-center text-white font-semibold font-rubik text-2xl '>Spotify</p>
                    </Link>
                </div>


                <div className=''>
                    <ul className=' text-gray-400 space-y-4 ml-5 font-rubik text-sm'>
                        <li className='flex '><NavLink exact to="/" className='flex items-center font-semibold gap-3 hover:text-white active:text-white'><MdHomeFilled className=' hover:text-white' size={30} />Home</NavLink></li>
                        <li className='flex '><NavLink to="/Search" className='flex items-center font-semibold gap-3 hover:text-white active:text-white'><FiSearch className='text-gray-500 hover:text-white' size={25} />Search</NavLink></li>
                        <li className='flex '><NavLink to="/Library" className='flex items-center font-semibold gap-3 hover:text-white'><VscLibrary className='hover:text-white text-gray-400' size={25} />Your Library</NavLink></li>
                    </ul>

                    <ul className='ml-5 mt-10 space-y-5 text-gray-500 font-semibold font-rubik text-sm'>
                        <li className='flex hover:text-white'><NavLink to='' className='flex gap-3 items-center'><RiAddBoxFill className='text-slate-300 rounded-lg' size={30} /> Create Playlist</NavLink></li>
                        <li className='flex ml-1 hover:text-white'><NavLink to='' className='flex gap-3 items-center'> <BsSuitHeartFill className='text-slate-300 bg-gradient-to-br from-indigo-900 via-indigo-500 rounded-sm to-purple-200 p-1' size={24} />Liked Songs</NavLink></li>
                    </ul>
                </div>

                <div className='ml-5 mt-[10rem] gap-10 space-y-4 text-gray-300 text-xs font-thin'>
                    <div className='flex gap-5'>
                        <p>Legal</p>
                        <p>Privacy Center</p>
                    </div>
                    <div className='flex gap-5'>
                        <p>Privacy Policy</p>
                        <p>Cookie Settings</p>
                    </div>
                    <p>About Ads</p>
                    <p>Cookies</p>
                </div>

                <div className='ml-5 mt-8 '>
                    <button className='flex items-center gap-2 border-[0.01rem] rounded-3xl p-1 pl-2 pr-2 border-gray-500 text-white'><MdLanguage className='text-white' size={20} /><p className='flex items-center font-semibold text-sm'> English </p></button>
                </div>
            </aside>
            {/* <Main /> */}
            {/* </div>
        </div > */}
        </>

    )
}

export default Navbar