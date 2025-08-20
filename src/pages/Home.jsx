import React, { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    },
    button: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#6366f1",
      mixBlendMode: "difference"
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  return (
    <div className="relative min-h-screen flex flex-col justify-between transition-theme font-[Josefin] cursor-none bg-white overflow-hidden">
      {/* Custom Cursor */}
      <div
        className="cursor fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 rounded-full border-2 border-black transition-all duration-300 ease-out"
        style={{
          transform: `translate(${variants[cursorVariant].x}px, ${variants[cursorVariant].y}px)`,
          width: variants[cursorVariant].width || 32,
          height: variants[cursorVariant].height || 32,
          backgroundColor: variants[cursorVariant].backgroundColor || "transparent",
          mixBlendMode: variants[cursorVariant].mixBlendMode || "normal"
        }}
      >
        <div className="w-1 h-1 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Main Background Gradient - Full Width Spherical */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 100%,
              #FF6B35 0%,
              #F7931E 15%,
              #FFD700 25%,
              #FF69B4 40%,
              #DA70D6 55%,
              #9370DB 70%,
              #4169E1 85%,
              #87CEEB 95%,
              rgba(255, 255, 255, 0.9) 100%
            )
          `
        }}
      />

      {/* Additional gradient layer for more depth */}
      <div 
        className="absolute inset-0 -z-5"
        style={{
          background: `
            radial-gradient(circle at 30% 90%,
              rgba(255, 107, 53, 0.4) 0%,
              rgba(247, 147, 30, 0.3) 20%,
              transparent 50%
            ),
            radial-gradient(circle at 70% 85%,
              rgba(255, 105, 180, 0.4) 0%,
              rgba(218, 112, 214, 0.3) 20%,
              transparent 50%
            ),
            radial-gradient(circle at 50% 95%,
              rgba(147, 112, 219, 0.3) 0%,
              rgba(65, 105, 225, 0.2) 25%,
              transparent 60%
            )
          `
        }}
      />

      {/* Soft overlay for better text readability */}
      <div 
        className="absolute inset-0 -z-1"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(255, 255, 255, 0.7) 0%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0.1) 100%
            )
          `
        }}
      />

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 relative z-10">
        <div 
          className="flex items-center gap-2 font-bold text-lg text-gray-800"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <div className="w-10 h-10 rounded-full font-[Josefin] font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
          PastMe
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="hover:underline text-gray-700 hover:text-gray-900"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Features
          </a>
          <a 
            href="#" 
            className="hover:underline text-gray-700 hover:text-gray-900"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Privacy
          </a>
          <a 
            href="#" 
            className="hover:underline text-gray-700 hover:text-gray-900"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            About
          </a>
          <button 
            className="px-4 py-2 bg-black text-white rounded-full hover:scale-105 transition-transform"
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-4 relative z-10">
        <p 
          className="text-lg mb-2 text-gray-700"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Chat with your
        </p>
        <h1
          className="text-6xl font-bold mb-4 text-gray-900"
          style={{ fontFamily: "ClashDisplay-Bold, sans-serif" }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Past Self
        </h1>
        <p 
          className="text-2xl mb-6 text-gray-800"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          through AI
        </p>
        <p 
          className="max-w-xl text-gray-600 mb-8"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Store your thoughts, memories, and experiences. Let your past-self persona 
          talk back with empathetic, personalized replies using your own vault of memories.
        </p>
        <button 
          className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition-transform"
          onMouseEnter={buttonEnter}
          onMouseLeave={buttonLeave}
        >
          Start Your Journey
        </button>
      </main>

      {/* Logo Section */}
      <footer className="flex justify-center gap-8 py-6 border-t border-gray-200 relative z-10 backdrop-blur-sm bg-white/30">
        <span 
          className="opacity-70 text-gray-600"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          MEMORIES
        </span>
        <span 
          className="opacity-70 text-gray-600"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          REFLECTION
        </span>
        <span 
          className="opacity-70 text-gray-600"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          GROWTH
        </span>
        <span 
          className="opacity-70 text-gray-600"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          INSIGHTS
        </span>
      </footer>
    </div>
  );
}