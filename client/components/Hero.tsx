import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="bg-radut-black bg-no-repeat bg-center bg-cover px-4 sm:px-6 md:px-8 lg:px-[80px]"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fc692190cfd69486380fecff59911b51b%2F7abeaae8a46a4333937ee9a7f2257d5b)",
      }}
    >
      <div className="py-8 sm:py-12 md:py-16 lg:py-[88px] flex flex-col justify-center items-center gap-6 sm:gap-8">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-6 sm:gap-8 lg:gap-[33px]">
          {/* Left Content */}
          <motion.div
            className="flex flex-col items-start gap-6 sm:gap-10 flex-1 text-left w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-start gap-4 sm:gap-6 w-full">
              {/* Main Heading */}
              <h1 className="text-white font-alexandria text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-[110%] capitalize max-w-full lg:max-w-[737px] lg:mr-[-86px]">
                The Home of Tokenized IP
              </h1>

              {/* Subheading */}
              <p className="text-white font-inter text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-[140%] max-w-full lg:max-w-[583px] lg:pr-[22px]">
                RadutVerse is the home of tokenized IP a superverse where NFTs,
                tokens, and AI come together to unlock infinite possibilities
                for creators and communities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 w-full sm:w-auto">
              <a
                href="https://radut-agent-v2.vercel.app/"
                className="flex justify-center items-center gap-1.5 px-5 sm:px-6 py-2.5 sm:py-3.5 bg-radut-pink text-black font-alexandria text-sm sm:text-base md:text-lg font-normal rounded-full hover:bg-opacity-90 transition-all w-full sm:w-auto"
              >
                Explore
              </a>

              <button className="flex justify-center items-center gap-1.5 px-5 sm:px-6 py-2.5 sm:py-3.5 border-[1.5px] border-radut-pink-dark rounded-full text-white font-alexandria text-sm sm:text-base md:text-lg font-normal hover:bg-radut-pink-dark transition-all w-full sm:w-auto">
                <svg
                  className="w-5 sm:w-6 h-5 sm:h-6"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6.01044V20.0104L19 13.0104L8 6.01044Z"
                    fill="white"
                  />
                </svg>
                <span className="hidden sm:inline">Watch video</span>
                <span className="sm:hidden">Watch</span>
              </button>
            </div>
          </motion.div>

          {/* Right - 3D Graphic */}
          <div className="w-full lg:w-auto h-[250px] sm:h-[300px] md:h-[400px] lg:h-[512px] relative flex items-center justify-center">
            <div className="relative w-full h-full flex justify-center items-center">
              {/* 3D Spiral/Torus Graphic */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc692190cfd69486380fecff59911b51b%2F7558325392d941238c18bc493d43be1c"
                alt="Character"
                className="w-auto h-full object-contain max-w-full"
              />

              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-radial from-radut-pink/20 via-radut-pink/10 to-transparent rounded-full blur-3xl animate-glow -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
