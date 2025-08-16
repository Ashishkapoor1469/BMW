import React from 'react';
import Lgnav from './lgnav';
import Smnav from './smnav';

const Mainnav = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Lgnav/>
      <Smnav/>
    </div>
  );
}

export default Mainnav;
