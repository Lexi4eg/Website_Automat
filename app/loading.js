"use client";
import React, { useState } from "react";
import "./loading.css";

export default function Loading() {
  const [percentage, setPercentage] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage((percentage) => percentage + 10);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-bar" style={{ width: `${percentage}%` }} />
      <div className="loading-percentage">{percentage}%</div>
      <h1> h1</h1>
    </div>
  );
}
