"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import data from "@/data/data";

const ClassRecordings = () => {
  const { recordings } = data;
  const [playingId, setPlayingId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedRecording, setSelectedRecording] = useState(null);

  const handlePlayClick = (id) => {
    setPlayingId(playingId === id ? null : id);
  };

  const handleCardClick = (recording) => {
    setSelectedRecording(recording);
  };

  const closeModal = () => {
    setSelectedRecording(null);
  };

  return (
    <section>
      <h2 className="text-[24px] font-bold text-[#3A3A3A] mb-2">
        Access Class recordings
      </h2>
      <div className="p-6 bg-white rounded-2xl shadow-lg">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <IoSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for class recordings"
            className="w-full pl-10 py-3 bg-gray-50 rounded-lg text-sm text-gray-700 focus:outline-none border border-gray-200"
          />
        </div>

        <div className="flex items-center gap-4 h-8  mb-6">
          <p className="text-sm text-gray-600 font-medium">Filter By:</p>
          <select className="text-sm bg-white rounded-lg px-4 py-2 border border-gray-200 focus:outline-none min-w-[120px]">
            <option>This week</option>
          </select>
          <select className="text-sm bg-white rounded-lg px-4 py-2 border border-gray-200 focus:outline-none min-w-[120px]">
            <option>All subjects</option>
          </select>
        </div>

        <div className="space-y-0">
          {recordings.map((recording) => {
            const {
              id,
              subject,
              title,
              thumbnail,
              subject_name,
              date,
              icon,
              textColor,
            } = recording;
            return (
              <div
                key={id}
                className="flex justify-between items-center cursor-pointer p-4 border-b border-gray-200 transition-all duration-200 hover:border-[#4E5BA6]"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleCardClick(recording)}
              >
                <div>
                  <p
                    className={`text-xs font-medium mb-1 transition-colors duration-200 ${
                      subject_name === "Science"
                        ? "text-[#B45BCD]"
                        : "text-[#4E5BA6]"
                    }`}
                  >
                    {subject}
                  </p>

                  <h3
                    className="text-base font-bold text-black mb-1"
                    style={{
                      color: hoveredId === id ? textColor : "black",
                    }}
                  >
                    {title}
                  </h3>

                  <p className="text-[10px] text-[#727272]">{date}</p>
                </div>
                <div
                  className="relative w-32 h-20 bg-[#1C1B1F] rounded-lg overflow-hidden flex items-center justify-center cursor-pointer"
                  onClick={() => handlePlayClick(id)}
                >
                  {thumbnail && (
                    <img
                      src={thumbnail}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-200">
                    {playingId === id ? (
                      <div className="text-white bg-black/50 px-3 py-1 rounded-md text-sm font-medium">
                        Playing...
                      </div>
                    ) : hoveredId === id ? (
                      <div className="text-white px-4 py-2 rounded-md text-sm font-medium">
                        play now
                      </div>
                    ) : (
                      <img
                        src={icon}
                        alt="Play"
                        className="w-10 h-10 transition-transform duration-200"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedRecording && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="max-w-screen-lg w-full p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-10 right-10 text-white  text-2xl"
              >
                &times;
              </button>
              <div className="bg-[#4E5BA6] text-white py-2 px-4 rounded-t-xl text-center">
                <p className=" text-sm font-normal">
                  {selectedRecording.subject}
                </p>
                <h2 className="text-xl font-bold">{selectedRecording.title}</h2>
              </div>
              <div className="relative bg-black rounded-b-lg">
                <img
                  src={selectedRecording.thumbnail}
                  alt={selectedRecording.title}
                  className="w-full rounded-lg mb-4"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClassRecordings;
