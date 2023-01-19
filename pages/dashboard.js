import React, { useEffect } from "react";
import Table from "../components/Table";
import { account } from "../api/appwrite";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [user, setUser] = React.useState();
  const router = useRouter();

  // Logout function
  const clearSession = () => {
    const logout = account.deleteSession("current");
    logout.then(
      function (response) {
        toast.success("Logged out successfully!");
        router.push("/");
      },
      function (error) {
        console.log(error);
        toast.error(error.message);
      }
    );
  };

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

  if (!user)
    return (
      <div className="text-center">
        Not Authenticated Please{" "}
        <span
          onClick={() => router.push("/login")}
          className="text-blue-600 underline"
        >
          Login
        </span>
      </div>
    );

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="">
        <div className="bg-blue-600 p-8 w-full flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Welcome Back, {user.name}
            </h1>
          </div>
          <div>
            <button
              onClick={clearSession}
              className="px-3 py-2 text-md bg-white text-blue-600 rounded-md"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="w-full mt-10">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
