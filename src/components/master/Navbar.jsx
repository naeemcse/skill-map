"use client";
import Link from "next/link";
import SearchPerson from "./SearchPerson";

const Navbar = () => {
  return (
    <>
      <nav className="border-b border-gray-600">
        <div className="mx-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white">
                  Logo
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href=""
                  className="text-white hover:bg-white  hover:text-black rounde-lg p-2 hover:transion ease-linear duration-400 rounded"
                >
                  Home
                </Link>

                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounde-lg p-2 hover:transion ease-linear duration-400 rounded"
                >
                  Services
                </Link>

                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounde-lg p-2 hover:transion ease-linear duration-400 rounded"
                >
                  Log in
                </Link>

                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounde-lg p-2 hover:transion ease-linear duration-400 rounded"
                >
                  Registration
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
