import Navigation from "./Navigation";
import Footer from "./Footer";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({
  title,
  description,
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-radut-black">
      <Navigation />

      <main className="flex-1 flex items-center justify-center py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-[120px]">
        <div className="text-center max-w-full md:max-w-2xl">
          <h1 className="text-white font-alexandria text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[110%]">
            {title}
          </h1>
          <p className="text-radut-pink font-inter text-sm sm:text-base md:text-lg lg:text-xl leading-[140%] mb-6 sm:mb-8">
            {description ||
              `The ${title.toLowerCase()} page is coming soon. Continue prompting to have this page filled with amazing content!`}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-radut-pink text-black font-alexandria text-sm sm:text-base md:text-lg font-normal rounded-full hover:bg-opacity-90 transition-all">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 border border-radut-pink-dark text-white font-alexandria text-sm sm:text-base md:text-lg font-normal rounded-full hover:bg-radut-pink-dark transition-all">
              Learn More
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
