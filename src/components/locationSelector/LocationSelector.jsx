"use client"
import {divisions} from "@/assets/divisinDistrictUpzillaName";
import { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const SelectLocationSearchBar = ({setDivision,setDistrict,setUpazila}) => {
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');

    const handleDivisionChange = (event) => {
        const selectedDivisionValue = event;
        // console.log("Selected Division:", selectedDivisionValue);
        setSelectedDivision(selectedDivisionValue);
        setDivision(selectedDivisionValue);
        setSelectedDistrict(''); // Reset selected district when division changes
        setSelectedUpazila(''); // Reset selected upazila when division changes
    };

    const handleDistrictChange = (event) => {
        const selectedDistrictValue = event;
        // console.log("Selected District:", selectedDistrictValue);
        setSelectedDistrict(selectedDistrictValue);
        setDistrict(selectedDistrictValue);
        setSelectedUpazila(''); // Reset selected upazila when district changes
    };
    const handleUpzillaChange = (event) => {
        const selectedUpzillaValue = event;
        setSelectedUpazila(selectedUpzillaValue);
       setUpazila(selectedUpzillaValue);

    };

    return (
        <div className="sticky top-16 z-50 lg:mx-20 flex flex-col md:flex-row gap-2 items-center justify-center">
            {/* Division Section */}
            <Select
                defaultValue={selectedDivision}
                onValueChange={handleDivisionChange} >
                <SelectTrigger className="w-full md:w-1/3 text-cyan-400" >
                    <SelectValue id="division" placeholder="Select Division"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select Division</SelectLabel>
                        {divisions.map((division, index) => (
                            <SelectItem key={index} value={division.name}>{division.name}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            {/* Districts */}
            <Select
                defaultValue={selectedDistrict}
                onValueChange={handleDistrictChange} disabled={!selectedDivision}>
                <SelectTrigger className="w-full md:w-1/3">
                    <SelectValue id="district" placeholder="Select District" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select District for {selectedDivision}</SelectLabel>
                        {selectedDivision && divisions.find(division => division.name === selectedDivision)
                            .districts.map((district, index) => (
                                <SelectItem key={index} value={district.name}>{district.name}</SelectItem>
                            ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            {/* Upazila */}
            <Select
                defaultValue={selectedUpazila}
                onValueChange={handleUpzillaChange}
                disabled={!selectedDistrict}>
                <SelectTrigger className="w-full md:w-1/3 md:m-2 ">
                    <SelectValue id="upazila" placeholder="Select Upazila" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select Upazila for {selectedDistrict}</SelectLabel>
                        {selectedDistrict && divisions.find(division => division.name === selectedDivision)
                            .districts.find(district => district.name === selectedDistrict)
                            .upazilas.map((upazila, index) => (
                                <SelectItem key={index} value={upazila}>{upazila}</SelectItem>
                            ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

        </div>

    );
};

export default SelectLocationSearchBar;
