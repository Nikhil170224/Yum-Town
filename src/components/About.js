import UserClass from "./UserClass";
import { Component } from "react";
import React from "react";


// class About extends Component{
//     constructor(){
//         super();
//         console.log("parent constructor is called")
//     }
//     componentDidMount(){
//     console.log("parent's componentdidMount is called ")
//     }
//     render(){
//         console.log("parent render is called")
//         return(
//             <div className="m-10 border bg-blue-100 px-5 space-y-6">
//                 <h1 className="m-2.5 text-5xl font-bold py-1.5">About Us!</h1>
//                 <UserClass name={"Nikhil (Class)"} location={"Ghaziabad"} />
//             </div>
//         )
//     }
// }

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen from-orange-50 to-orange-100 p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="YumTown Logo"
            className="w-20 h-20 animate-bounce-slow"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-3">
          About YumTown 🍴
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-center leading-relaxed">
          Welcome to <span className="font-semibold text-orange-500">YumTown</span>, 
          your go-to destination for discovering delicious meals and 
          top-rated restaurants around you! We bring local flavors right 
          to your screen with fast delivery, honest reviews, and mouth-watering visuals. 😋
        </p>

        {/* Divider */}
        <div className="border-t-2 border-orange-100 my-5"></div>

        {/* Mission Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">
            Our Mission 🚀
          </h3>
          <p className="text-gray-700">
            To make food discovery and delivery seamless, exciting, and satisfying — 
            connecting food lovers with the best kitchens in town!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="#"
            className="text-gray-500 hover:text-orange-500 transition"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-orange-500 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-orange-500 transition"
            aria-label="Github"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Made with ❤️ by <span className="text-orange-500">Nikhil</span>
        </p>
      </div>
    </div>
  );
};

export default About;
