export default function BackgroundGradient() {
  return (
    <div
      aria-hidden="true"
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.8"
            numOctaves="4"
            seed="200"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="13" />
        </filter>
      </svg>
      <div
        style={{
          position: "absolute",
          top: "-6rem",
          right: 0,
          height: 350,
          width: 350,
          borderRadius: "9999px",
          backgroundColor: "rgba(255, 165, 196, 0.44)",
          filter: "url(#noise) blur(120px)",
          animation: "drift-1 22s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-2.5rem",
          right: "10rem",
          height: 300,
          width: 300,
          borderRadius: "9999px",
		            backgroundColor: "rgba(217, 138, 255, 0.3)",

          filter: "url(#noise) blur(120px)",
          animation: "drift-2 28s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "2.5rem",
          right: "18rem",
          height: 270,
          width: 270,
          borderRadius: "9999px",
		  
		  backgroundColor: "rgba(167, 243, 208, 0.1)",
          filter: "url(#noise) blur(120px)",
          animation: "drift-3 34s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "8rem",
          right: "5rem",
          height: 250,
          width: 250,
          borderRadius: "9999px",
		  backgroundColor: "rgba(138, 173, 255, 0.58)",

          filter: "url(#noise) blur(120px)",
          animation: "drift-4 26s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-1rem",
          right: "26.25rem",
          height: 230,
          width: 230,
          borderRadius: "9999px",
		            backgroundColor: "rgba(255, 237, 166, 0.5)",

          filter: "url(#noise) blur(120px)",
          animation: "drift-5 30s ease-in-out infinite",
        }}
      />
    </div>
  );
}