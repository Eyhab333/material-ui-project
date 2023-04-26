
import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <header>
        my header
      </header>

      <Outlet />
    </div>
  );
}

export default Root;
