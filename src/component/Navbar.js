import React from "react";
import Logo from "../assets/navbar.png";

function Navbar() {
  return (
    <section>
      <nav className="bg-[#0E0E0E]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-7">
          <div className="flex flex-grow justify-center md:order-1">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} width="372px" height="103px" alt="Logo" />
            </a>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white border border-[#24FF00] hover:bg-[#24FF00] font-bold rounded-full text-[24px] text-center transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{ width: "241px", height: "70.02px" }}
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
