import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      quote:
        "AI streamlines international client coordination by scheduling emails for optimal inbox timing.",
      name: "Darrell Steward",
      position: "Co-founder",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
    },
    {
      quote:
        "AI streamlines international client coordination by scheduling emails for optimal inbox timing.",
      name: "Darrell Steward",
      position: "Co-founder",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
    },
    {
      quote:
        "AI streamlines international client coordination by scheduling emails for optimal inbox timing.",
      name: "Darrell Steward",
      position: "Co-founder",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face",
    },
    {
      quote:
        "AI streamlines international client coordination by scheduling emails for optimal inbox timing.",
      name: "Darrell Steward",
      position: "Co-founder",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=96&h=96&fit=crop&crop=face",
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
              className="radut-card-team flex flex-col items-start gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Quote */}
              <p className="text-radut-gray font-alexandria text-sm sm:text-base font-normal leading-normal">
                "{member.quote}"
              </p>

              {/* Member Info */}
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                {/* Avatar */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name and Position */}
                <div className="flex flex-col items-start min-w-0">
                  <h4 className="radut-text-gradient font-alexandria text-xs sm:text-sm font-normal leading-normal truncate">
                    {member.name}
                  </h4>
                  <p className="text-radut-pink-medium font-alexandria text-xs font-normal leading-normal truncate">
                    {member.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
