import React from "react";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const progressBarContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
  };

  const progressBarStyles = {
    width: "100px",
    height: "8px",
    backgroundColor: "#333",
    borderRadius: "4px",
    overflow: "hidden",
  };

  const progressBarFillStyles = {
    width: `${progress * 100}%`,
    height: "100%",
    backgroundColor: "#87CEEB", // Light blue color
    borderRadius: "4px",
  };

  const percentageStyles = {
    fontSize: 14,
    color: "#F1F1F1",
    fontWeight: 800,
    marginTop: 10,
  };

  return (
    <Html as="div" style={containerStyles}>
      <span className="canvas-loader"></span>
      <p style={percentageStyles}>{progress.toFixed(2)}%</p>
      <div style={progressBarContainer}>
        <div style={progressBarStyles}>
          <div style={progressBarFillStyles}></div>
        </div>
      </div>
    </Html>
  );
};

export default CanvasLoader;
