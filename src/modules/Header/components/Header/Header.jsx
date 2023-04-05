import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Language from "../Language/Language";

const Header = () => {
  const [opacityChange, setOpacityChange] = useState(false);
  const changeHeaderOpacity = () => (window.scrollY >= 20) ? setOpacityChange(true) : setOpacityChange(false);
  window.addEventListener('scroll', changeHeaderOpacity);
  // bg-[#FAFAFA]
  return (
    <header className={`h-[100px]`}>
      <div className={`fixed z-20 h-[inherit] w-full bg-[#FAFAFA] transition ${opacityChange ? 'opacity-95' : null}`}>
        <div className="myWrapper h-[inherit] flex justify-between gap-2 items-center">
          <Logo />
          <Navbar />
          <Language />
        </div>
      </div>
    </header>
  );
};

export default Header;
