import React from "react";

const AboutUsPageComponent2 = () => {
  return (
    <>
      <section>
        <div className="relative min-h-full px-2 py-10 mx-auto max-w-screen-xl bg-Black/55 backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-4  md:grid-cols-1">
            <div className="p-8 lg:py-20">
              <div className="max-w-4xl mx-auto text-center ">
                <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-sora">
                  <span className="text-center">
                    We Think Our Story Is {""}
                    <br />
                    Worth Sharing With You
                  </span>
                </h1>

                <p className="mt-6 text-md lg:text-lg font-sora text-zinc-300">
                  We began as a small but ambitious team. We understood the
                  importance of creative and tech-savy solutions to help
                  businesses succeed in the ever-changing digital landscape.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1603202662706-62ead3176b8f?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover w-full h-full transition duration-300 border-2 hover:border-White rounded-2xl"
              />
              <div className="grid gap-4 grid-row-2">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603202662747-00e33e7d1468?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover w-full h-full transition duration-300 border-2 hover:border-White rounded-2xl"
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover w-full h-full transition duration-300 border-2 hover:border-White rounded-2xl"
                />
              </div>
            </div>
            <div className="p-8 lg:py-20">
              <div className="max-w-3xl lg:text-left text-center">
                <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-sora">
                  <span className="text-center">Our Main Mission</span>
                </h1>
                <p className="mb-6 text-lg font-sora text-zinc-300">
                  We are committed to creating designs that inspire, connect &
                  our clients in the marketplace. Our focus is on understanding.
                  Our clients' unique needs and delivery designs that not only
                  meet but exceed their expectations.
                </p>
                <p className="text-md lg:text-lg font-sora text-zinc-300">
                  Empowering businesses to create impactful and visually
                  stunning brand experiences that captivate audiences and drive
                  success in the digital age. Our team consists of experienced
                  designers, developers. We have a wide variety of skills and
                  backgrounds, allowing us to tackle projects of all sizes and
                  complexities. We believe in the power of imagination and
                  innovation.
                </p>
              </div>
              <div className="px-20">
              <div className="absolute bottom-60 right-0 lg:right-1/4 animate-float1 text-White">
                <svg
                  width="150"
                  height="150"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    ></path>
                </svg>
              </div>
              <div className="absolute bottom-20 right-0 lg:right-20 animate-float1 text-zinc-300">
              <svg width="100" height="100" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </div>
              <div className="absolute bottom-20 left-0 lg:left-1/2 animate-float2 text-Primary">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    d="M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
             </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPageComponent2;
