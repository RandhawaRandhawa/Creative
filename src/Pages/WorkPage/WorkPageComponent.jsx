import React from 'react'
import WorkPageComponent2 from './WorkPageComponent2';
import WorkPageComponent3 from './WorkPageComponent3';

const WorkPageComponent = () => {
  return (
    <>
    <div className="relative min-h-full px-2 mx-auto py-60 max-w-screen bg-transparent">
    <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute bottom-0 rounded-full opacity-50 w-96 h-96 -top-32 -left-32 bg-DarkPurple/5 animate-float3"></div>
   <div className="absolute bottom-0 rounded-full opacity-50 -top-32 w-96 h-96 -right-20 bg-DarkPurple/5 animate-float1"></div>
     </div>
   <div className="relative z-10 max-w-3xl mx-auto text-center">
     <h2 className="text-4xl font-medium text-White font-sora lg:text-5xl">
       Explore My Work
     </h2>
     <p className="mt-6 lg:text-lg font-sora text-zinc-300">
     We are passionate about what we do! Our work is the pure essence of success over our hard work. We have years of industry experience, collaboration, expertise, and quality results.
     </p>
   </div>
 </div>
 <WorkPageComponent2/>
 <WorkPageComponent3/>
 </>
  )
}

export default WorkPageComponent;