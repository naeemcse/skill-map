import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import {Button} from "@/components/ui/button";


const Page = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-center">Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center">
                <Link  href={"/"}> <Button> Inbox </Button>  </Link>
                <Link  href={"/user/profile/myProfile"}> <Button> My Profile </Button>  </Link>

                    <Link  href={"/user/profile/update"}> <Button> Update Profile </Button>  </Link>
                    <Link  href={"/service/post"}> <Button> Post a Service </Button>  </Link>

                    <Link  href={"/dashboard/myservices"}> <Button> My Services </Button>  </Link>
                    {/*<Link  href={"/"}> <Button> Inbox </Button>  </Link>*/}
                </div>
            </CardContent>
        </Card>
    );
};

export default Page;
