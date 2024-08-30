import React from 'react';
import { SearchBar } from './SearchBar';

const AppBar: React.FC = () => {
  return (
    <div className="app-bar flex justify-between pt-1">
      <div className='text-md inline-flex items-center pb-2'>Youtube</div>
      <div><SearchBar/></div>
      <div className='text-md inline-flex items-center pb-2'>SignIn</div>

    </div>
  );
};

export default AppBar;