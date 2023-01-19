import React, { useEffect } from "react";
import { databases } from "../../api/appwrite";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-hot-toast";

const EditEmployee = ({ data }) => {
  const [name, setName] = React.useState(data.Name);
  const [email, setEmail] = React.useState(data.Email);
  const [title, setTitle] = React.useState(data.Title);
  const [department, setDepartment] = React.useState(data.Department);
  const [role, setRole] = React.useState(data.Role);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const promise = databases.updateDocument(
      process.env.NEXT_PUBLIC_REACT_APP_DATABASE_ID, // This is the ID of the database you created
      process.env.NEXT_PUBLIC_REACT_APP_COLLECTION_ID, // This is the ID of the collection you created
      data.$id, // This is the ID of the document you want to edit
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
        toast.success("Employee edited successfully!");
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
              defaultValue={name}
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
              defaultValue={email}
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
              defaultValue={title}
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
              defaultValue={department}
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
              defaultValue={role}
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
            {loading ? "Loading..." : "Edit Employee"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
