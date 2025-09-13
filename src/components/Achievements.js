import React from "react";

const achievements = [
  "STEM.ORG accredited financial program",
  "Top 20 EdTech Startups 2025",
  "Featured in Forbes India",
  "Global Teen Finance Summit Finalist",
];

const Achievements = () => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Our Achievements</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {achievements.map((a, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-6 rounded-xl text-center w-64"
          >
            <p>{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
