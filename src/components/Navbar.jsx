import { AiFillApple } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import Searchbox from "./Searchbox";
const Navbar = () => {
  return (
    <header className="bg-gray-500 flex justify-around  py-1 items-center w-full">
<NavLink to="https://www.apple.com/de/store?afid=p238%7CsHDfBErPI-dc_mtid_187079nc38483_pcrid_661216258718_pgrid_15885410959_pntwk_g_pchan__pexid__&cid=aos-de-kwgo-brand--slid--bran-product-">
<AiFillApple className=" text-3xl text-white " />
</NavLink>
      <ul className="flex gap-5 text-red-500 text-sm ">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
         
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      <Searchbox />
    </header>
  );
};

export default Navbar;
