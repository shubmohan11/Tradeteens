import React from "react";

const Footer = () => {
  return (
    <footer className="p-6 text-center bg-gray-800 text-white">
      <p>© {new Date().getFullYear()} TradeTeens. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
