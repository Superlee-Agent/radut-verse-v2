import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why radutverse built on story protocol?",
      answer:
        "RadutVerse is built on Story Protocol because it provides the perfect foundation for decentralized IP creation, registration, and monetization. Story Protocol transforms intellectual property into programmable assets, making it possible for creators to protect, share, and license their work directly on-chain.",
    },
    {
      question: "What is story protocol?",
      answer:
        'Story Protocol is a blockchain-based framework designed to manage and monetize intellectual property (IP) in an open, programmable way. Think of it as the "GitHub for IP" – a system that lets creators register their ideas, prove ownership, and build remixable, on-chain IP economies.',
    },
    {
      question: "Registers IP on-chain",
      answer:
        "Story lets creators record their works – art, music, code, stories, characters – on the blockchain with full provenance and metadata.",
    },
    {
      question: "Tracks ownership and derivatives",
      answer:
        "Every remix, adaptation, or spin-off of an IP can be linked to the original, creating a transparent chain of ownership and attribution.",
    },
    {
      question: "Automates licensing and royalties",
      answer:
        "Smart contracts handle how creators get paid when others use or remix their work, ensuring automatic, trustless royalty distribution.",
    },
    {
      question: "Enables composable creativity",
      answer:
        "Just like DeFi made money composable, Story makes creativity composable – anyone can build new IP on top of existing ones while keeping rights intact.",
    },
    {
      question: "Provides SDK and infrastructure",
      answer:
        "Developers can integrate Story's SDK to bring IP registration, tracking, and monetization directly into their apps or games.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-radut-black px-4 sm:px-6 md:px-8 lg:px-[217px] py-8 sm:py-12 md:py-16 lg:py-20 relative">
      {/* Background glow effect */}
      <div className="absolute left-0 bottom-0 w-[606px] h-[425px] rounded-full bg-blue-500/6 blur-[139.9px] -translate-x-1/4 translate-y-1/2"></div>

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
              FAQ
            </span>
          </div>

          {/* Title */}
          <h2 className="text-white font-alexandria text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[100%] capitalize text-center">
            Get Answers To Common Questions
          </h2>

          {/* Description */}
          <p className="text-radut-pink font-inter text-sm sm:text-base md:text-lg lg:text-lg font-normal leading-[140%] text-center max-w-full lg:max-w-[644px] px-2 sm:px-0">
            From basics to advanced topics, find everything you need to know
            right here. Let us help you simplify the process and find the
            clarity you're looking
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-7 max-w-full lg:max-w-[792px] mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-radut-pink-dark p-3 sm:p-4 md:p-5 cursor-pointer transition-all hover:bg-radut-pink-dark/10"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-start gap-3">
                <h3 className="flex-1 text-white font-alexandria text-sm sm:text-base font-normal">
                  {faq.question}
                </h3>

                <div className="flex-shrink-0 mt-1">
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform ${openIndex === index ? "rotate-45" : ""}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3.33325V16.6666"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.3335 10H16.6668"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Answer - expandable */}
              {openIndex === index && (
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-radut-pink-dark/30">
                  <p className="text-radut-pink font-inter text-xs sm:text-sm leading-[140%]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
