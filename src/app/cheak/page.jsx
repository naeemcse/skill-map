import React from 'react';
import Uploader from "@/components/uploadthing/Uploader"
import DivisionDistrictUpazilaSelector from "@/components/DivisionDistrictUpazilaSelector";
import {divisions} from "@/assets/divisinDistrictUpzillaName";
import Tiptap from "@/components/editor/Tiptap";
const Page = () => {

    return (
        <div>
            <h1 className={"text-center"}> Hi This is Cheaking Page   </h1>
           {/*<DivisionDistrictUpazilaSelector divisions={divisions}/>*/}
           {/* <Uploader/>*/}
            <Tiptap/>
        </div>
    );
};

export default Page;