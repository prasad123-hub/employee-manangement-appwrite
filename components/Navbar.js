import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { account } from "../api/appwrite";

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = React.useState();

  // Get user details
  useEffect(() => {
    const promise = account.get();

    promise.then(
      function (response) {
        console.log(response);
        setUser(response);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="shadow-md">
      <div className="h-[75px] py-4 max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">MPloyee</h1>
        </div>
        <div>
          {user ? (
            <button
              onClick={() => router.push("/dashboard")}
              className="px-4 py-2 font-semibold text-md rounded-md bg-blue-600 text-white mt-3"
            >
              Dashboard
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="px-4 py-2 font-semibold text-md rounded-md bg-blue-600 text-white mt-3"
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
