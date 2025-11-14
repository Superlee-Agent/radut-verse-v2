import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "Razornero",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2Fa2a2362745924b71bea55d93530be9c3?format=webp&width=800",
    },
    {
      name: "Fikkkfx",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2Fd348951bb38c4bc590be64bfa74f2ddc?format=webp&width=800",
    },
    {
      name: "Apil",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2Fdf368c4cd28a40a4bf197263d05edaef?format=webp&width=800",
    },
    {
      name: "Dimzjin",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2Ff59dab59f1fc443dbdbac8bf2ea159d0?format=webp&width=800",
    },
    {
      name: "IndraRG",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2F7f73eea1063f45328a264cbb62b5dbcf?format=webp&width=800",
    },
    {
      name: "Cello",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2F174594a3e02f4bebb526a0bd15cdafe1?format=webp&width=800",
    },
    {
      name: "Nimu",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2Fc9f3cfea55ad495b96745e69071f50b7?format=webp&width=800",
    },
    {
      name: "Tudel",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2Fc8bed9e0f6d94c6897d6eceff99250ed?format=webp&width=800",
    },
    {
      name: "Raraaaa",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2F0c5ef75135f94ac8a9fbd3af5eca0619?format=webp&width=800",
    },
    {
      name: "Eleng",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F2711b768900f460f84e959042bd91f7e%2Fd555e05d9f354c22a116848cfda5149b?format=webp&width=800",
    },
  ];

  return (
    <section
      className="bg-radut-purple-dark bg-no-repeat bg-center bg-cover px-4 sm:px-6 md:px-8 lg:px-[120px] py-8 sm:py-12 md:py-16 lg:py-[120px] relative"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fc692190cfd69486380fecff59911b51b%2F1a6a752ead9e4fb2b4cfdbff3821b820)",
      }}
    >
      {/* Background glow effect */}
      <div className="absolute right-0 bottom-0 w-[606px] h-[425px] rounded-full bg-blue-500/6 blur-[139.9px] translate-x-1/4 translate-y-1/2"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-18 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="flex justify-center items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 border border-radut-pink-dark rounded-3xl backdrop-blur-[20px]">
            <span className="text-radut-pink font-alexandria text-xs sm:text-sm font-normal">
              Team
            </span>
          </div>

          {/* Title */}
          <h2 className="text-white font-alexandria text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[100%] capitalize text-center">
            Meet the Team
          </h2>

          {/* Description */}
          <p className="text-radut-pink font-inter text-sm sm:text-base md:text-lg lg:text-lg font-normal leading-[140%] text-center max-w-full lg:max-w-[644px] px-2 sm:px-0">
            Leading the way in blockchain innovation, we are redefining how the
            world connects, secures, and transacts, bringing a new era of
            decentralized technology.
          </p>
        </motion.div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-full lg:max-w-[1138px] mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="radut-card-team flex flex-col items-center gap-4 sm:gap-5 p-6 sm:p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h4 className="radut-text-gradient font-alexandria text-sm sm:text-base font-normal leading-normal text-center">
                {member.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
