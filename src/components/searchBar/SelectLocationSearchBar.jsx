"use client"
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
import { Input } from "@/components/ui/input"
import professionList from "@/assets/professionList";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const SelectLocationSearchBar = ({ divisions }) => {
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedUpazila, setSelectedUpazila] = useState('');
    const [profession, setProfession] = useState('');

    const handleDivisionChange = (event) => {
        const selectedDivisionValue = event;
        // console.log("Selected Division:", selectedDivisionValue);
        setSelectedDivision(selectedDivisionValue);
        setSelectedDistrict(''); // Reset selected district when division changes
        setSelectedUpazila(''); // Reset selected upazila when division changes
    };

    const handleDistrictChange = (event) => {
        const selectedDistrictValue = event;
        // console.log("Selected District:", selectedDistrictValue);
        setSelectedDistrict(selectedDistrictValue);
        setSelectedUpazila(''); // Reset selected upazila when district changes
    };

    return (
        <div className="sticky top-16 z-50 lg:mx-20 flex flex-col md:flex-row gap-2 items-center justify-center">
            {/* Division Section */}
            <Select
                defaultValue={selectedDivision}
                    onValueChange={handleDivisionChange} >
                <SelectTrigger className="w-4/5 md:w-1/5 text-cyan-400" >
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
                <SelectTrigger className="w-4/5 md:w-1/5">
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
                         onValueChange={(event) => setSelectedUpazila(event)}
                         disabled={!selectedDistrict}>
                <SelectTrigger className="w-4/5 md:w-1/5 md:m-2 ">
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
            <Input className="w-4/5 md:w-1/5 md:m-2"
            type="text"
            placeholder="Profession"
            value={profession}
            onChange={(e)=>(setProfession(e.target.value))}
            list="professions"
            />
            <datalist id = "professions"   className=" md:m-2">
                {professionList.map((suggestion, index) => (
                    <option key={index} value={suggestion}/>
                ))}
            </datalist>
            <Link
            className="md:w-1/5 md:m-2"
          href={`/search/?divisionName=${selectedDivision}&districtName=${selectedDistrict}&upzillaName=${selectedUpazila}&keyword=${profession}`}
        >
            <Button className='w-full' > Submit </Button>
            </Link>
        </div>

    );
};

export default SelectLocationSearchBar;
