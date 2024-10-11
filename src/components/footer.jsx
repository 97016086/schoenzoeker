import React from "react";
import Logo from "../images/Schoen(4).svg";

function Footer() {
  return (
    <div className="bg-[#A6D4C9] flex justify-between items-center h-24 mx-auto px-4 text-[#050316]">
      <img
        src={Logo}
        alt="de schoenzoeker voor alle andere wijdtematen"
        className="cursor-pointer	h-40"
      />
    </div>
  );
}

export default Footer;
