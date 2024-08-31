import React from 'react';
import { SearchBar } from './SearchBar';
import Sidebar from './Sidebar';

const AppBar: React.FC = () => {
  return (
    <div className="flex justify-between	pl-3 pr-3 pt-1">
        <div>
            Youtube
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            SignIn
        </div>
    </div>
  );
};

export default AppBar;