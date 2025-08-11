import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
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
    <div className="relative min-h-screen flex flex-col justify-between transition-theme font-sans cursor-none">
      {/* Custom Cursor */}
      <div
        className="cursor fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 rounded-full border-2 border-black dark:border-white transition-all duration-300 ease-out"
        style={{
          transform: `translate(${variants[cursorVariant].x}px, ${variants[cursorVariant].y}px)`,
          width: variants[cursorVariant].width || 32,
          height: variants[cursorVariant].height || 32,
          backgroundColor: variants[cursorVariant].backgroundColor || "transparent",
          mixBlendMode: variants[cursorVariant].mixBlendMode || "normal"
        }}
      >
        <div className="w-1 h-1 bg-black dark:bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Light Mode - White background */}
      <div className="absolute inset-0 -z-30 dark:hidden bg-white transition-all duration-500">
      </div>
      
      {/* Dark Mode - Black background */}
      <div className="absolute inset-0 -z-30 hidden dark:block bg-black transition-all duration-500">
      </div>
      
      {/* Custom gradient background */}
      <div className="absolute inset-0 -z-20" 
           style={{
             background: `
               linear-gradient(135deg,
                 rgba(255, 235, 59, 0.5) 0%,
                 rgba(255, 152, 0, 0.4) 30%,
                 rgba(233, 30, 99, 0.4) 60%,
                 rgba(33, 150, 243, 0.5) 100%
               ),
               linear-gradient(0deg,
                 transparent 0%,
                 rgba(255, 255, 255, 0.3) 40%,
                 rgba(255, 255, 255, 1) 100%
               )
             `
           }}>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 relative z-10">
        <div 
          className="flex items-center gap-2 font-bold text-lg"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
          HappyOps
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="hover:underline"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Product
          </a>
          <a 
            href="#" 
            className="hover:underline"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Solutions
          </a>
          <a 
            href="#" 
            className="hover:underline"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            About Us
          </a>
          <button 
            className="px-4 py-2 bg-black text-white rounded-full"
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            Contact
          </button>
          <button
            onClick={toggleTheme}
            className="ml-4 px-3 py-1 border rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-4 relative z-10">
        <p 
          className="text-lg mb-2"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Improve your
        </p>
        <h1
          className="text-6xl font-bold mb-4"
          style={{ fontFamily: "ClashDisplay-Bold, sans-serif" }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Productivity
        </h1>
        <p 
          className="text-2xl mb-6"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          with AI
        </p>
        <p 
          className="max-w-xl text-gray-600 dark:text-gray-300 mb-8"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Tailored digital solutions for highly specialized industries that help
          boost your operations
        </p>
        <button 
          className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition-transform"
          onMouseEnter={buttonEnter}
          onMouseLeave={buttonLeave}
        >
          Contact
        </button>
      </main>

      {/* Logo Section */}
      <footer className="flex justify-center gap-8 py-6 border-t border-gray-200 dark:border-gray-700 relative z-10">
        <span 
          className="opacity-70"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          EBK
        </span>
        <span 
          className="opacity-70"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          ERHARD
        </span>
        <span 
          className="opacity-70"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          HKR
        </span>
        <span 
          className="opacity-70"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          SITECO
        </span>
      </footer>
    </div>
  );
}