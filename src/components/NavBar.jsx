import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="fixed w-full right-0 top-0 ">
      <div className=" flex  justify-between max-w-[1050px] m-auto py-4 items-center ">
    <Link to="/">    <img src={logo} alt="" /></Link>
        <ul className=" flex items-center gap-3">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Program</NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
          </li>
        </ul>
        <div className=" flex items-center gap-3">
          <AiFillInstagram />
          <AiOutlineTwitter />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
