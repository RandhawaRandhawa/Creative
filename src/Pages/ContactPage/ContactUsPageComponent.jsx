import React from 'react'
import ContactUsPageComponent2 from './ContactUsPageComponent2';
const ContactUsPageComponent = () => {
  return (
    <>
     <div className="relative min-h-full px-2 mx-auto py-60 max-w-screen bg-transparent">
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-medium text-White font-sora lg:text-5xl">
          Contact Us
          <br />
        </h2>
        <p className="mt-6 lg:text-lg font-sora text-zinc-300">
        You don't just have to pick up the phone to ring us - we are on Facebook, LinkedIn as well Instagram! See you there!
        </p>
      </div>
    </div>
    <ContactUsPageComponent2/>
    </>
  )
}

export default ContactUsPageComponent;