import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="bg-radut-black bg-no-repeat bg-center bg-cover px-[80px]"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fc692190cfd69486380fecff59911b51b%2F7abeaae8a46a4333937ee9a7f2257d5b)",
      }}
    >
      <div className="py-16 md:py-22 lg:py-[88px] flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-[33px]">
          {/* Left Content */}
          <motion.div
            className="flex flex-col items-start gap-10 flex-1 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-start gap-6 w-full">
              {/* Main Heading */}
              <h1 className="text-white font-alexandria text-4xl md:text-5xl lg:text-[64px] font-bold leading-[110%] capitalize max-w-[737px] lg:mr-[-86px]">
                The Home of Tokenized IP
              </h1>

              {/* Subheading */}
              <p className="text-radut-pink font-inter text-lg md:text-xl font-normal leading-[140%] max-w-[583px] lg:pr-[22px]">
                RadutVerse is the home of tokenized IP a superverse where NFTs,
                tokens, and AI come together to unlock infinite possibilities
                for creators and communities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link
                to="/coming-soon"
                className="flex justify-center items-center gap-1.5 px-6 py-3.5 bg-radut-pink text-black font-alexandria text-lg font-normal rounded-full hover:bg-opacity-90 transition-all"
              >
                Explore
              </Link>

              <button className="flex justify-center items-center gap-1.5 px-6 py-3.5 border-[1.5px] border-radut-pink-dark rounded-full text-white font-alexandria text-lg font-normal hover:bg-radut-pink-dark transition-all">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6.01044V20.0104L19 13.0104L8 6.01044Z"
                    fill="white"
                  />
                </svg>
                Watch video
              </button>
            </div>
          </motion.div>

          {/* Right - 3D Graphic */}
          <div className="w-full max-w-[512px] h-[300px] md:h-[400px] lg:w-[512px] lg:h-[512px] relative flex items-center justify-center">
            <div className="relative w-full h-full flex justify-center mt-[188px] mr-[71px]">
              {/* 3D Spiral/Torus Graphic */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fc692190cfd69486380fecff59911b51b%2F7558325392d941238c18bc493d43be1c"
                alt="Character"
                className="w-auto h-full object-contain mr-[20px]"
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
