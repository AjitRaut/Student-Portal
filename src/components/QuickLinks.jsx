"use client";
import React, { useState } from "react";
import data from "@/data/data";
import PopupNotification from "./PopupNotification";

const QuickLinks = ({ hasLiveClasses }) => {
  const [showModal, setShowModal] = useState(false);
  const { quickLinks, no_schedule } = data;

  const handleJoinClassClick = () => {
    setShowModal(true);
  };

  return (
    <section>
      <h2 className="text-[24px] font-bold text-[#3A3A3A] mb-2">Quick Links</h2>
      <div className="space-y-3 p-2">
        {quickLinks.map((link, index) => {
          const currentLink =
            !hasLiveClasses && link.title === "Join Live Class"
              ? {
                  title: no_schedule[0].title,
                  description: no_schedule[0].description,
                  bgColor: no_schedule[0].bgColor,
                  textColor: no_schedule[0].textColor,
                  icon: no_schedule[0].icon,
                }
              : link;

          const [isHovered, setIsHovered] = useState(false);

          return (
            <div
              key={index}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={
                link.title === "Join Live Class" ? handleJoinClassClick : null
              }
              style={{
                background: isHovered ? "white" : currentLink.bgColor,
                color: isHovered ? currentLink.textColor : "white",
              }}
              className={`p-6 rounded-xl text-center shadow-md border transition-colors duration-300 cursor-pointer`}
            >
              <img
                src={currentLink.icon}
                alt={`${currentLink.title} icon`}
                className="w-8 h-8 mx-auto mb-4"
                style={{
                  filter: isHovered
                    ? `invert(${
                        1 -
                        parseInt(currentLink.textColor.slice(1), 16) / 16777215
                      })`
                    : "none",
                  transition: "filter 0.3s",
                }}
              />
              <h3 className="text-2xl font-bold mb-2">{currentLink.title}</h3>
              <p className="text-sm font-medium opacity-80">
                {currentLink.description}
              </p>
            </div>
          );
        })}
      </div>

      {showModal && 
      <>
       <div className="fixed inset-0 bg-black opacity-70 z-40"></div>
       <PopupNotification hideModal={setShowModal} />
      </>
       }
    </section>
  );
};

export default QuickLinks;
