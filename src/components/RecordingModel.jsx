"use client";
import React from "react";

const RecordingModal = ({ selectedRecording, closeModal }) => (
  selectedRecording && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="max-w-screen-lg w-full p-6 relative">
        <button
          onClick={closeModal}
          className="absolute top-10 right-10 text-white text-2xl"
        >
          &times;
        </button>
        <div className="bg-[#4E5BA6] text-white py-2 px-4 rounded-t-xl text-center">
          <p className="text-sm font-normal">{selectedRecording.subject}</p>
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
  )
);

export default RecordingModal;
