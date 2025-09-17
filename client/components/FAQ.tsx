import { useState } from "react";
import { motion } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is NexoFi, and how does it work?",
      answer: "NexoFi is a revolutionary Web3 finance platform that provides secure, scalable, and decentralized solutions for your digital assets. It leverages blockchain technology to offer financial freedom through innovative DeFi protocols."
    },
    {
      question: "How is blockchain related to cryptocurrency?",
      answer: "Blockchain is the underlying technology that powers cryptocurrencies. It's a distributed ledger that records all transactions across a network of computers, providing transparency, security, and decentralization."
    },
    {
      question: "Is Blockchain technology secure?",
      answer: "Yes, blockchain technology is inherently secure due to its cryptographic hashing, distributed nature, and consensus mechanisms. However, security also depends on proper implementation and user practices."
    },
    {
      question: "How does blockchain enhance security?",
      answer: "Blockchain enhances security through cryptographic hashing, immutable records, distributed consensus, and transparency. Each block is linked to the previous one, making it extremely difficult to alter historical data."
    },
    {
      question: "Can blockchain be hacked?",
      answer: "While blockchain networks themselves are very secure, individual applications, wallets, or exchanges built on blockchain can be vulnerable. The blockchain's core protocol is resistant to hacking due to its distributed nature."
    },
    {
      question: "How can I implement blockchain in my industry",
      answer: "Blockchain can be implemented across various industries through smart contracts, supply chain tracking, identity verification, and decentralized applications. We offer consultation services to help integrate blockchain into your business."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-radut-black px-4 md:px-8 lg:px-[217px] py-16 md:py-20 relative">
      {/* Background glow effect */}
      <div className="absolute left-0 bottom-0 w-[606px] h-[425px] rounded-full bg-blue-500/6 blur-[139.9px] -translate-x-1/4 translate-y-1/2"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-5 mb-16 md:mb-18">
          {/* Badge */}
          <div className="flex justify-center items-center gap-2 px-5 py-3 border border-radut-pink-dark rounded-3xl backdrop-blur-[20px]">
            <span className="text-radut-pink font-alexandria text-sm font-normal">FAQ</span>
          </div>
          
          {/* Title */}
          <h2 className="text-white font-alexandria text-3xl md:text-4xl lg:text-5xl font-normal leading-[100%] capitalize text-center">
            Get Answers To Common Questions
          </h2>
          
          {/* Description */}
          <p className="text-radut-pink font-inter text-lg font-normal leading-[140%] text-center max-w-[644px]">
            From basics to advanced topics, find everything you need to know right here. Let us help you simplify the process and find the clarity you're looking
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-7 max-w-[792px] mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-radut-pink-dark p-4 md:p-5 cursor-pointer transition-all hover:bg-radut-pink-dark/10"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="flex-1 text-white font-alexandria text-base font-normal pr-4">
                  {faq.question}
                </h3>
                
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-5 h-5 text-white transition-transform ${openIndex === index ? 'rotate-45' : ''}`} 
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
                <div className="mt-4 pt-4 border-t border-radut-pink-dark/30">
                  <p className="text-radut-pink font-inter text-sm leading-[140%]">
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
