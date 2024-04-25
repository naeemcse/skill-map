import React from 'react';
import DivisionDistrictUpazilaSelector from "@/components/DivisionDistrictUpazilaSelector";
import {divisions} from "@/assets/divisinDistrictUpzillaName";
const Page = () => {

    return (
        <div>
            <h1> Hi  </h1>
            <DivisionDistrictUpazilaSelector divisions={divisions}/>
        </div>
    );
};

export default Page;