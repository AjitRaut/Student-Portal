"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import data from "@/data/data";
import RecordingList from "./RecordingList";
import RecordingModal from "./RecordingModel";

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
      <div className="p-4 bg-white rounded-2xl shadow-lg">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <IoSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search for class recordings"
            className="w-full pl-10 py-2 bg-gray-50 rounded-lg text-sm text-gray-700 focus:outline-none border border-gray-200"
          />
        </div>

        <div className="flex justify-between items-center gap-4 h-6  mb-6">
          <p className="text-sm text-gray-600 font-medium">Filter By:</p>
          <div className="">
          <select className="text-[10px] text-[#979797] bg-slate-100 rounded-lg p-2  focus:outline-none  mr-[5px]">
            <option >This week</option>
          </select>
          <select className="text-[10px] text-[#979797] bg-slate-100  rounded-lg p-2 focus:outline-none">
            <option>All subjects</option>
          </select>
          </div>
         
        </div>

        <RecordingList
          recordings={recordings}
          hoveredId={hoveredId}
          playingId={playingId}
          handleCardClick={handleCardClick}
          handlePlayClick={handlePlayClick}
          setHoveredId={setHoveredId}
        />

        <RecordingModal
          selectedRecording={selectedRecording}
          closeModal={closeModal}
        />
      </div>
    </section>
  );
};

export default ClassRecordings;
