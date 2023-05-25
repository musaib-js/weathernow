import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container px-5 py-5">
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div className="overflow-hidden w-full m-4 flex justify-center">
              <div className="flex flex-col md:flex-row items-center shadow-md h-full text-white bg-green-500 hover:bg-white hover:text-black">
                <div className="overflow-hidden p-4">
                  <div className="flex flex-col justify-center h-full p-2">
                    <div className="font-bold text-2xl">
                      WeatherNow - A weather app built using Weather Stack API{" "}
                    </div>
                    <div className=" m-2 hover:text-orange-500">
                      <Link to="/">Home</Link>
                    </div>
                  </div>
                </div>
                <div className=" md:w-1/2 overflow-hidden ">
                  {" "}
                  <img
                    src="https://source.unsplash.com/700x600/?weather"
                    alt=""
                    className=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
