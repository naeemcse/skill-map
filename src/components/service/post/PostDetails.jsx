import React from "react";
import Tag from "@/components/ui/Tag"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import parser from 'html-react-parser'
const PostDetails = ({service}) => {
  return (
    <div>
      <div>
        <main className="container mx-auto mt-8">
        <h2 className="text-center"> {service.serviceName}</h2>
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-8/12 px-4 mb-8">
              <img
                src={ service.image1 ||  "https://via.placeholder.com/1200x600"}
                alt={service.serviceName}
                className="w-full h-64 object-cover rounded"
                title={service.serviceName}
              />
              <h3 className="text-4xl font-bold mt-4 mb-2">
            {service.shortContent}
              </h3>
              <div className="text-foreground text-justify mb-4">
               {/* it will be React parsing and html's output  */}
                {
                  parser(service.content)

                }
              </div>
              <p className="text-foreground mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="text-foreground mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
                <h4 className="text-2xl font-bold mt-8 mb-2"> Experience from : {service.experienceFrom}  </h4>
                <h4 className="text-2xl font-bold mt-8 mb-2"> Price :  {service.serviceCharge} Taka   </h4>

            </div>
            <div className="w-full md:w-4/12 px-4 mb-8">
              <div className="bg-gray-100 px-4 py-6 rounded">
              <h3 className="text-lg font-bold mb-2">Tages</h3>
              <Tag  tagString={service.tags || ""} />
              <h3 className="text-lg font-bold mb-2">Keword</h3>
              <Tag  tagString={service.keywords || ""} />
              <h3 className="text-lg font-bold mb-2">Type</h3>
              <Tag  tagString={service.type || ""} />

                <h3 className="text-lg font-bold mb-2">Location</h3>
                <ul className="list-disc list-inside">
                  <li> Division:
                    <a href="#" className="ml-2 text-foreground hover:text-primary ">
                      {service.serviceAreaDivision}
                    </a>
                  </li>
                  <li> District: 
                    <a href="#" className="ml-2 text-foreground hover:text-primary">
                    {service.serviceAreaDistrict}
                    </a>
                  </li>
                  <li>Upzilla: 
                    <a href="#" className="ml-2 text-foreground hover:text-primary">
                    {service.serviceAreaUpzilla}
                    </a>
                  </li>
                </ul>
                <h3 className="text-lg font-bold mr-2  ">Post Author</h3>
                <a className="text-blue-500 hover:text-primary align-middle flex " href={`/serviceProvider/profile?id=${service.serviceProvider.id}`}>
                <Avatar className="inline-block mt-1">
      <AvatarImage src={service.serviceProvider.profilePhoto || "https://github.com/shadcn.png"} alt="@shadcn" />
      <AvatarFallback>{service.serviceProvider['firstName']} </AvatarFallback>
    </Avatar>
    <div className="mt-3 ml-3"> 
                    {service.serviceProvider['firstName']}  </div>
                    </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PostDetails;
