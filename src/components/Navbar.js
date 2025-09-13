import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    tradingExperience: "",
    goal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // 👉 Here you can call an API (e.g. backend, Firebase, etc.)
    alert("✅ Thank you! We’ll reach out to you soon.");
    setIsOpen(false); // close modal after submit
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-orange-600">TradeTeens</h1>
       <ul className="flex gap-6 text-gray-700">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/courses">Courses</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/blogs">Blogs</Link></li>
</ul>
        <div className="flex gap-4">
          <button className="px-4 py-2 border rounded">Login</button>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 bg-yellow-400 rounded font-semibold"
          >
            Book a FREE Trial
          </button>
        </div>
      </nav>

      {/* Modal Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[500px] shadow-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-center mb-4 text-orange-600">
              Book a FREE Trial Class
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />

              {/* Trading-related questions */}
              <select
                name="tradingExperience"
                value={formData.tradingExperience}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              >
                <option value="">Your Trading Experience</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>

              <textarea
                name="goal"
                placeholder="What do you want to achieve in trading?"
                value={formData.goal}
                onChange={handleChange}
                rows={3}
                className="w-full border px-3 py-2 rounded"
              />

              <button
                type="submit"
                className="w-full bg-yellow-400 py-2 rounded font-semibold"
              >
                Submit Trial Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;