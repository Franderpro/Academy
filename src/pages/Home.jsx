  import React from 'react';
  import NavC from '../componentes/NavC';
  import Sidebar from '../componentes/sidebar';

  const Home = () => {
    return (
      <div className="flex flex-col">
        <div className="fixed w-full z-10">
          <NavC />
        </div>
        <div className="flex mt-[64px]">
          <div className="w-[240px] fixed h-screen">
            <Sidebar />
          </div>
         
           
        </div>
      </div>
    );
  };

  export default Home;