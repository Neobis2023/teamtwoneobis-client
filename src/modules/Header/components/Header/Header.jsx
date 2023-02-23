import React from "react";
import Logo from "../Logo/Logo"
import Navbar from "../Navbar/Navbar";
import Language from "../Language/Language";

const Header = () => {
  return (
    <header className={`h-fit py-4 bg-[#FAFAFA]`}>
      <div className="myWrapper h-[inherit] flex justify-between gap-2 items-center">
        <Logo />
        <Navbar />
        <Language />
      </div>
    </header>
  );
};

export default Header;