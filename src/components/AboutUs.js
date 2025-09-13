import React from "react";
import { LineChart, TrendingUp, Users, BookOpen, Target } from "lucide-react"; // icons

const AboutUs = () => {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-orange-600 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            At <span className="font-semibold text-orange-600">TradeTeens</span>, 
            we empower the younger generation with 
            <span className="font-semibold"> financial literacy </span> 
            and practical <span className="font-semibold">trading skills</span>.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to provide children and teens with the right knowledge, 
            tools, and mindset to become the best traders of tomorrow.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Teens Learning Trading"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <h2 className="text-3xl font-bold mt-16 mb-6 text-center text-gray-800">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <Users className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Expert Coach Team</h3>
          <p className="text-gray-600">
            Years of experience in financial markets, simplifying concepts for kids.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Real Market Exposure</h3>
          <p className="text-gray-600">
            Learn how stock charts, crypto, and forex markets actually work.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <LineChart className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Live Telegram News</h3>
          <p className="text-gray-600">
            Stay updated with market trends and real-time trading opportunities.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <BookOpen className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Engaging Lessons</h3>
          <p className="text-gray-600">
            Interactive sessions that make trading concepts fun and easy to grasp.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <Target className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Discipline & Confidence</h3>
          <p className="text-gray-600">
            Building habits for smart decision-making, patience, and success.
          </p>
        </div>
      </div>

      {/* Closing Section */}
      <div className="mt-16 text-center">
        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80"
          alt="Team Support"
          className="rounded-xl shadow-md mx-auto mb-6 w-full md:w-2/3"
        />
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          With <span className="font-semibold text-orange-600">TradeTeens</span>, 
          your child will not just learn trading but also develop the right mindset 
          to succeed in financial markets and beyond 🚀.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;