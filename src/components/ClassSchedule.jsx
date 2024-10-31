'use client'
import React from "react";
import data from "@/data/data"; 
import PopupNotification from "./PopupNotification";

const ClassSchedule = () => {
  const { schedule } = data;
 

  const todayClasses = schedule.filter(
    (classItem) => classItem.status === "Today"
  );

  return (
    <>
      <section className="px-4">
        <h2 className="text-xl font-bold text-[#3A3A3A] mb-4">
          Your Class Schedule
        </h2>
        <div className="space-y-2 bg-white p-4 rounded-xl shadow-lg cursor-pointer">
          {todayClasses.length > 0 ? (
            schedule.map((classItem) => (
              <div
                key={classItem.id}
                className={`p-4 flex items-center gap-4 rounded-lg ${
                  classItem.status === "Today"
                    ? "bg-[#E66DFF] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                <img
                  src={classItem.icon}
                  alt="class icon"
                  className="w-6 h-6"
                />
                <div>
                  <p className="text-xs font-medium text-[#9899DF]">
                    {classItem.title}
                  </p>
                  <p className="text-base font-semibold text-[#4749B3]">
                    {classItem.time}
                  </p>
                </div>
                <span
                  className={`ml-auto text-sm font-semibold ${
                    classItem.status === "Today"
                      ? "text-white"
                      : "text-[#7577D9]"
                  }`}
                >
                  {classItem.status}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-700 text-center">
              No classes scheduled for today.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ClassSchedule;
