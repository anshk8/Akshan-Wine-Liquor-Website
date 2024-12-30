import React from 'react';
import icebox from '../images/ice.jpg';
import { useState } from 'react';
import configDatabase from "../database/configDatabase"; 
import { getDatabase, ref, set, push} from "firebase/database";

const Contact = ({ text, fontFamily }) => {


  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  // State for message sent status
  const [messageSent, setMessageSent] = useState(false); 


  async function submitMessage(e) {
    e.preventDefault();

    const database = getDatabase(configDatabase);
    const referenceDatabase = ref(database, "contact")



    try {

      const pushMessageRef = push(referenceDatabase)
      await set(pushMessageRef, {
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        message: Message
      });

      setMessageSent(true);

      // Reset form fields after submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");

      // Hide the "Message Sent!" message after 3 seconds
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);

      

    } catch (e) {
      console.error("Error sending message:", e);

    }

  }

  return (
    // Outer Container
    <div id="contact" className="w-full grid justify-items-center mt-10">
      <h1 className="text-5xl font-bold" style={{ color: `#${text}`, fontFamily }}>
        Contact Us
      </h1>

      {/* Flex Container with Image and Form Side by Side */}
       <div className="block md:flex w-full md:m-auto p-5 ">


        {/* Input Form */}
        <form style={{fontFamily:"Cinzel"}} className="w-full md:w-[60%] h-[100%] m-auto flex flex-col gap-3 p-5" onSubmit={submitMessage}>

          <p style={{color:"black"}} className='text-xl'>For Collaborations, Big Orders or any Questions, feel free to contact us! Esimated Response Time: 2-3 Buisness Days.</p>
          {/* Name Inputs */}
          <div className="flex gap-2 w-full">
            <input
              type="text"
              placeholder="First Name"
              className="h-7 w-[50%] px-2 border border-gray-300 rounded"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="h-7 w-[50%] px-2 border border-gray-300 rounded"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="h-7 w-full px-2 border border-gray-300 rounded"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}

            required
          />

          {/* Message Input */}
          <textarea
            placeholder="Message"
            className="h-20 w-full px-2 border border-gray-300 rounded"
            onChange={(e) => setMessage(e.target.value)}
            value={Message}
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded hover:bg-red"
          >
            Submit
          </button>

          {/*If Message is sent, let user know! */}
          {messageSent && <p>Message Sent!</p>}
        </form>

        {/* Image Container */}
        <div className="w-[70%] md:w-[30%] my-auto mx-auto">
          <img className="w-full" src={icebox} alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
