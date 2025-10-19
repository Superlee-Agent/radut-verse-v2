import { NavLink, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 lg:px-[80px] pt-6 pb-5 border-b border-radut-pink-dark bg-radut-black">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fc692190cfd69486380fecff59911b51b%2F6cb00ece89864cf39382913734ec2caa?format=webp&width=800"
          alt="Radutverse Logo"
          className="h-[45.87px] w-[105px] object-contain"
        />
      </div>

      {/* Navigation Items - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:flex items-center gap-10 self-stretch">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-base font-normal hover:text-white transition-colors`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-base font-normal hover:text-white transition-colors`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-base font-normal hover:text-white transition-colors`
          }
        >
          Team
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-base font-normal hover:text-white transition-colors`
          }
        >
          News
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-base font-normal hover:text-white transition-colors`
          }
        >
          FAQ
        </NavLink>
      </div>

      {/* Auth Buttons - Hidden on mobile, shown on tablet+ */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          to="/coming-soon"
          className="px-6 py-2 bg-radut-pink text-black font-alexandria text-base font-normal rounded-full hover:bg-opacity-90 transition-all"
        >
          Explore
        </Link>
      </div>

      {/* Mobile Menu Button (hidden) */}
      <div className="hidden">
        <button className="text-white p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
