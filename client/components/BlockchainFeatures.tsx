export default function BlockchainFeatures() {
  return (
    <section className="bg-radut-black px-4 md:px-8 lg:px-[120px] py-16 md:py-[60px] relative">
      {/* Background glow effects */}
      <div className="absolute right-0 bottom-0 w-[606px] h-[425px] rounded-full bg-blue-500/6 blur-[139.9px] translate-x-1/4 translate-y-1/2"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-16 md:mb-20">
          {/* Badge */}
          <div className="flex justify-center items-center gap-2 px-5 py-3 border border-radut-pink-dark rounded-3xl backdrop-blur-[20px]">
            <span className="text-radut-pink font-alexandria text-sm font-normal">News</span>
          </div>
          
          {/* Title */}
          <h2 className="text-white font-alexandria text-3xl md:text-4xl lg:text-5xl font-normal leading-[100%] capitalize text-center">
            The Future Of Blockchain Technology
          </h2>
          
          {/* Description */}
          <p className="text-radut-pink font-inter text-lg font-normal leading-[140%] text-center max-w-[644px]">
            Leading the way in blockchain innovation, we are redefining how the world connects, secures, and transacts, bringing a new era of decentralized technology.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Scalability Card */}
          <div className="radut-card flex flex-col items-center gap-9 p-8 md:p-12 rounded-xl">
            <div className="flex justify-center items-center w-12 h-12">
              <svg className="w-12 h-12" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6665 12C18.6665 14.83 18.6665 16.244 17.7865 17.12C16.9085 18 15.4965 18 12.6665 18C9.8365 18 8.4225 18 7.5465 17.12C6.6665 16.242 6.6665 14.83 6.6665 12C6.6665 9.17 6.6665 7.756 7.5465 6.88C8.4245 6 9.8365 6 12.6665 6C15.4965 6 16.9105 6 17.7865 6.88C18.6665 7.758 18.6665 9.17 18.6665 12ZM18.6665 12H24.6665M36.6665 18C33.8365 18 32.4225 18 31.5465 17.12C30.6665 16.242 30.6665 14.83 30.6665 12C30.6665 9.17 30.6665 7.756 31.5465 6.88C32.4245 6 33.8365 6 36.6665 6C39.4965 6 40.9105 6 41.7865 6.88C42.6665 7.758 42.6665 9.17 42.6665 12C42.6665 14.83 42.6665 16.244 41.7865 17.12C40.9085 18 39.4965 18 36.6665 18ZM36.6665 18V24M30.6665 36C30.6665 33.17 30.6665 31.756 31.5465 30.88C32.4245 30 33.8365 30 36.6665 30C39.4965 30 40.9105 30 41.7865 30.88C42.6665 31.758 42.6665 33.172 42.6665 36C42.6665 38.828 42.6665 40.242 41.7865 41.12C40.9085 42 39.4945 42 36.6665 42C33.8385 42 32.4245 42 31.5465 41.12C30.6665 40.242 30.6665 38.83 30.6665 36ZM30.6665 36H24.6665M12.6665 30C15.4965 30 16.9105 30 17.7865 30.88C18.6665 31.758 18.6665 33.17 18.6665 36C18.6665 38.83 18.6665 40.244 17.7865 41.12C16.9085 42 15.4965 42 12.6665 42C9.8365 42 8.4225 42 7.5465 41.12C6.6665 40.242 6.6665 38.83 6.6665 36C6.6665 33.17 6.6665 31.756 7.5465 30.88C8.4245 30 9.8365 30 12.6665 30ZM12.6665 30V24" stroke="#FF0088" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="flex flex-col items-center gap-4 w-full">
              <h3 className="text-white font-inter text-xl font-normal leading-[140%] text-center">
                Scalability
              </h3>
              <p className="text-radut-pink font-alexandria text-base font-normal text-center">
                Adapt and grow, no matter the demand on grow
              </p>
            </div>
          </div>

          {/* Decentralisation Card */}
          <div className="radut-card flex flex-col items-center gap-9 p-8 md:p-12 rounded-xl">
            <div className="flex justify-center items-center w-12 h-12">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.5 30V40.5H30M39.5437 39.5409L28.5 28.5M7.5 18V7.5H18M8.45625 8.45906L19.5 19.5M30 7.5H40.5V18M39.5409 8.45625L28.5 19.5M18 40.5H7.5V30M8.45906 39.5437L19.5 28.5" stroke="#FF0088" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="flex flex-col items-center gap-4 w-full">
              <h3 className="text-white font-inter text-xl font-normal leading-[140%] text-center">
                Decentralisation
              </h3>
              <p className="text-radut-pink font-alexandria text-base font-normal text-center">
                Decentralization. Web3 aims to move away from the centralized
              </p>
            </div>
          </div>

          {/* Connectivity Card */}
          <div className="radut-card flex flex-col items-center gap-9 p-8 md:p-12 rounded-xl">
            <div className="flex justify-center items-center w-12 h-12">
              <svg className="w-12 h-12" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip1_3007_206)">
                  <mask id="mask1_3007_206" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="48">
                    <path d="M0.333008 0H48.333V48H0.333008V0Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask1_3007_206)">
                    <path d="M8.69287 9.26855C9.48572 8.36112 10.3505 7.51911 11.2787 6.75071" stroke="#FF0088" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.74365 18.9504C4.29498 16.5539 5.23945 14.2652 6.53871 12.1773" stroke="#FF0088" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.1391 41.1333C6.2699 37.0359 3.17334 30.8814 3.17334 24C3.17334 23.7386 3.17784 23.4783 3.18665 23.2192" stroke="#FF0088" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="25.4013" cy="10.5257" r="2.14835" stroke="#FF0088" strokeWidth="1.5"/>
                    <circle cx="17.0829" cy="19.9637" r="2.14835" stroke="#FF0088" strokeWidth="1.5"/>
                    <circle cx="36.5243" cy="25.4469" r="2.14835" stroke="#FF0088" strokeWidth="1.5"/>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip1_3007_206">
                    <rect width="48" height="48" fill="white" transform="translate(0.333008)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            
            <div className="flex flex-col items-center gap-4 w-full">
              <h3 className="text-white font-inter text-xl font-normal leading-[140%] text-center">
                Connectivity
              </h3>
              <p className="text-radut-pink font-alexandria text-base font-normal text-center">
                computers will be able to understand information similarly to humans
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
