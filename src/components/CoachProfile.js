import React from "react";

const CoachProfile = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 p-10 bg-white rounded-lg shadow-md">
      {/* Coach Photo */}
      <div className="flex-shrink-0">
        <img
          src="https://yt3.googleusercontent.com/zL4qN27pQ7Qobd7VbtWSRaaxiQ6PTfu1OsmvMQoKNjGUSlB7V2PxDFG8bmK6oqbz5SBCbqsquw=s900-c-k-c0x00ffffff-no-rj"
          alt="TradeTeens Coach"
          className="w-48 h-48 object-cover rounded-full border-4 border-yellow-400"
        />
      </div>

      {/* Coach Details */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Meet Our Expert Coach</h3>
        <p className="text-gray-700 mb-4">
          Our coach brings years of successful trading experience, having grown portfolios by 200%+ while maintaining disciplined risk management. He excels in simplifying complex concepts—whether it’s chart reading, crypto fundamentals, or trading psychology—making them easy to grasp for teens.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>🏆 Certified Financial Analyst with real-world trading success</li>
          <li>🧑‍🎓 Experienced in mentoring teens in interactive, fun ways</li>
          <li>⚡ Makes complex trading topics simple and engaging</li>
          <li>👨‍👧 Builds confidence and decision-making skills in students</li>
        </ul>
        <p className="text-gray-700">
          With a personal, patient approach, our coach tailors lessons to each teen’s pace—empowering them to not only understand markets but also think critically and trade confidently.
        </p>
      </div>
    </section>
  );
};

export default CoachProfile;
