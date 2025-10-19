import { motion } from "framer-motion";

export default function Features() {
  return (
    <section
      className="bg-radut-black bg-no-repeat bg-center bg-cover px-[120px] py-[80px] relative"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fc692190cfd69486380fecff59911b51b%2F9b585062be044f7e9946bb8930013e15)",
      }}
    >
      {/* Background glow effects */}
      <div className="absolute left-0 top-0 w-[600px] h-[600px] rounded-full bg-blue-500/16 blur-[139.9px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute right-0 bottom-0 w-[606px] h-[425px] rounded-full bg-blue-500/6 blur-[139.9px] translate-x-1/4 translate-y-1/2"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center gap-5 mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="flex justify-center items-center gap-2 px-5 py-3 border border-radut-pink-dark rounded-3xl backdrop-blur-[20px]">
            <span className="text-radut-pink font-alexandria text-sm font-normal">
              About
            </span>
          </div>

          {/* Title */}
          <h2 className="text-white font-alexandria text-3xl md:text-4xl lg:text-5xl font-normal leading-[100%] capitalize text-center">
            Introducing the RadutVerse
          </h2>

          {/* Description */}
          <p className="text-white font-inter text-lg font-normal leading-[140%] text-center max-w-[644px]">
            RadutVerse is the home of tokenized IP a digital world where ideas
            become assets. Here, creators can transform their intellectual
            property into NFTs, trade seamlessly through token swaps, and unlock
            new possibilities with AI-powered agents. More than just a platform,
            RadutVerse is a superverse built to power the future of IP.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Scalability Card */}
          <div
            className="radut-card flex flex-col items-center gap-9 p-8 md:p-12 rounded-xl transition-transform duration-300 hover:scale-[1.02] will-change-transform"
            data-animate="fade-up"
          >
            <div className="flex justify-center items-center w-12 h-12">
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 12.8704C18 15.7004 18 17.1144 17.12 17.9904C16.242 18.8704 14.83 18.8704 12 18.8704C9.17 18.8704 7.756 18.8704 6.88 17.9904C6 17.1124 6 15.7004 6 12.8704C6 10.0404 6 8.62636 6.88 7.75036C7.758 6.87036 9.17 6.87036 12 6.87036C14.83 6.87036 16.244 6.87036 17.12 7.75036C18 8.62836 18 10.0404 18 12.8704ZM18 12.8704H24M36 18.8704C33.17 18.8704 31.756 18.8704 30.88 17.9904C30 17.1124 30 15.7004 30 12.8704C30 10.0404 30 8.62636 30.88 7.75036C31.758 6.87036 33.17 6.87036 36 6.87036C38.83 6.87036 40.244 6.87036 41.12 7.75036C42 8.62836 42 10.0404 42 12.8704C42 15.7004 42 17.1144 41.12 17.9904C40.242 18.8704 38.83 18.8704 36 18.8704ZM36 18.8704V24.8704M30 36.8704C30 34.0404 30 32.6264 30.88 31.7504C31.758 30.8704 33.17 30.8704 36 30.8704C38.83 30.8704 40.244 30.8704 41.12 31.7504C42 32.6284 42 34.0424 42 36.8704C42 39.6984 42 41.1124 41.12 41.9904C40.242 42.8704 38.828 42.8704 36 42.8704C33.172 42.8704 31.758 42.8704 30.88 41.9904C30 41.1124 30 39.7004 30 36.8704ZM30 36.8704H24M12 30.8704C14.83 30.8704 16.244 30.8704 17.12 31.7504C18 32.6284 18 34.0404 18 36.8704C18 39.7004 18 41.1144 17.12 41.9904C16.242 42.8704 14.83 42.8704 12 42.8704C9.17 42.8704 7.756 42.8704 6.88 41.9904C6 41.1124 6 39.7004 6 36.8704C6 34.0404 6 32.6264 6.88 31.7504C7.758 30.8704 9.17 30.8704 12 30.8704ZM12 30.8704V24.8704"
                  stroke="#FF0088"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
              <svg
                className="w-12 h-12"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.5 30.8704V41.3704H30M39.5437 40.4113L28.5 29.3704M7.5 18.8704V8.37036H18M8.45625 9.32942L19.5 20.3704M30 8.37036H40.5V18.8704M39.5409 9.32661L28.5 20.3704M18 41.3704H7.5V30.8704M8.45906 40.4141L19.5 29.3704"
                  stroke="#FF0088"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
              <svg
                className="w-12 h-12"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3007_2)">
                  <mask
                    id="mask0_3007_2"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="49"
                    height="49"
                  >
                    <path
                      d="M0.333008 0.870361H48.333V48.8704H0.333008V0.870361Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_3007_2)">
                    <path
                      d="M8.69287 10.1388C9.48572 9.23136 10.3505 8.38935 11.2787 7.62095"
                      stroke="#FF0088"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.74365 19.8208C3.96197 17.4242 4.90644 15.1356 6.20571 13.0476"
                      stroke="#FF0088"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.1391 42.0037C6.2699 37.9062 3.17334 31.7517 3.17334 24.8704C3.17334 24.609 3.17784 24.3487 3.18665 24.0895"
                      stroke="#FF0088"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36.1733 44.4143C32.9825 46.1938 28.977 47.2073 25.4021 47.2073C21.1744 47.2073 17.5138 46.2008 14.3306 44.4324"
                      stroke="#FF0088"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M44.2505 13.0241C46.3923 16.4578 47.6305 20.5187 47.6305 24.8702C47.6305 31.7415 44.543 37.8882 39.686 41.9856"
                      stroke="#FF0088"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="25.4013"
                      cy="10.5257"
                      r="2.14835"
                      stroke="#FF0088"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="17.0829"
                      cy="19.9637"
                      r="2.14835"
                      stroke="#FF0088"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="36.5243"
                      cy="25.4469"
                      r="2.14835"
                      stroke="#FF0088"
                      strokeWidth="1.5"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3007_2">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      transform="translate(0.333008 0.870361)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col items-center gap-4 w-full">
              <h3 className="text-white font-inter text-xl font-normal leading-[140%] text-center">
                Connectivity
              </h3>
              <p className="text-radut-pink font-alexandria text-base font-normal text-center">
                computers will be able to understand information similarly to
                humans
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
