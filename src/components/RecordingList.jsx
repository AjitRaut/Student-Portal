"use client";
import React from "react";

const RecordingList = ({
  recordings,
  hoveredId,
  playingId,
  handleCardClick,
  handlePlayClick,
  setHoveredId,
}) => (
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
                subject_name === "Science" ? "text-[#B45BCD]" : "text-[#4E5BA6]"
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
);

export default RecordingList;
