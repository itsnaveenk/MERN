import React from 'react';
import { SearchBar } from './SearchBar';
import Sidebar from './Sidebar';

const AppBar: React.FC = () => {
  return (
    <div className="grid grid-cols-12">
      <div className='col-span-1 m-2'><Sidebar /></div>
      <div className="app-bar flex justify-between pt-1 col-span-11">
        <div className='text-md inline-flex items-center pb-2'>Youtube</div>
        <div><SearchBar /></div>
        <div className='text-md inline-flex items-center pb-2'>SignIn</div>
      </div>
    </div>
  );
};

export default AppBar;