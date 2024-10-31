'use client'
import { useState, useEffect } from "react";

export const useClassNotifications = (schedule) => {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [upcomingClassNotification, setUpcomingClassNotification] =
    useState(null);

  useEffect(() => {
    const checkUpcomingClasses = () => {
      const now = new Date();

      schedule.forEach((classItem) => {
        if (classItem.status === "Today") {
          const [startTimeString] = classItem.time.split(" - ");
          const startTime = parseTime(startTimeString);

          const timeDiff = startTime - now;
          const hoursUntilClass = Math.floor(timeDiff / (1000 * 60 * 60));
          const minutesUntilClass = Math.floor(
            (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
          );

          if (hoursUntilClass === 1 && minutesUntilClass > 0) {
            setUpcomingClassNotification(
              `${
                classItem.title.split("|")[0]
              } is starting in ${hoursUntilClass} hour, ${minutesUntilClass} minutes.`
            );
          }
        }
      });
    };

    const interval = setInterval(checkUpcomingClasses, 60000);
    checkUpcomingClasses();

    return () => clearInterval(interval);
  }, [schedule]);

  const handleClassClick = (classItem) => {
    if (classItem.status === "Today") {
      const [startTimeString] = classItem.time.split(" - ");
      const startTime = parseTime(startTimeString);

      const now = new Date();
      const timeDiff = startTime - now;
      const minutesUntilClass = Math.floor(timeDiff / (1000 * 60));

      if (minutesUntilClass > 5) {
        setShowJoinModal(true);
      } else if (minutesUntilClass <= 5 && minutesUntilClass >= 0) {
        console.log("Joining class...");
      }
    }
  };

  return {
    showJoinModal,
    setShowJoinModal,
    upcomingClassNotification,
    setUpcomingClassNotification,
    handleClassClick,
  };
};

const parseTime = (timeString) => {
  const [time, modifier] = timeString.split(" ");
  const [hours, minutes] = time.split(":").map(Number);

  const date = new Date();
  date.setHours(modifier === "PM" ? hours + 12 : hours);
  date.setMinutes(minutes || 0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date;
};
