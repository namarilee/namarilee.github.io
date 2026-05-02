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
      <div
        style={{
          position: "absolute",
          top: "-6rem",
          right: 0,
          height: 350,
          width: 350,
          borderRadius: "9999px",
          backgroundColor: "rgba(255, 165, 197, 0.3)",
          filter: "blur(120px)",
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

          filter: "blur(120px)",
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
		  
		  backgroundColor: "rgba(167, 243, 208, 0.5)",
          filter: "blur(120px)",
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
		  backgroundColor: "rgba(138, 173, 255, 0.5)",

          filter: "blur(120px)",
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
		            backgroundColor: "rgba(255, 237, 166, 0.1)",

          filter: "blur(120px)",
        }}
      />
    </div>
  );
}