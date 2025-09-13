// import React from "react";
// import Navbar from "./components/Navbar";
//  import HeroSection from "./components/HeroSection";
//  import Features from "./components/Features";
// import Ratings from "./components/Ratings";
// import Achievements from "./components/Achievements";
// import Footer from "./components/Footer";
// import CoachProfile from "./components/CoachProfile";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//       </Routes>
//       <HeroSection />
//       <Features />
//       <Ratings />
//        <CoachProfile />
//       <Achievements />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;

