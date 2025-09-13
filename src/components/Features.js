import React from "react";

const features = [
  { title: "Stock Market", emoji: "📊" },
  { title: "Crypto Basics", emoji: "💰" },
  { title: "Financial Literacy", emoji: "🏦" },
  { title: "Risk Management", emoji: "⚖️" },
  { title: "Portfolio Building", emoji: "📂" },
];

const Features = () => {
  return (
    <section className="p-10 flex flex-wrap gap-6 justify-center">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md p-6 rounded-xl text-center w-40"
        >
          <div className="text-3xl">{f.emoji}</div>
          <h3 className="mt-2 font-semibold">{f.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default Features;
