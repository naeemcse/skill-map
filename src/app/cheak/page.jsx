import React from 'react';
import Uploader from "@/components/Uploader"
import DivisionDistrictUpazilaSelector from "@/components/DivisionDistrictUpazilaSelector";
import {divisions} from "@/assets/divisinDistrictUpzillaName";
const Page = () => {

    return (
        <div>
            <h1> Hi  </h1>
            <DivisionDistrictUpazilaSelector divisions={divisions}/>
            <Uploader/>
        </div>
    );
};

export default Page;