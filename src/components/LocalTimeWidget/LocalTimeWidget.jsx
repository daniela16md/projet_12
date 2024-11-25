import React, { useState, useEffect } from 'react';
import './LocalTimeWidget.css'; 

const LocalTimeWidget = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(timerId); 
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className="widget">
      <p className="time">{formattedTime}</p>
    </div>
  );
};

export default LocalTimeWidget;
