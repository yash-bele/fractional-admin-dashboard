import data from "../data.json";

const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md dark:bg-gray-900 h-screen grid place-items-center">
      <table className="w-[90%] text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50 font-serif dark:bg-gray-700 dark:text-gray-400 sticky top-0">
          <tr>
            <th scope="col" className="w-[22.5%] px-10 py-3">
              car name
            </th>
            <th scope="col" className="w-[22.5%]  px-10 py-3">
              color
            </th>
            <th scope="col" className="w-[22.5%]  px-10 py-3">
              car modal
            </th>
            <th scope="col" className="w-[22.5%]  px-10 py-3">
              car year
            </th>
            <th scope="col" className="w-[10%]  px-10 py-3">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, j) => (
            <tr
              className={`bg-white border-b dark:border-gray-700 ${
                j % 2 === 0
                  ? "bg-white dark:bg-gray-900"
                  : "bg-gray-50 dark:bg-gray-800"
              }`}
            >
              <th
                scope="row"
                className={` px-10 font-light text-gray-900 dark:text-gray-400 font-serif ${
                  j % 2 === 0 ? "py-3" : "py-2.5"
                }`}
              >
                {i.carName}
              </th>
              <td className={` px-10 ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.color}
              </td>
              <td className={` px-10 ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.carModel}
              </td>
              <td className={` px-10 ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.carYear}
              </td>
              <td className={` px-10 ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
