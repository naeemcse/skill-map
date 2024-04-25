// // DivisionDistrictUpazilaSelector.js
"use client"

// DivisionDistrictUpazilaSelector.js

import { useState } from 'react';

const DivisionDistrictUpazilaSelector = ({ divisions }) => {
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');

    const handleDivisionChange = (event) => {
        setSelectedDivision(event.target.value);
        setSelectedDistrict('');
        setSelectedUpazila('');
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
        setSelectedUpazila('');
    };

    return (
        <div>
            <label htmlFor="division">Select Division:</label>
            <select id="division" value={selectedDivision} onChange={handleDivisionChange}>
                <option value="">Select Division</option>
                {divisions.map((division, index) => (
                    <option key={index} value={division.name}>{division.name}</option>
                ))}
            </select>

            <br /><br />

            <label htmlFor="district">Select District:</label>
            <select id="district" value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedDivision}>
                <option value="">Select District</option>
                {selectedDivision && divisions.find(division => division.name === selectedDivision)
                    .districts.map((district, index) => (
                        <option key={index} value={district.name}>{district.name}</option>
                    ))}
            </select>

            <br /><br />

            <label htmlFor="upazila">Select Upazila:</label>
            <select id="upazila" value={selectedUpazila} onChange={(event) => setSelectedUpazila(event.target.value)} disabled={!selectedDistrict}>
                <option value="">Select Upazila</option>
                {selectedDistrict && divisions.find(division => division.name === selectedDivision)
                    .districts.find(district => district.name === selectedDistrict)
                    .upazilas.map((upazila, index) => (
                        <option key={index} value={upazila}>{upazila}</option>
                    ))}
            </select>
        </div>
    );
};

export default DivisionDistrictUpazilaSelector;











// import { useState, useEffect } from 'react';
//
// const DivisionDistrictUpazilaSelector = ({ divisions }) => {
//     const [selectedDivision, setSelectedDivision] = useState('');
//     const [selectedDistrict, setSelectedDistrict] = useState('');
//     const [selectedUpazila, setSelectedUpazila] = useState('');
//
//     useEffect(() => {
//         setSelectedDistrict('');
//         setSelectedUpazila('');
//     }, [selectedDivision]);
//
//     const handleDivisionChange = (event) => {
//         setSelectedDivision(event.target.value);
//     };
//
//     const handleDistrictChange = (event) => {
//         setSelectedDistrict(event.target.value);
//     };
//
//     return (
//         <div>
//             <label htmlFor="division">Select Division:</label>
//             <select id="division" value={selectedDivision} onChange={handleDivisionChange}>
//                 <option value="">Select Division</option>
//                 {divisions.map((division, index) => (
//                     <option key={index} value={division.name}>{division.name}</option>
//                 ))}
//             </select>
//
//             <br /><br />
//
//             {selectedDivision && (
//                 <>
//                     <label htmlFor="district">Select District:</label>
//                     <select id="district" value={selectedDistrict} onChange={handleDistrictChange}>
//                         <option value="">Select District</option>
//                         {divisions.find(division => division.name === selectedDivision)
//                             .districts.map((district, index) => (
//                                 <option key={index} value={district.name}>{district.name}</option>
//                             ))}
//                     </select>
//
//                     <br /><br />
//
//                     <label htmlFor="upazila">Select Upazila:</label>
//                     <select id="upazila" value={selectedUpazila} onChange={(event) => setSelectedUpazila(event.target.value)}>
//                         <option value="">Select Upazila</option>
//                         {selectedDistrict && divisions.find(division => division.name === selectedDivision)
//                             .districts.find(district => district.name === selectedDistrict)
//                             .upazilas.map((upazila, index) => (
//                                 <option key={index} value={upazila}>{upazila}</option>
//                             ))}
//                     </select>
//                 </>
//             )}
//         </div>
//     );
// };
//
// export default DivisionDistrictUpazilaSelector;
