import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-richblack-100 pt-7 pb-7  border-b-1 border-lightcyan-100 drop-shadow-lg drop-shadow-lightcyan-100 font-oswald">
      <nav className="flex justify-end pr-3 list-none text-white text-2xl">
        <NavLink to="/">
          <li className="pr-12 hover:text-tangerine-100 underline">Home</li>
        </NavLink>
        <NavLink to="/members">
          <li className="pr-12 hover:text-bloodorange-100 underline">
            Members
          </li>
        </NavLink>
        <NavLink to="/courses">
          <li className="pr-12 hover:text-darkpink-100 underline">Courses</li>
        </NavLink>
        <NavLink to="/trainers">
          <li className="pr-12 hover:text-magenta-100 underline">Trainers</li>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
