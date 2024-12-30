import React from 'react'
import variety from '../images/about2.jpg'

const About = ({fontFamily, text}) => {
  return (
      <div className='w-full justify-items-center mt-10 border-b pb-5'>
          <h1 className="text-5xl font-bold" style={{ color: `#${text}`, fontFamily }}>
            About Us
        </h1>

        <div className='w-full md:flex mt-10'>
            {/*Akshan Photo */}
            <div className="w-full mb-5 md:w-[40%] md:ml-5 flex justify-center">
            <img className="w-full max-w-[300px] md:max-w-none" src={variety} alt="Variety" />
            </div>
                

            <div className='sm: w-[100%] md:w-[60%] justify-items-center m-auto'>
                <h2
                className="w-[80%] text-3xl font-extrabold pb-5"
                        style={{ fontFamily }}> Cheers to You! </h2>
                    
                <p className="w-[80%] text-lg leading-relaxed">
                    At Akshan Wine and Liquor, we are passionate about offering high-quality spirits, an incredible variety, and the perfect drink for every occasion. Whether you're celebrating, unwinding, or just exploring, we've got something for everyone!
                </p>
            </div>
              
        </div>
    </div>
  )
}

export default About