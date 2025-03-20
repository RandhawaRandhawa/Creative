import React from 'react';
import ClientReviewsComponentCard from './ClientReviewsComponentCard';

const ClientReviewsComponent = () => {
  return (
    <>
    <div className="relative max-w-screen-xl px-2 py-20 mx-auto min-h-screen-xl bg-Transparent">
    <div className="flex items-center justify-center mx-auto text-center">
    <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-sora">
            <span className="text-center">
            Delivering Results That {""}
              <br />
            </span>
            Make Our Clients Smile
          </h1>
    </div>
    <ClientReviewsComponentCard/>
    </div>
  </>
  )
}

export default ClientReviewsComponent;