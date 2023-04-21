import React, { useState, useContext } from "react";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function Navbar() {

  const { user } = useContext(AuthContext);

  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/login")
  };
  return (


    <div className=" flex justify-between w-full px-8  h-20 items-center  text-black bg-yellow-400">
      <div className="flex">
        {user ? user.username : (
          <div className="navItems">
            <button class="bg-white hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-xl shadow-xl" onClick={handleClick}>Login</button>

          </div>
        )}
      </div>
      <div className="flex items-center font-medium justify-around">
        <ul className="md:flex hidden uppercase items-center gap-8 ">

          <li>
            <input className="w-full py-2 pl-4 pr-4 text-gray-500  rounded-md outline-none border-black border-2 bg-gray-50 focus:bg-white focus:border-indigo-600" type="text" placeholder="Search Products" />
          </li>

        </ul>

      </div>
    </div>
  );
}

export default Navbar;
