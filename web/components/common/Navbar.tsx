import Image from "next/image";
import React from "react";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-2 px-6">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </div>

          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
