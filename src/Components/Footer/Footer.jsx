import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 py-6 text-center select-none border-t border-gray-800">
      <p className="text-sm">
        © {new Date().getFullYear()} Ratul. All rights reserved.
      </p>
      <p className="mt-1 text-xs text-gray-500">
        Built with ❤️ using React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
