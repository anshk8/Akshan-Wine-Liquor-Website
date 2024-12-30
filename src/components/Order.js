import React from 'react';
import storeFront from '../images/akshanWineLiquor.jpg';
import doordashLogo from '../images/dooor-dash.png';

const Order = ({ text, fontFamily }) => {
  return (
    <div id="order" className="text-4xl lg:text-5xl w-full grid justify-items-center mt-5 pt-5 font-bold" style={{ color: `#${text}`, backgroundColor: "#CC9456" }}>
      <h1 style={{ color: `#${text}`, fontFamily }}>Order Now</h1>

      {/* Flex, with image and Map Side by Side */}
      <div className="sm:block md:flex w-full justify-between mt-10">
        {/* Pickup Section */}
        <div className=" md:w-[55%] text-4xl lg:w-[65%] text-center ">
        <h2 className="text-3xl sm:text-4xl"style={{ color: `#${text}`, fontFamily }}>Come Visit Us!</h2>

          <iframe
            className="md:h-40 lg:h-80 mt-5 w-9/12 mx-auto md:h-40"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.254897314305!2d-73.04923732389362!3d40.82236453085172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e847d17c3a2ed1%3A0xeb32f53838259d76!2sAkshan%20Wine%20%26%20Liquor!5e0!3m2!1sen!2sca!4v1735013411959!5m2!1sen!2sca"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* DoorDash Logo and Order Button */}
          <div className="flex w-full items-center justify-center mt-5 space-x-4">
            {/* DoorDash Logo */}
            <img className="w-[15%]" src={doordashLogo} alt="DoorDash Logo" />

            {/* Order Button */}
            <a
              href="https://www.doordash.com/en-CA/convenience/store/akshan-wine-&-liquor-holtsville-27776296/?srsltid=AfmBOoq7beKOJTdDpReykwKVladI09_0l372z6DpHazEJttkAp6An9a3"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
              Order on DoorDash
            </a>
          </div>
        </div>

        {/* Order Online Section - Image */}
        <div className="sm:w-full sm:text-center sm:mt-5 md:w-[40%] lg:w-[35%] justify-items-center text-3xl mx-auto p-5">
          <img className="w-[100%]" src={storeFront} alt="Store Front" />
        </div>
      </div>
    </div>
  );
};

export default Order;
