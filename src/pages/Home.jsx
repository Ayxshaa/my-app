import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { gsap } from "gsap";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const footerRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    // Create GSAP timeline for initial animations
    const tl = gsap.timeline();

    // Animate floating orbs
    gsap.set([orb1Ref.current, orb2Ref.current, orb3Ref.current], {
      opacity: 0,
      scale: 0
    });

    // Background gradient animation
    gsap.to(gradientRef.current, {
      backgroundPosition: "200% 200%",
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true
    });

    // Floating orbs continuous animation
    gsap.to(orb1Ref.current, {
      y: -30,
      x: 20,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0
    });

    gsap.to(orb2Ref.current, {
      y: 25,
      x: -15,
      duration: 5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1
    });

    gsap.to(orb3Ref.current, {
      y: -20,
      x: 30,
      duration: 6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2
    });

    // Page load animations
    tl.from(navRef.current.children, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)"
    })
    .to([orb1Ref.current, orb2Ref.current, orb3Ref.current], {
      opacity: 0.8,
      scale: 1,
      duration: 1.5,
      stagger: 0.3,
      ease: "elastic.out(1, 0.3)"
    }, "-=0.5")
    .from(heroRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=1")
    .from(footerRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.5");

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(orb1Ref.current, {
        y: scrollY * 0.5,
        duration: 0.5
      });
      gsap.to(orb2Ref.current, {
        y: scrollY * -0.3,
        duration: 0.5
      });
      gsap.to(orb3Ref.current, {
        y: scrollY * 0.4,
        duration: 0.5
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      tl.kill();
    };
  }, []);

  // Advanced mouse interactions
  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let isMouseMoving = false;
    let mouseTimeout;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      mouseX = (clientX / innerWidth - 0.5) * 2;
      mouseY = (clientY / innerHeight - 0.5) * 2;

      // Clear existing timeout
      clearTimeout(mouseTimeout);
      isMouseMoving = true;

      // Enhanced parallax with depth layers
      gsap.to(orb1Ref.current, {
        x: mouseX * 30,
        y: mouseY * 30,
        rotation: mouseX * 10,
        duration: 1.2,
        ease: "power2.out"
      });

      gsap.to(orb2Ref.current, {
        x: mouseX * -20,
        y: mouseY * -20,
        rotation: mouseX * -15,
        duration: 1.8,
        ease: "power2.out"
      });

      gsap.to(orb3Ref.current, {
        x: mouseX * 35,
        y: mouseY * -15,
        rotation: mouseY * 20,
        duration: 1,
        ease: "power2.out"
      });

      // Animate gradient based on mouse position
      gsap.to(gradientRef.current, {
        "--mouse-x": `${50 + mouseX * 25}%`,
        "--mouse-y": `${50 + mouseY * 25}%`,
        duration: 2,
        ease: "power2.out"
      });

      // Create ripple effect at mouse position
      createRipple(clientX, clientY);

      // Set timeout to detect when mouse stops
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 100);
    };

    const createRipple = (x, y) => {
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: fixed;
        left: ${x - 25}px;
        top: ${y - 25}px;
        width: 50px;
        height: 50px;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 5;
        transform: scale(0);
      `;
      
      document.body.appendChild(ripple);

      gsap.to(ripple, {
        scale: 3,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          document.body.removeChild(ripple);
        }
      });
    };

    // Magnetic effect for interactive elements
    const magneticElements = document.querySelectorAll('button, a');
    
    magneticElements.forEach(el => {
      const handleMouseEnter = (e) => {
        gsap.to(el, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = (e) => {
        gsap.to(el, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      };

      const handleMouseMoveOnElement = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('mousemove', handleMouseMoveOnElement);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen flex flex-col justify-between transition-theme font-sans overflow-hidden">
      {/* Light Mode - White background */}
      <div className="absolute inset-0 -z-30 dark:hidden bg-white transition-all duration-500"></div>
      
      {/* Dark Mode - Black background */}
      <div className="absolute inset-0 -z-30 hidden dark:block bg-black transition-all duration-500"></div>
      
      {/* Animated gradient background */}
      <div 
        ref={gradientRef}
        className="absolute inset-0 -z-20" 
        style={{
          background: `
            linear-gradient(135deg,
              rgba(255, 235, 59, 0.6) 0%,
              rgba(255, 152, 0, 0.5) 25%,
              rgba(233, 30, 99, 0.5) 50%,
              rgba(33, 150, 243, 0.6) 75%,
              rgba(156, 39, 176, 0.5) 100%
            ),
            linear-gradient(45deg,
              transparent 0%,
              rgba(255, 255, 255, 0.1) 40%,
              rgba(255, 255, 255, 0.8) 100%
            )
          `,
          backgroundSize: '400% 400%'
        }}>
      </div>

      {/* Floating orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 182, 193, 0.4) 0%, rgba(255, 182, 193, 0.1) 70%, transparent 100%)',
          filter: 'blur(1px)'
        }}
      ></div>

      <div
        ref={orb2Ref}
        className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(173, 216, 230, 0.4) 0%, rgba(173, 216, 230, 0.1) 70%, transparent 100%)',
          filter: 'blur(1px)'
        }}
      ></div>

      <div
        ref={orb3Ref}
        className="absolute bottom-1/3 left-2/3 w-20 h-20 rounded-full -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(255, 218, 185, 0.4) 0%, rgba(255, 218, 185, 0.1) 70%, transparent 100%)',
          filter: 'blur(1px)'
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 -z-15">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Navbar */}
      <nav ref={navRef} className="flex justify-between items-center px-8 py-4 relative z-10">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-pulse"></div>
          PastMe
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:underline transition-all duration-300 hover:scale-105">Product</a>
          <a href="#" className="hover:underline transition-all duration-300 hover:scale-105">Solutions</a>
          <a href="#" className="hover:underline transition-all duration-300 hover:scale-105">About Us</a>
          <button className="px-4 py-2 bg-black text-white rounded-full hover:scale-105 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main ref={heroRef} className="flex flex-col items-center text-center px-4 relative z-10">
        <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">Improve your</p>
        <h1
          className="text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent dark:from-gray-100 dark:via-gray-300 dark:to-gray-100"
          style={{ fontFamily: "ClashDisplay-Bold, sans-serif" }}
        >
          Productivity
        </h1>
        <p className="text-2xl mb-6 text-gray-600 dark:text-gray-400">with AI</p>
        <p className="max-w-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Tailored digital solutions for highly specialized industries that help
          boost your operations
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-gray-800 transform hover:-translate-y-1">
          Contact
        </button>
      </main>

      {/* Logo Section */}
      <footer ref={footerRef} className="flex justify-center gap-8 py-6 border-t border-gray-200 dark:border-gray-700 relative z-10">
        <span className="opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110">EBK</span>
        <span className="opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110">ERHARD</span>
        <span className="opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110">HKR</span>
        <span className="opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110">SITECO</span>
      </footer>
    </div>
  );
}