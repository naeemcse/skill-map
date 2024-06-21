import React from 'react';
import SearchPerson from "@/components/master/SearchPerson";
import SelectLocationSearchBar from "@/components/searchBar/SelectLocationSearchBar";
import {divisions} from "@/assets/divisinDistrictUpzillaName";

const MainSection = () => {
    return (
        <div>
            <SelectLocationSearchBar divisions={divisions}/>
            {/*<SearchPerson/>*/}
        </div>
    );
};

export default MainSection;