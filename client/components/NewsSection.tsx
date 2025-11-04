import { motion } from "framer-motion";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Radutverse Launches New Blockchain Initiative",
    description:
      "We are excited to announce the launch of our latest blockchain initiative aimed at revolutionizing decentralized technology and enhancing user experience.",
    date: "March 15, 2025",
    category: "Announcement",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/893eb8aef7ccc715a1b7c235ad6105815b3ff981?width=400",
  },
  {
    id: 2,
    title: "Major Partnership Announcement",
    description:
      "Radutverse has partnered with leading organizations to advance innovation in Web3 and blockchain technologies.",
    date: "March 10, 2025",
    category: "Partnership",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/893eb8aef7ccc715a1b7c235ad6105815b3ff981?width=400",
  },
  {
    id: 3,
    title: "Community Growth Milestone",
    description:
      "Our community has reached an exciting milestone with thousands of active members contributing to the ecosystem.",
    date: "March 5, 2025",
    category: "Milestone",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/893eb8aef7ccc715a1b7c235ad6105815b3ff981?width=400",
  },
  {
    id: 4,
    title: "Technical Improvements Released",
    description:
      "We have released significant technical improvements to enhance platform performance and user security.",
    date: "February 28, 2025",
    category: "Update",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/893eb8aef7ccc715a1b7c235ad6105815b3ff981?width=400",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-radut-black px-4 sm:px-6 md:px-8 lg:px-[120px] py-8 sm:py-12 md:py-16 lg:py-[60px] relative">
      {/* Background glow effects */}
      <div className="absolute right-0 bottom-0 w-[606px] h-[425px] rounded-full bg-blue-500/6 blur-[139.9px] translate-x-1/4 translate-y-1/2"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 mb-12 sm:mb-16 md:mb-20">
          {/* Badge */}
          <div className="flex justify-center items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 border border-radut-pink-dark rounded-3xl backdrop-blur-[20px]">
            <span className="text-radut-pink font-alexandria text-xs sm:text-sm font-normal">
              News
            </span>
          </div>

          {/* Title */}
          <h2 className="text-white font-alexandria text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[100%] capitalize text-center">
            Latest News
          </h2>

          {/* Description */}
          <p className="text-radut-pink font-inter text-sm sm:text-base md:text-lg lg:text-lg font-normal leading-[140%] text-center max-w-full lg:max-w-[644px] px-2 sm:px-0">
            Stay updated with the latest developments, announcements, and
            updates from the Radutverse ecosystem.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="radut-card flex flex-col rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* News Image */}
              {item.image && (
                <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* News Content */}
              <div className="flex flex-col p-6 sm:p-8 gap-4">
                {/* Category Badge */}
                <div className="flex items-center gap-2 w-fit">
                  <span className="text-radut-pink font-alexandria text-xs sm:text-sm font-normal bg-radut-pink/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Date */}
                <p className="text-radut-pink/70 font-alexandria text-xs sm:text-sm font-normal">
                  {item.date}
                </p>

                {/* Title */}
                <h3 className="text-white font-inter text-base sm:text-lg md:text-xl font-normal leading-[140%]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-radut-pink font-alexandria text-sm sm:text-base font-normal leading-[140%] flex-grow line-clamp-1">
                  {item.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-radut-pink hover:text-white transition-colors cursor-pointer pt-2">
                  <span className="font-alexandria text-sm sm:text-base font-normal">
                    Read More
                  </span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9.07227H15M15 9.07227L10.5 4.57227M15 9.07227L10.5 13.5723"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
