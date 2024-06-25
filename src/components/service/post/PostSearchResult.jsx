
import React from "react";
import  Link  from "next/link";
import {FormatedDate} from "@/components/common/dayago/DaysAgo";
const PostSearchResult = ({ service }) => {
  return (
    <div className="flex flex-wrap p-5 justify-center text-center -mx-2">
      {service.map((item,i)=> {
        return (
       <div  key={i} className="w-full md:max-w-[300px] px-2 pb-12">
        <div className="h-96 bg-background text-foreground rounded overflow-hidden shadow-md hover:shadow-primary hover:shadow-lg  relative smooth">
          <div className="font-bold text-xl text-center text-foreground">
            {item.serviceName}
          </div>

          <Link href={`/service/postDetails?id=${item.id}`} className="no-underline hover:no-underline">
            <img
              src={
                item.image1 ||
                "https://source.unsplash.com/_AjqGGafofE/400x200"
              }
              className="h-48 w-full rounded-t shadow-lg"
            />
            <div className="p-6 h-[50px]">
              <p className="text-foreground text-xs md:text-sm">
                {item.shortContent}
              </p>
              {/*<p className="text-foreground font-serif text-base mb-5">*/}
              {/*  {item.content}*/}
              {/*</p>*/}
            </div>
            {item.serviceProvider && (
                <>
                  <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                    <img
                        className="w-8 h-8 rounded-full mr-4"
                        src={item.serviceProvider.profilePhoto || "/image/dummyUser.png"}
                        alt={item.serviceName}
                    />
                    <p className="text-foreground text-xs md:text-sm">
                      Name:
                      <span className="text-secondary"> {item.serviceProvider['firstName']}</span>
                    </p>
                    <p className="text-foreground text-xs md:text-sm">
                      Profession
                      {item.serviceProvider['profession']}
                    </p>

                  </div>
                  <div> Created at: <FormatedDate createdAt={item.createdAt}/></div>
                </>
            )}
          </Link>
        </div>
       </div>

        )
      })
    }
    </div>
  );
};

export default PostSearchResult;
