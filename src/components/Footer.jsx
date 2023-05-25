import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="m-2 max-w-5xl items-center">
          <div className="flex flex-col items-center">
            {" "}
            <div className="m-2">
              {" "}
              <a
                href = "/"
                className="w-9 h-10 text-center border-current border-2 text-green-600 hover:text-black pt-1 inline-block"
              >
                <i className="fa fa-facebook m-2"></i>
              </a>{" "}
              <a
                href = "/"
                className="w-9 h-10 text-center border-current border-2 text-blue-600 hover:text-black pt-1 inline-block"
              >
                <i className="fa fa-twitter m-2"></i>
              </a>{" "}
              <a
                href = "/"
                className="w-9 h-10 text-center border-current border-2 text-green-600 hover:text-black pt-1 inline-block"
              >
                <i className="fa fa-reddit m-2"></i>
              </a>{" "}
              <a
                href = "/"
                className="w-9 h-10 text-center border-current border-2 text-blue-600 hover:text-black pt-1 inline-block"
              >
                <i className="fa fa-pinterest m-2"></i>
              </a>{" "}
              <a
                href = "/"
                className="w-9 h-10 text-center border-current border-2 text-green-600 hover:text-black pt-1 inline-block"
              >
                <i className="fa fa-quora m-2"></i>
              </a>{" "}
            </div>
            <div className="flex md:flex-row flex-col">
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <a href="/">Home</a>{" "}
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <a href="/about">About us </a>{" "}
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <a href="/">Services </a>{" "}
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <a href="/contact">Contact Us </a>{" "}
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <a href="https://www.weatherstack.com"> API </a>{" "}
              </p>
            </div>
            <div className="text-gray-500 font-medium mt-4 text-xs">
              {" "}
              Copyright 2023. All rights reserved by {" "}
              <a href = "/" className="text-blue-600">
                WeatherNow
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
