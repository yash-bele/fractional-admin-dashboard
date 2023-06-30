import { HiMenu } from "react-icons/hi";
import { GoLocation, GoPerson } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="h-20 shadow font-serif fixed top-0 w-full z-50 grid place-items-center">
        {/* <section className="hidden xl:flex items-center space-x-10 font-semibold">
          <div className="bg-orange-400 w-12 h-12 rounded-full"></div>
          <NavLink
            to="/italia"
            className={({ isActive }) =>
              isActive ? "text-slate-700 scale-105" : "text-slate-400"
            }
            href=""
          >
            Natuzzi Italia
          </NavLink>
          <NavLink
            to="/editions"
            className={({ isActive }) =>
              isActive ? "text-slate-700 scale-105" : "text-slate-400"
            }
            href=""
          >
            Natuzzi Editions
          </NavLink>
        </section> */}
        {/* <section className="block xl:hidden text-2xl">
          <HiMenu />
        </section> */}
        <section className="w-fit text-lg text-center">
          <h1>FRACTIONAL ASSET</h1>
          <p className="text-xs">Admin Dashboard</p>
        </section>
        {/* <section className="flex items-center space-x-5">
          <a href="" className="flex items-center space-x-1">
            <span className="text-xs hidden xl:block">STORES</span>
            <GoLocation className="text-lg" />
          </a>
          <a href="" className="flex items-center space-x-1">
            <span className="text-xs hidden xl:block">ACCOUNT</span>
            <GoPerson className="text-xl" />
          </a>
        </section> */}
      </nav>
    </>
  );
};

export default Navbar;
