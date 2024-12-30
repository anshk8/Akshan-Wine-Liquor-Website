import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import image from '../images/bannerAkshan.png'




export const Parralax = ({text, fontFamily}) => {
  return (
    <div className='h-[50vh]'>
      <div className="relative w-full h-full">
        {/* Dimmed Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        {/* Content with Text */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white text-center">
          <h1 style={{fontFamily:"Apple Chancery" , color:"white"}}  className="text-4xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
            A Bottle for Every Moment
          </h1>
          <p style={{fontFamily:"Cinzel"}} className="text-xl sm:text-lg md:text-2xl mt-4 drop-shadow-md">
            Explore our finest selection of wines and liquors
          </p>
        </div>
      </div>
    </div>
  );
};

