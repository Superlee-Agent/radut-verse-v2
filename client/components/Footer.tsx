import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-radut-black px-4 md:px-8 lg:px-[120px] pt-16 md:pt-20">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[126px] pb-10">
        {/* Left Side - Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 lg:gap-16 w-full lg:w-[690px]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/893eb8aef7ccc715a1b7c235ad6105815b3ff981?width=274"
              alt="Radutverse Logo"
              className="h-[41px] w-[137px] object-contain"
            />
          </div>

          {/* Link Columns */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[65px] lg:mr-[-66px]">
            {/* Quick Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-inter text-xl font-normal leading-[140%]">
                Quick links
              </h4>
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-sm font-normal hover:text-white transition-colors`}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-sm font-normal hover:text-white transition-colors`}
                >
                  About
                </NavLink>
                <NavLink
                  to="/team"
                  className={({ isActive }) => `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-sm font-normal hover:text-white transition-colors`}
                >
                  Team
                </NavLink>
                <NavLink
                  to="/news"
                  className={({ isActive }) => `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-sm font-normal hover:text-white transition-colors`}
                >
                  News
                </NavLink>
                <a
                  href="#terms"
                  className="text-radut-pink font-alexandria text-sm font-normal hover:text-white transition-colors"
                >
                  Term of Use
                </a>
              </div>
            </div>

            {/* Help */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-inter text-xl font-normal leading-[140%]">
                Help
              </h4>
              <div className="flex flex-col gap-2">
                <Link
                  to="/help"
                  className="text-radut-pink font-alexandria text-sm font-normal hover:text-white transition-colors"
                >
                  Help Centre
                </Link>
                <Link
                  to="/faq"
                  className="text-radut-pink font-alexandria text-sm font-normal hover:text-white transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  to="/forum"
                  className="text-radut-pink font-alexandria text-sm font-normal hover:text-white transition-colors"
                >
                  Forum
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-6">
              <h4 className="text-white font-inter text-xl font-normal leading-[140%]">
                Social Media
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-radut-pink font-alexandria text-sm font-normal hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-radut-pink font-alexandria text-sm font-normal hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-radut-pink font-alexandria text-sm font-normal hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Newsletter */}
        <div className="flex flex-col justify-center items-start gap-5 w-full lg:w-[385px]">
          <h4 className="text-radut-gray-light font-inter text-xl font-normal leading-[140%] max-w-[198px]">
            Join our mailing list for updates
          </h4>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-transparent text-radut-pink font-alexandria text-sm font-normal placeholder:text-radut-pink flex-1 outline-none"
                required
              />

              <button
                type="submit"
                className="w-10 h-10 bg-radut-pink rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
              >
                <svg
                  className="w-[18px] h-[18px] text-black"
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
              </button>
            </div>

            {/* Underline */}
            <div className="w-full h-[0.5px] bg-radut-pink"></div>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        id="terms"
        className="flex justify-between items-start py-10 border-t border-radut-pink-dark/30"
      >
        <p className="text-radut-pink font-alexandria text-xs font-normal mx-auto">
          © 2025. All rights reserved. | Radutverse
        </p>
      </div>
    </footer>
  );
}
