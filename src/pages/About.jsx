import React, { useState, useEffect } from "react";

export default function About() {
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
    <div className="relative min-h-screen flex flex-col justify-between transition-theme font-sans cursor-none bg-white overflow-hidden">
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
      
      {/* Enhanced Main Background Gradient - Full Coverage */}
      <div 
        className="fixed inset-0 -z-20"
        style={{
          background: `
            radial-gradient(ellipse 140% 100% at 50% 0%,
              #FF6B35 0%,
              #F7931E 8%,
              #FFD700 16%,
              #FF69B4 25%,
              #DA70D6 35%,
              #9370DB 45%,
              #4169E1 55%,
              #87CEEB 65%,
              #98FB98 75%,
              #F0E68C 85%,
              rgba(255, 255, 255, 0.95) 100%
            ),
            radial-gradient(ellipse 120% 80% at 50% 100%,
              #FF6B35 0%,
              #F7931E 15%,
              #FFD700 25%,
              #FF69B4 40%,
              #DA70D6 55%,
              #9370DB 70%,
              #4169E1 85%,
              #87CEEB 95%,
              rgba(255, 255, 255, 0.8) 100%
            )
          `
        }}
      />

      {/* Top gradient layer for header area */}
      <div 
        className="fixed inset-0 -z-15"
        style={{
          background: `
            radial-gradient(ellipse 100% 50% at 50% 0%,
              rgba(255, 107, 53, 0.3) 0%,
              rgba(247, 147, 30, 0.25) 15%,
              rgba(255, 215, 0, 0.2) 30%,
              rgba(255, 105, 180, 0.15) 45%,
              transparent 70%
            ),
            linear-gradient(to bottom,
              rgba(255, 107, 53, 0.1) 0%,
              rgba(247, 147, 30, 0.08) 20%,
              transparent 40%
            )
          `
        }}
      />

      {/* Enhanced dynamic gradient layers for more depth */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 80%,
              rgba(255, 107, 53, 0.4) 0%,
              rgba(247, 147, 30, 0.3) 20%,
              transparent 50%
            ),
            radial-gradient(circle at 80% 20%,
              rgba(255, 105, 180, 0.4) 0%,
              rgba(218, 112, 214, 0.3) 25%,
              transparent 55%
            ),
            radial-gradient(circle at 40% 60%,
              rgba(147, 112, 219, 0.3) 0%,
              rgba(65, 105, 225, 0.25) 30%,
              transparent 60%
            ),
            radial-gradient(circle at 70% 85%,
              rgba(135, 206, 235, 0.3) 0%,
              rgba(152, 251, 152, 0.2) 25%,
              transparent 50%
            ),
            radial-gradient(circle at 30% 30%,
              rgba(255, 215, 0, 0.2) 0%,
              rgba(240, 230, 140, 0.15) 20%,
              transparent 45%
            )
          `
        }}
      />

      {/* Animated floating orbs for extra visual appeal */}
      <div 
        className="fixed inset-0 -z-8"
        style={{
          background: `
            radial-gradient(circle at 25% 25%,
              rgba(255, 105, 180, 0.1) 0%,
              transparent 20%
            ),
            radial-gradient(circle at 75% 75%,
              rgba(147, 112, 219, 0.1) 0%,
              transparent 20%
            ),
            radial-gradient(circle at 85% 15%,
              rgba(65, 105, 225, 0.08) 0%,
              transparent 25%
            ),
            radial-gradient(circle at 15% 85%,
              rgba(255, 215, 0, 0.08) 0%,
              transparent 25%
            )
          `,
          animation: 'float 20s ease-in-out infinite'
        }}
      />

      {/* Soft overlay for better text readability */}
      <div 
        className="fixed inset-0 -z-5"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(255, 255, 255, 0.4) 0%,
              rgba(255, 255, 255, 0.2) 30%,
              rgba(255, 255, 255, 0.1) 60%,
              rgba(255, 255, 255, 0.3) 100%
            )
          `
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.6;
          }
          25% { 
            transform: translateY(-20px) rotate(90deg); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-40px) rotate(180deg); 
            opacity: 1;
          }
          75% { 
            transform: translateY(-20px) rotate(270deg); 
            opacity: 0.8;
          }
        }
      `}</style>

    

      {/* Hero Section */}
      <main className="flex flex-col font-[Josefin] items-center text-center px-4 relative z-10 space-y-16">
        {/* Main Title */}
        <div className="space-y-4">
          
          <h1
            className="text-6xl font-bold mb-4 text-gray-900 pt-28"
            style={{ fontFamily: "Josefin, sans-serif" }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Your AI Memory
          </h1>
          <h1
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
            style={{ fontFamily: "Josefin, sans-serif" }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Companion
          </h1>
          <p 
            className="text-2xl mb-6 text-gray-800"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            through cutting-edge AI
          </p>
          <p 
            className="max-w-2xl text-gray-600 mb-8 mx-auto leading-relaxed"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            We're building the future where your memories become conversations, 
            and your past becomes your guide to a better tomorrow. Experience the power 
            of AI that truly understands your personal journey.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "🚀",
              title: "Our Mission",
              description: "To bridge the gap between human memory and artificial intelligence, creating meaningful connections with your past self through empathetic AI conversations."
            },
            {
              icon: "💡",
              title: "The Vision",
              description: "A world where every thought, every memory, and every experience becomes a stepping stone to personal growth and self-discovery through AI."
            },
            {
              icon: "🎯",
              title: "Our Purpose",
              description: "Empowering individuals to unlock insights from their past, understand their present, and shape their future with personalized AI companions."
            }
          ].map((card, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/40 border border-white/60 rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:bg-white/50"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl font-bold mb-12 text-gray-900"
            style={{ fontFamily: "ClashDisplay-Bold, sans-serif" }}
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Built with <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Passion</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "10K+", label: "Memories Stored" },
              { number: "95%", label: "User Satisfaction" },
              { number: "24/7", label: "AI Availability" },
              { number: "100%", label: "Privacy Protected" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center backdrop-blur-sm bg-white/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="backdrop-blur-sm bg-white/40 border border-white/60 rounded-3xl p-8 space-y-6">
            <p 
              className="text-lg text-gray-700 leading-relaxed"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              At PastMe, we believe that every memory holds the key to understanding who we are and who we can become. Our team of AI researchers, psychologists, and engineers work tirelessly to create technology that doesn't just store memories—it brings them to life.
            </p>
            <p 
              className="text-lg text-gray-700 leading-relaxed"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              We're not just building an app; we're crafting a companion that understands your journey, celebrates your growth, and helps you discover patterns in your life that you never knew existed.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-4xl mx-auto">
          <h3 
            className="text-2xl font-semibold mb-8 text-gray-800"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Powered by Advanced Technology
          </h3>
          
          <div className="flex justify-center gap-8 mb-12">
            {[
              { label: 'AI', color: '#FF6B35' },
              { label: 'ML', color: '#FF69B4' },
              { label: 'NLP', color: '#9370DB' },
              { label: 'Cloud', color: '#4169E1' }
            ].map((tech, index) => (
              <div key={tech.label} 
                   className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer backdrop-blur-sm bg-white/50"
                   onMouseEnter={buttonEnter}
                   onMouseLeave={buttonLeave}>
                <span className="font-bold text-gray-800 text-sm">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="backdrop-blur-sm bg-white/40 border border-white/60 rounded-3xl p-12 max-w-3xl mx-auto">
          <h2 
            className="text-4xl font-bold mb-6 text-gray-900"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Ready to Meet Your Past Self?
          </h2>
          <p 
            className="text-lg text-gray-700 mb-8 leading-relaxed"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Join thousands of users who have already discovered the power of AI-enhanced memory conversations. Your journey of self-discovery starts here.
          </p>
          <button 
            className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-full hover:scale-105 transition-transform"
            onMouseEnter={buttonEnter}
            onMouseLeave={buttonLeave}
          >
            Start Your Journey Today ✨
          </button>
        </div>
      </main>

      {/* Footer */}
     
    </div>
  );
}