import React from 'react'

function Landing() {
  return (
    <div className="flex flex-col md:flex-row  mx-auto container justify-between px-6 py-28">
    <div className="my-14 md:w-6/12 w-12/12">
      <p className="montserraf font-bold text-5xl text-[#D05270]">Blog Posts</p>
      <p className="text-[#424242] py-2 text-5xl">I think so, this is it.</p>
      <p className="text-[#424242] py-6">
        Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at
        the end of the product, the design will be considered unsuccessful in my opinion.
      </p>
      <div className="flex">
        <a target="_blank" href="https://www.instagram.com/shqn_" className="bg-[#a42eba] duration-200 hover:bg-[#ee9901] flex items-center text-white px-6 mx-2">
          <img src="instagram.png" className="pr-4" />
          <p className="py-4 font-medium text-sm">INSTAGRAM</p>
        </a>
        <a target="_blank" href="https://github.com/rzkystwn0" className="bg-[#000000] duration-200 hover:bg-[#272727] flex items-center text-white px-6 mx-2">
          <img src="github.png" className="pr-4" />
          <p className="py-4 font-medium text-sm">GITHUB</p>
        </a>
      </div>
    </div>
    <div className='order-first'>
      <img src="hero.png" alt="hero" />
    </div>
  </div>
  )
}

export default Landing
