import React from 'react'

export default function landing (){
    return( <div className="leading-normal tracking-normal text-indigo-400 m-6 bg-cover bg-fixed" >
    <div className="h-full">
      <div className="container  mx-auto flex flex-wrap  flex-col md:flex-row items-center">
       
        <div className="flex flex-col w-full xl:w-3/5 justify-center lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-xl md:text-4xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
        Hello,I'm Kalab Tenadeg,<br/>a skilled
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
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
              <input
                className="shadow appearance-none border rounded w-full px-8 py-5 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="emailaddress"
                type="text"
                placeholder="you@somewhere.com"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="w-full xl:w-2/5 p-12 overflow-hidden">
          
          <img className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="/static/images/my logo.png" />
        </div>
       
      </div>
    </div>
  </div>)
}