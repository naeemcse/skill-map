
import React from "react";
import  Link  from "next/link";
const PostSearchResult = ({ service }) => {
  return (
    <div className="flex flex-wrap -mx-2">
      {service.map((item,i)=> {
        return (
       <div  key={i} className="w-full md:w-1/3 px-2 pb-12"> 
        <div className="h-full bg-background text-foreground rounded overflow-hidden shadow-md hover:shadow-primary hover:shadow-lg  relative smooth">
          <div className="font-bold text-xl text-center text-foreground">
            {" "}
            {item.serviceName}{" "}
          </div>

          <Link href={`/service/postDetails?id=${item.id}`} className="no-underline hover:no-underline">
            <img
              src={
                item.image1 ||
                "https://source.unsplash.com/_AjqGGafofE/400x200"
              }
              className="h-48 w-full rounded-t shadow-lg"
            />
            <div className="p-6 h-auto md:h-48">
              <p className="text-foreground text-xs md:text-sm">
                {" "}
                {item.shortContent}{" "}
              </p>
              <p className="text-foreground font-serif text-base mb-5">
                {item.content}
              </p>
            </div>
          
            <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
              <img
                className="w-8 h-8 rounded-full mr-4"
                src="/image/dummyUser.png"
                alt={item.serviceName}
              />
              <p className="text-foreground text-xs md:text-sm">
                Name
                {/* {item.serviceProvider.firstName}   */}
              </p>
              <p className="text-foreground text-xs md:text-sm">
                Profession
                {/* {item.serviceProvider['profession']}   */}
              </p>
            </div>
           
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
