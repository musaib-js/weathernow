import React, { useEffect, useState } from "react";

export default function WeatherBox(props) {
  const [deets, setdeets] = useState(null);
  const [search, setSearch] = useState("Srinagar");
  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    async function updateData(){
        const url = `//api.weatherstack.com/current?access_key=${props.apiKey}&query=${search}`
        //const url = `//api.weatherstack.com/current?access_key=getyourownkeymate0011&query=${search}`
        const response = await fetch(url)
        const responseJson = await response.json()
        setdeets(responseJson)
        console.log(deets)
    }
    updateData();
  }, [search]);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full shadow-lg border-2 border-gray-200 border-opacity-60 px-4 rounded-lg overflow-hidden">
                <label
                  style={{ marginTop: "5px", display: "block" }}
                  htmlFor="searchplace"
                  className="justify-center leading-7 text-sm text-gray-600"
                >
                  Enter the city name
                </label>
                <input
                  type="text"
                  onChange={handleOnChange}
                  id="searchplace"
                  name="searchplace"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base outline-none text-gray-700 py-1 leading-8 transition-colors duration-200 ease-in-out"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    City Name
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {deets && deets.location ? deets.location.name : "Please Enter The City Name"}
                  </h1>
                  <div className="p-2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                      Temp: {deets && deets.current ? deets.current.temperature : ""}°C
                      </span>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                        Feels Like: {deets && deets.current ? deets.current.feelslike : ""}°C
                      </span>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                      Humidity: {deets && deets.current ? deets.current.humidity : ""}%
                      </span>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                      Visibility: {deets && deets.current ? deets.current.visibility : ""}KM
                      </span>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        className="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                      <span className="title-font font-medium">
                      UV Index: {deets && deets.current ? deets.current.uv_index : ""}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="/"
                      className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
