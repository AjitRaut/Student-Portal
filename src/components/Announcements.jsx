import React from "react";
import data from "../data/data";

const Announcements = () => {
  const { announcements } = data;

  return (
    <section className="px-4 md:px-4 lg:px-4">
      <h2 className="text-[20px] md:text-[24px] font-bold text-[#3A3A3A] mb-2">Announcements</h2>
      <div className="space-y-2 bg-white p-4 md:p-6 rounded-xl shadow-lg">
        {announcements.map(({ icon, message }, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 md:gap-4 bg-gray-100 p-3 md:p-4 rounded-lg shadow-sm"
          >
            <img src={icon} alt="icon" className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-xs md:text-sm font-light text-[#4749B3]">
              {message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcements;