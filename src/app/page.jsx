import Image from "next/image";
// import PlainLayout from "@/components/master/PlainLayout";
import SearchPerson from "@/components/master/SearchPerson";
import HompageSearchBar from "@/components/searchBar/HompageSearchBar";
import ResultDisplay from "@/components/service/ResultDisplay"

export default function Home() {
  return (
    <>
        {/* <SearchPerson/> */}
        <HompageSearchBar/>
        
        <ResultDisplay/>
  
    </>
   
  );
}
