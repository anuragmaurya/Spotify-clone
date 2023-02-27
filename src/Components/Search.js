import React, { useState, useEffect, useRef } from 'react';
import SearchInput from 'react-search-input';
import Navbar from './NavbarLeft';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import Library from './Library';
const Search = () => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef(null)

  const handleClick = () => {
    console.log("clicked")
    setOpen(!isOpen)
  }

  useEffect(() => {

    const handleScroll = () => {
      if (ref.current.scrollTop > 200) {
        // console.log('Scroll')
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        // console.log('not scrollable')
        // console.log(ref.current)
      };
      // console.log(ref.current)
    };
    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll)
      }
    }
    // document.addEventListener('scroll', handleScroll)
    // return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div className='flex '>
      <div className='flex flex-1'>
        <div className="flex flex-col overflow-hidden ">
          <Navbar className='' />
        </div>
        <div className='flexflex-1'>

          <nav className={`lg:flex fixed top-0 w-full z-10 bg-black text-gray-100 p-2 justify-between transition-all duration-1000 ${isScrolled ? 'bg-black/50' : 'bg-black'}`}>
            <div className='hidden lg:flex items-center ml-[2rem] gap-4 text-3xl'>
              <IoChevronBackOutline className='text-gray-400 p-1 bg-black rounded-full' />
              <IoChevronForwardOutline className='text-gray-400 p-1 bg-black rounded-full' />

            </div>
            <div className='flex items-center round text-black'>
              <SearchInput className='rounded-lg' ></SearchInput>
            </div>
            {/* <input type="search" className='text-black h-10' /> */}


            <ul className='hidden lg:flex text-gray-400 font-semibold items-center mr-[17rem] gap-5 lg:divide-x'>
              <div className='lg:flex justify-end gap-5 mr-5 tracking-widest'>
                <li className='text-base hover:scale-105  hover:text-white'><Link to="">Premium</Link></li>
                <li className='hover:scale-105  hover:text-white'><Link to="">Support</Link></li>
                <li className='hover:scale-105  hover:text-white'> <Link to="">Download</Link></li>
              </div>
              <div className=' lg:flex items-center gap-5 pl-10'>
                <li className='hover:scale-105  hover:text-white'><Link to="">Sign up</Link></li>
                <li className='text-white lg:bg-white  rounded-3xl lg:text-black p-3 pl-8 pr-8 font-semibold hover:scale-105 hover:font-black'><Link to="">Log in</Link></li>
              </div>
            </ul>
            <div className="lg:hidden flex justify-end text-white">
              {!isOpen ? (<HiMenu onClick={handleClick} className='cursor-pointer' size={25} />) : (<AiOutlineClose onClick={handleClick} size={25} className="cursor-pointer" />)}
            </div>
            {isOpen && (<div className={`lg:hidden bg-black w-screen h-screen transition-all duration-1000 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
              <ul className='flex flex-col justify-end text-white font-semibold  ml-[1rem] gap-5 space-y-4'>
                <div className='space-y-4 '>
                  <li className='text-white font-semibold'><Link to="">Log in</Link></li>
                  <li className=''><Link to="">Sign up</Link></li>
                </div>
                <hr className='w-4' />
                <div className=' mr-5 space-y-5 text-xs tracking-widest'>
                  <li className=''><Link to="">Premium</Link></li>
                  <li className=''><Link to="">Help</Link></li>
                  <li className=''> <Link to="">Download</Link></li>
                  <li className=''><Link to="">Privacy</Link></li>
                  <li className=''><Link to="">Terms</Link></li>
                </div>
              </ul>

            </div>)}
          </nav>

          <div ref={ref}>
            <div className='pt-10 bg-neutral-900/[0.98] h-[100%] w-full'>
            </div>
          </div>


        </div>

      </div>
    </div >

  );
};

export default Search;
