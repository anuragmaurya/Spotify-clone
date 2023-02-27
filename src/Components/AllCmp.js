import React from 'react';
import NavbarLeft from './NavbarLeft';
import Main from './Main';

const AllCmp = () => (
  <div className='overflow-y-hidden'>
    <div className='flex h-screen'>

      <div className="flex flex-1 overflow-hidden">
        <NavbarLeft className='' />
        <Main />
      </div>
    </div>

  </div>
);

export default AllCmp;
