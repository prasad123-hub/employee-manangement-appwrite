import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Navabr from "../components/Navbar";
import { account } from "../api/appwrite";

const Home = () => {
  const [user, setUser] = React.useState();
  const router = useRouter();

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
    <>
      <Navabr />
      <div className="h-[100vh - 75px] max-w-7xl mx-auto flex items-center justify-between mt-10 space-x-10">
        <div className="w-1/2">
          <span className="text-6xl font-bold text-blue-600">
            Efficient Employee
          </span>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Streamline Your Workforce Management
          </h1>
          <p className="text-gray-500 mt-3 text-md font-medium">
            Efficient Employee is a comprehensive website designed to streamline
            and simplify the process of managing your workforce. From hiring and
            onboarding to scheduling and performance evaluations, our platform
            offers a wide range of tools and resources to help you effectively
            manage your employees
          </p>
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
        <div className="w-1/2">
          <img src="/employees.svg" alt="hero-image" width={600} height={500} />
        </div>
      </div>
    </>
  );
};

export default Home;
