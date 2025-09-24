import React, { useEffect, useRef, useState } from "react";

const CircleProgress = ({ size = 150, progress = 90, strokeWidth = 12, color = "#4cafef" }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (count / 100) * circumference;

  // 👀 Scroll Trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 } // 50% نظر آنے پر شروع ہو جائے گا
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 🔢 Animate Count when visible
  useEffect(() => {
    if (visible) {
      let start = 0;
      const end = progress;
      const duration = 1500; // 1.5s
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [visible, progress]);

  return (
    <div ref={ref} style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Background circle */}
        <circle
          stroke="#ddd"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (count / 100) * circumference}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transition: "stroke-dashoffset 0.2s linear" }}
        />
      </svg>

      {/* Number in center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        {count}%
      </div>
    </div>
  );
};

// -----------------
// ✅ Example Usage
// -----------------
export default function SkillsSection() {
  return (
    <div style={{ height: "200vh", paddingTop: "100vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: 40 }}>🚀 My Skills</h2>
      <div style={{ display: "flex", gap: "50px", justifyContent: "center" }}>
        <CircleProgress progress={97} color="#f44336" />
        <CircleProgress progress={90} color="#2196f3" />
        <CircleProgress progress={75} color="#4caf50" />
      </div>
    </div>
  );
}
