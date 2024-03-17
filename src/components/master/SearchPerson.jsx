import React, { useState } from 'react';

const SearchPerson = () => {
  const [profession, setProfession] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Profession:', profession, 'Location:', location);

    // Reset form if needed
    setProfession('');
    setLocation('');
  };

  return (
   <div className="flex items-center justify-center h-screen">
     <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
        className="border bg-gray-200 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 m-1"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border  bg-gray-200 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-96 m-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-40 m-1">
        Search
      </button>
    </form>
   </div>
  );
};

export default SearchPerson;
