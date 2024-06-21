import * as React from "react"
import { Button } from "@/components/ui/button"
import { FiMenu } from "react-icons/fi";
import {useTheme} from "next-themes";
import { FiChevronsLeft } from "react-icons/fi";

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";
import ModeToggle from "@/components/ModeToggle";
import Image from "next/image";


export default function DrawerDemo() {
    const {theme} = useTheme();

    return (
        <Drawer direction="left" >
            <DrawerTrigger asChild>
                <Button variant="outline"><FiMenu /></Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="w-full">
                    {/*<DrawerHeader>*/}
                    {/*    <DrawerTitle>Move Goal</DrawerTitle>*/}
                    {/*    <DrawerDescription>Set your daily activity goal.</DrawerDescription>*/}
                    {/*</DrawerHeader>*/}
                    <div className="ml-4 flex flex-col items-left space-x-4">
                        <div className="flex gap-2">
                            <Link href="/" className="text-foreground">
                                <Image className="p-2 rounded-md" src={ theme === "dark" ?"/logo-dark.png":"/logo-light.png"} width={150} height={90} loading='lazy' alt="Logo" title="Skill Map"/>
                            </Link>
                            <DrawerClose asChild>
                                <Button variant="outline" className="font-bold text-lg border-none p-2 mt-2">
                                <FiChevronsLeft  />
                                </Button>
                            </DrawerClose>
                        </div>

                        <Link
                            href="/"
                            className="text-foreground hover:bg-foreground  hover:text-background rounde-lg p-2 hover:transion ease-linear duration-400 rounded"
                        >
                            Home
                        </Link>

                        <Link
                            href="/"
                            className="text-foreground hover:bg-foreground hover:text-background rounde-lg p-2 hover:transion ease-linear duration-400 rounded"
                        >
                            Services
                        </Link>

                        <Link
                            href="/user/login"
                            className="text-foreground hover:bg-foreground hover:text-background rounde-lg p-2 hover:transion ease-linear duration-400 rounded"
                        >
                            Log in
                        </Link>
                        <Link
                            href="/user/profile/update"
                            className="text-foreground hover:bg-foreground hover:text-background rounde-lg p-2 hover:transion ease-linear duration-400 rounded"
                        >
                            Update
                        </Link>

                        <Link
                            href="/user/registration"
                            className="text-foreground hover:bg-foreground hover:text-background rounde-lg p-2 hover:transion ease-linear duration-400 rounded"
                        >
                            Registration
                        </Link>
                        <ModeToggle/>
                    </div>

                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
