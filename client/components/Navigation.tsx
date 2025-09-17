import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 lg:px-[120px] py-5 border-b border-radut-pink-dark bg-radut-black">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b74e70b0bf94ee188832387fb472fb0ade4d5a51?width=306" 
          alt="Radutverse Logo" 
          className="h-[45.87px] w-[153px] object-contain"
        />
      </div>

      {/* Navigation Items - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:flex items-center gap-10">
        <Link 
          to="/" 
          className="text-white font-alexandria text-base font-normal hover:text-radut-pink transition-colors"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="text-radut-pink font-alexandria text-base font-normal hover:text-white transition-colors"
        >
          About
        </Link>
        <Link 
          to="/team" 
          className="text-radut-pink font-alexandria text-base font-normal hover:text-white transition-colors"
        >
          Team
        </Link>
        <Link 
          to="/news" 
          className="text-radut-pink font-alexandria text-base font-normal hover:text-white transition-colors"
        >
          News
        </Link>
        <Link 
          to="/faq" 
          className="text-radut-pink font-alexandria text-base font-normal hover:text-white transition-colors"
        >
          FAQ
        </Link>
      </div>

      {/* Auth Buttons - Hidden on mobile, shown on tablet+ */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-6 py-2 text-white font-alexandria text-base font-normal hover:text-radut-pink transition-colors">
          Log in
        </button>
        <button className="px-6 py-2 bg-radut-pink text-black font-alexandria text-base font-normal rounded-full hover:bg-opacity-90 transition-all">
          Start Exploring
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button className="text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
