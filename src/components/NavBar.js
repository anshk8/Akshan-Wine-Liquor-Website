import React from 'react';
import logo from '../images/AKSHAN.png'
const NavBar = ({text, fontFamily}) => {
  return (
    <div className="p-5 flex flex-col lg:flex-row items-center m-5 sticky shadow">
      {/* Header Section */}
      <div className=" font-bold w-full lg:w-3/12 text-center">
        <h1
          className={`neonText text-white text-3xl md:text-4xl lg:text-5xl pulsate`}
          style={{ color: `#${text}`, fontFamily }}
        >
          Akshan Wine and Liquor
        </h1>
        {/* <img className="w-[50%]" src={logo}></img> */}
      </div>

      {/* Navigation Section */}
          <nav className="w-full lg:w-9/12 mt-5">
              
              <ul className="flex flex-col items-center md:flex-row justify-center md:justify-around space-y-2 md:space-y-0">
                  
          <li className={`hover:underline hover:decoration-double underline-offset-4 text-[#] font-semibold text-sm md:text-lg lg:text-xl`} style={{ color: `#${text}`, fontFamily }}>
                      <a href="#">Home</a>
                  </li>
                  
          <li className="hover:underline hover:decoration-double underline-offset-4 font-semibold font-playfair text-sm md:text-lg lg:text-xl" style={{ color: `#${text}`, fontFamily }}>
            <a href="#">Order</a>
          </li>
          
          <li className="hover:underline hover:decoration-double underline-offset-4 font-semibold text-sm md:text-lg lg:text-xl" style={{ color: `#${text}`, fontFamily }}>
            <a href="#">About</a>
                  </li>
                  
          <li className="hover:underline hover:decoration-double underline-offset-4 font-semibold text-sm md:text-lg lg:text-xl" style={{ color: `#${text}`, fontFamily }}>
            <a href="#">Contact</a>
          </li>
          

                  
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
