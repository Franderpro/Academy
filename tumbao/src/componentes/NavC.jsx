  import React from 'react';
  import { FaUser } from 'react-icons/fa';

  const NavC = () => {
    return (
      <nav className="bg-[#116a1c] py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-[#00aac4] text-xl font-bold">TUMBAO</a>
            <div>
              <a href="#user" className="text-[#084c36] flex items-center">
                <FaUser className="mr-1" />
                Serrato
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default NavC;