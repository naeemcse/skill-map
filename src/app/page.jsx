import Image from "next/image";
import HompageSearchBar from "@/components/searchBar/HompageSearchBar";
import Hero from "@/components/master/home/hero/Hero";
import MainSection from "@/components/master/home/MainSection";

export default function Home() {
  return (
      <>
          {/*<body style={{backgroundImage: 'url("/image/bangladesh-map.svg")'}}>*/}
          <Hero/>
          {/* <HompageSearchBar/> */}
          <MainSection/>
          {/*</body>*/}

      </>

  );
}
