import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/Mode";

export default function Home() {


  return (
   <>
      <h1 className="">Skill Map</h1>

      <Button  >Click me</Button>
     
      <ModeToggle />
   </>
  );
}
