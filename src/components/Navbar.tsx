import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [displayIcon, setDisplayIcon] = useState(true); //manage display of icon in search bar.
  const [sidebar, setSidebar] = useState(false); //manage display of sidebar.

  // a function that toggles state of sidebar.
  const toggleSideBar = () => {
    setSidebar(!sidebar);
  };

  return (
    <header>
      <div className=" bg-black fixed w-full h-[80px] flex justify-between items-center px-6">
        {/* hamburger icon */}
        <div className="flex md:hidden transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 hover:cursor-pointer ">
          <GiHamburgerMenu className="text-white" size={30} onClick={toggleSideBar} />
        </div>
        <div className="hidden md:flex flex-row justify-between">
          <a href="#" className=" font-sfPro p-5 text-navlink text-white">
            home
          </a>
          <a href="#" className="p-5 text-navlink text-white font-sfPro ">
            about
          </a>
          <a href="#" className="p-5 text-navlink text-white font-sfPro ">
            contact
          </a>
        </div>
        {/* search bar */}
        <div className="hidden md:flex ">
          <label className="relative block">
            <span className="sr-only w-max">Search</span>
            <span className="absolute inset-y-0 left-36 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300 " viewBox="0 0 20 20">
                {displayIcon ? <AiOutlineSearch size={20} /> : null}
              </svg>
            </span>
            <input
              className="placeholder: justify-center text-center text-slate-400 block bg-white w-96 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus: border-white focus:ring-sky-500 focus: ring-1 sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
              onChange={(e) => {
                if (e.target.value !== "") {
                  setDisplayIcon(false);
                } else {
                  setDisplayIcon(true);
                }
              }}
            />
          </label>
        </div>
      </div>
      {/* sidebar */}
      {sidebar ? <Sidebar /> : null}
    </header>
  );
};
export default Navbar;
