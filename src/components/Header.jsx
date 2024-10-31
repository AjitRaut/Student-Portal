import React from "react";

const Header = () => {
  return (
    <header className="bg-[#6B5EFA] text-white py-4 fixed top-0 left-0 right-0 z-10">
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="rounded-lg p-2">
              <img
                src="/images/header_logo.svg"
                alt="ConnectEd"
                className="w-16 h-10"
              />
            </div>
          </div>
          
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Student Portal</h1>
          </div>
        <div className="text-right hidden md:block ">
          <p className="font-medium">Hello, Gabrisa!</p>
          <p className=" md:text-sm lg:text-base opacity-80">Class 7, Math + Science</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
