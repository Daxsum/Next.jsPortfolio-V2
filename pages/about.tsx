import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
export default function landing (){
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const handleSubmit=()=>{
    var templateParams = {
      to_name: 'kalab',
      from_name: 'sir/madam',
      message:message,
      reply_to:email
  };
   
  emailjs.send('service_sa3v1uw', 'template_bh3e7hs', templateParams,"K5PQH47HJGyC7qX2k")
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your message has been successfully sent!',
          showConfirmButton: false,
          timer: 1500
        })
      }, function(error) {
         console.log('FAILED...', error);
         Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'oops!something goes wrong!',
          showConfirmButton: false,
          timer: 1500
        })
      });
console.log(email,message)
  }
    return( <div className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed" >
    <div className="h-full">
      <div className=" grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
       
        <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-xl md:text-4xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
        Hello,I'm Kalab Tenadeg,a skilled
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-500 to-green-500 whitespace-nowrap ">
              {" "}FullStack Engineer. 
            </span>
           <br/>
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
          How can I help you today?
          </p>

          <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-3 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
              Sign up to receive notifications for every new blog article.
              </label>
              <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
              Email
              </label>

              <input
                className="shadow appearance-none border rounded w-full px-8 py-5 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="emailaddress"
                type="text"
                value={email}
                placeholder="you@somewhere.com"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="message">
              Message
              </label>
              <input
                className="shadow appearance-none border rounded w-full px-8 py-5 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="message"
                type="text"
                placeholder="Your Message..."
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                className="bg-gradient-to-r from-blue-500 via-pink-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="w-full p-1 overflow-hidden">
          
          <img className="mx-auto w-full transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="/static/images/skills/hero.svg" />
        </div>
       
      </div>
    </div>
  </div>)
}