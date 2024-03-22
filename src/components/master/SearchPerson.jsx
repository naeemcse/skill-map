"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchLocationSuggestion from "@/components/SerachLocationSuggestion";

const SearchPerson = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upzilla, setUpzilla] = useState("");

  const classOfInput = `border bg-gray-200 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 m-1`
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // console.log('Profession:', profession, 'Location:', location);

    // Reset form if needed
    
    setLocation("");
  };
  const handleChangeLocationState = (value) => {
    setLocation(value);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Profession"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="border bg-gray-200 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 m-1"
        />
        <input
          type="text"
          placeholder="Division"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          className="border  bg-gray-200 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 m-1"
        />
        <input
          type="text"
          placeholder="District"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="border  bg-gray-200 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 m-1"
        />
        <input
          type="text"
          placeholder="Upzilla"
          value={upzilla}
          onChange={(e) => setUpzilla(e.target.value)}
          className="border  bg-gray-200 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 m-1"
        />
        <SearchLocationSuggestion cls={classOfInput} onStateChange={handleChangeLocationState} />
       {location}
        <Link
          href={`/search/?divisionName=${division}&districtName=${district}&upzillaName=${upzilla}&keyword=${keyword}`}
        >
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-40 m-1"
          >
            Search
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchPerson;
