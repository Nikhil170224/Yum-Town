import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen from-gray-50 via-orange-50 to-yellow-100 p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/174177595?v=4" // <-- replace with your GitHub/LinkedIn profile image
            alt="Nikhil Profile"
            className="w-28 h-28 rounded-full border-4 border-orange-400 shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Name & Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Nikhil Mishra</h2>
        <h3 className="text-md font-semibold text-orange-500 mb-4">
          MERN Stack Developer 💻
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Passionate about building scalable web applications with MongoDB,
          Express, React, and Node.js. I love crafting beautiful UIs, writing
          clean code, and solving real-world problems with technology.
        </p>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-5 mb-5">
          {/* GitHub */}
          <a
            href="https://github.com/Nikhil170224"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            <i className="fab fa-github text-lg"></i> GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/nikhil-mishra-530883305"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <i className="fab fa-linkedin text-lg"></i> LinkedIn
          </a>
        </div>

        {/* Contact Details */}
        <div className="text-left text-gray-700 text-sm space-y-2 border-t pt-4">
          <p>
            <span className="font-semibold text-orange-500">📧 Email:</span>{" "}
            nikhilmi1050@gmail.com
          </p>
          <p>
            <span className="font-semibold text-orange-500">📱 Phone:</span> +91
            98765 43210
          </p>
          <p>
            <span className="font-semibold text-orange-500">🌍 Location:</span>{" "}
            Ghaziabad, India
          </p>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-6">
          © 2025 Nikhil Mishra — Crafted with ❤️ using React & TailwindCSS
        </p>
      </div>
    </div>
  );
};

export default Contact;
