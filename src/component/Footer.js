import React from "react";

function Footer() {
  return (
    <section>
      <footer className="bg-[#0E0E0E] relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-0"></div>
        <p className="text-sm font-light text-center text-white py-4">
          Copyright © 2021 FadedLines. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default Footer;
