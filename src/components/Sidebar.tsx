import { FC, useState } from "react";
import { AiOutlineCloseSquare, AiOutlineSearch } from "react-icons/ai";

const Sidebar: FC = () => {
  const [displayIcon, setDisplayIcon] = useState(true);
  const [sideBarVisible, setSideBarVisible] = useState(true); //assuming user has already clicked the hamburger icon and sidebar is open.

  if (sideBarVisible) {
    return (
      <section>
        <div>
          <div className="z-20 fixed top-0 left-0 h-screen w-64 bg-black shadow-2xl md:hidden  ">
            <div className=" flex justify-end mx-4 my-4 hover:cursor-pointer ">
              <AiOutlineCloseSquare
                size={22}
                color="white"
                onClick={() => {
                  setSideBarVisible(false);
                }}
              />
            </div>
            <div className=" flex flex-col justify-between h-screen ">
              <div className="flex flex-col ml-7 my-14">
                {/* nav links */}
                <div className=" text-navlink text-white my-4 hover:cursor-pointer "> home </div>
                <div className=" text-navlink text-white my-4 hover:cursor-pointer"> about </div>
                <div className=" text-navlink text-white my-4 hover:cursor-pointer"> contact </div>
              </div>
              {/* search bar */}
              <div className=" flex mb-28   ">
                <label className="relative block">
                  <span className="sr-only w-max">Search</span>
                  <span className="absolute inset-y-0 left-12 flex items-center pl-2">
                    <svg className="h-5 w-5 fill-slate-300 " viewBox="0 0 20 20">
                      {displayIcon ? <AiOutlineSearch size={20} /> : null}
                    </svg>
                  </span>
                  <input
                    className=" ml-7 w-40 placeholder:justify-center text-center text-slate-400 block bg-white border border-slate-300 rounded-lg py-2 pl-6 pr-3 shadow-sm focus:outline-none focus: border-white focus:ring-sky-500 focus: ring-1 sm:text-sm"
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
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Sidebar;
