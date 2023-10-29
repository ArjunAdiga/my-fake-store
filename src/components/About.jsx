import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <>
    <Header/>
    <div className="flex justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          Hello, I am Arjun V Adiga
        </h1>
        <div className="text-lg text-gray-800 mb-2">
          I am a frontend developer
        </div>
        <div className="mb-4">
          <div className="text-gray-700">arjunadiga191200@gmail.com</div>
          <div className="text-gray-700">9353669141</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
