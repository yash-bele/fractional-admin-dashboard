import { Link } from "react-router-dom";

const Table = ({ data }) => {
  return (
    <main className="relative shadow-md h-screen font-sans">
      <table className="w-[90%] text-xs text-left text-gray-400 mx-auto">
        <thead className="text-sm uppercase bg-gray-700 text-gray-400 sticky top-0 font-serif">
          <tr>
            <th scope="col" className="w-[22.5%] pl-9 py-3">
              Type
            </th>
            <th scope="col" className="w-[22.5%] py-3">
              Ad Type
            </th>
            <th scope="col" className="w-[22.5%] py-3">
              Posted On
            </th>
            <th scope="col" className="w-[22.5%] py-3">
              Status
            </th>
            <th scope="col" className="w-[10%] py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, j) => (
            <tr
              key={i._id}
              className={`border-b border-gray-700 capitalize ${
                j % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
              }`}
            >
              <th
                scope="row"
                className={`text-sm pl-9 font-normal text-gray-400 ${
                  j % 2 === 0 ? "py-3" : "py-2.5"
                }`}
              >
                {i.propertyType || "None"}
              </th>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.propertyAdType || "None"}
              </td>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.postedOn || "None"}
              </td>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.isVerified ? "Verified" : "Screening"}
              </td>
              <td className={`text-center ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                <Link
                  to={`/home/view/${i._id}`}
                  className="font-medium text-blue-500 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Table;
