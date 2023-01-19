import React from "react";
import { databases } from "../../api/appwrite";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

const AddEmployee = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [role, setRole] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const promise = databases.createDocument(
      "63c83a51ab4ca7ad05e6", // This is the ID of the database you created
      "63c83ae8ef1683f008b1", // This is the ID of the collection you created
      uuidv4(), // This is the ID of the document you created
      {
        Name: name,
        Email: email,
        Title: title,
        Department: department,
        Role: role,
      } // This is the data you want to store
    );

    promise.then(
      function (response) {
        console.log(response); // Success
        toast.success("Employee added successfully!");
        setLoading(false);
        window.location.reload();
      },
      function (error) {
        console.log(error); // Failure
        toast.error(error.message);
        setLoading(false);
      }
    );
  };

  return (
    <div className="mt-10">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <div className="mt-1">
            <input
              id="title"
              name="title"
              type="text"
              autoComplete="current-password"
              onChange={(e) => setTitle(e.target.value)}
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-700"
          >
            Department
          </label>
          <div className="mt-1">
            <input
              id="department"
              name="department"
              type="text"
              autoComplete="current-password"
              onChange={(e) => setDepartment(e.target.value)}
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role
          </label>
          <div className="mt-1">
            <input
              id="role"
              name="role"
              type="text"
              autoComplete="current-password"
              onChange={(e) => setRole(e.target.value)}
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {loading ? "Loading..." : "Add Employee"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
