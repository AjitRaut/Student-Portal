import React from "react";
import { IoNotifications } from "react-icons/io5";

const PopupNotification = ({ hideModal }) => {
  return (
    <div className="fixed top-52 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-[#F0EAFB] text-[#AA6AF9] text-center py-2 rounded-full shadow-md mb-4 w-[420px] mx-auto">
        <span className="flex items-center justify-center text-customPink  font-bold">
          <IoNotifications className="text-customPink mr-2"/>
          Class 7 Math is starting in 1 hour, 34 minutes.
        </span>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[420px]">
        <div className="p-6 flex flex-col items-center">
          <div className="text-[#4749B3] text-center mb-4 font-bold text-lg">
            You can join the live class
            <br />
            5 minutes before it starts.
            <br />
            Please wait.
          </div>
          <button
            className="bg-[#4749B3] text-white px-8 py-2 rounded-full text-sm font-semibold"
            onClick={() => hideModal(false)}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupNotification;
