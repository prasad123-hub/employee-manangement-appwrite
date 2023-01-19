import AddEmployeeModal from "./Modals/AddEmployeeModal";
import EditEmployeeModal from "./Modals/EditEmployeeModal";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { databases } from "../api/appwrite";
import DeleteEmployeeModal from "./Modals/DeleteEmployeeModal";

export default function Example() {
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [employeeData, setEmployeeData] = useState();

  useEffect(() => {
    // Fetch data from API
    const promise = databases.listDocuments(
      "63c83a51ab4ca7ad05e6",
      "63c83ae8ef1683f008b1"
    ); // "[DATABASE_ID]", "[COLLECTION_ID]"

    promise.then(
      function (response) {
        console.log(response); // Success
        setEmployeeData(response.documents);
      },
      function (error) {
        console.log(error); // Failure
        toast.error(error.message);
      }
    );
  }, []);

  console.log("employeeData", employeeData);

  return (
    <>
      {showAddEmployeeModal && (
        <AddEmployeeModal
          isOpen={showAddEmployeeModal}
          setShowAddEmployeeModal={setShowAddEmployeeModal}
        />
      )}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Employess</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the employess in your company including their name,
              title, email, department and role.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              onClick={() => setShowAddEmployeeModal(true)}
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Add Employess
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                {employeeData && employeeData.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Department
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {employeeData.map((person, personIdx) => (
                        <tr
                          key={person.$id}
                          className={
                            personIdx % 2 === 0 ? undefined : "bg-gray-50"
                          }
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {person.Name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.Title}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.Email}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.Department}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.Role}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-3  text-right text-sm font-medium sm:pr-6">
                            <Actions data={person} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="p-4">No Employees Added</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Actions = ({ data }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <>
      {showEditModal && (
        <EditEmployeeModal
          isOpen={showEditModal}
          setShowEditModal={setShowEditModal}
          data={data}
        />
      )}

      {showDeleteModal && (
        <DeleteEmployeeModal
          isOpen={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          documentId={data.$id}
        />
      )}
      <div className="flex items-center space-x-2">
        <p
          onClick={() => setShowEditModal(true)}
          className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
        >
          Edit
        </p>
        <p
          onClick={() => setShowDeleteModal(true)}
          className="text-red-600 hover:text-red-900 cursor-pointer"
        >
          Delete
        </p>
      </div>
    </>
  );
};
