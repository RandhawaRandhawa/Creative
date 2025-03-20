import React from 'react'
import ServicesPageComponent2Card from './ServicesPageComponent2Card'

const ServicesPageComponent2 = () => {
  return (
    <>
    <div className="relative min-h-full px-2 py-10 mx-auto max-w-screen-xl bg-Black/55 backdrop-blur-sm">
      <div className="relative z-10 w-full max-w-4xl p-8 pt-20 mx-auto text-center">
          <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-sora">
          Convert Your Brand <br />
          Through <span className='text-Primary'>Services</span>
          </h1>
          <p className="mb-8 text-md lg:text-lg font-sora text-zinc-300">
          We delivering high-quality software development services and leading
        the way in digital transformation are our strengths. Our skilled
            staff have demonstrated their talents and are ready to assist you.
          </p>
        </div>
        <ServicesPageComponent2Card/>
      </div>
    </>
  )
}

export default ServicesPageComponent2;