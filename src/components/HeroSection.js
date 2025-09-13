import React from "react";
import tradingImg from "../trading.avif"; // 👈 your image

const HeroSection = () => {
  const tags = [
    "📊 Stock Market",
    "💹 Crypto Basics",
    "⚖️ Risk Management",
    "🏦 Financial Literacy",
    "📂 Portfolio Building",
    "💡 Trading Psychology",
  ];

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between p-10 bg-gray-50 overflow-hidden">
      {/* Left Side Text */}
      <div className="md:w-1/2 z-10">
        <h2 className="text-4xl font-bold leading-snug">
          Unleash your teen’s{" "}
          <span className="text-orange-500">financial skills</span> with expert
          mentors
        </h2>
        <p className="text-gray-600 mt-4">
          Live online 1:1 interactive classes for teens aged 13-19 to learn
          trading, investing, and financial literacy.
        </p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>📈 Learn stock market basics</li>
          <li>👩‍🏫 Dedicated expert mentors</li>
          <li>🤖 AI-driven adaptive learning</li>
          <li>🌍 Schedule anytime, anywhere</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-yellow-400 rounded font-semibold">
          Book a FREE Trial Class →
        </button>
      </div>

      {/* Right Side Image + Circular Tags */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative w-[550px] h-[550px] flex items-center justify-center">
          {/* Teen Image */}
          <img
            src={tradingImg}
            alt="Teen learning trading"
            className="w-80 h-80 object-cover relative z-10 rounded-full border-4 border-yellow-400"
          />

          {/* Floating Tags in Circle */}
          {tags.map((tag, i) => {
            const angle = (i / tags.length) * 2 * Math.PI; // distribute evenly
            const radius = 260; // 👈 controls distance from image
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={i}
                className="absolute bg-white shadow-md px-4 py-2 rounded-xl text-sm font-semibold"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                }}
              >
                {tag}
              </div>
            );
          })}

          {/* Circular Orbit Rings */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-yellow-200"></div>
          <div className="absolute w-[400px] h-[400px] rounded-full border border-yellow-100"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;