import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-4 md:px-6 lg:px-[80px] py-4 md:py-6 border-b border-radut-pink-dark bg-radut-black">
      {/* Logo */}
      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fc692190cfd69486380fecff59911b51b%2F40c2ed3087224173b81212fc1cdfc88c?format=webp&width=800"
          alt="Radut Verse Logo"
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>

      {/* Navigation Items - Hidden on mobile, shown on lg */}
      <div className="hidden lg:flex items-center gap-8 self-stretch">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-sm md:text-base font-normal hover:text-white transition-colors whitespace-nowrap`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-sm md:text-base font-normal hover:text-white transition-colors whitespace-nowrap`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-sm md:text-base font-normal hover:text-white transition-colors whitespace-nowrap`
          }
        >
          Team
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-sm md:text-base font-normal hover:text-white transition-colors whitespace-nowrap`
          }
        >
          News
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            `${isActive ? "text-white" : "text-radut-pink"} font-alexandria text-sm md:text-base font-normal hover:text-white transition-colors whitespace-nowrap`
          }
        >
          FAQ
        </NavLink>
      </div>

      {/* Explore Button - Hidden on mobile, shown on sm+ */}
      <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
        <a
          href="https://radutverse.vercel.app/"
          className="px-4 md:px-6 py-2 bg-radut-pink text-black font-alexandria text-sm md:text-base font-normal rounded-full hover:bg-opacity-90 transition-all whitespace-nowrap"
        >
          Explore
        </a>
      </div>
    </nav>
  );
}
