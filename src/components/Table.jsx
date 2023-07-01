const Table = ({ data }) => {
  console.log(data);
  return (
    <main className="relative shadow-md h-screen font-sans">
      <table className="w-[90%] text-xs text-left text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 font-serif">
          <tr>
            <th scope="col" className="w-[26.666%] pl-9 py-3">
              Type
            </th>
            <th scope="col" className="w-[26.666%] py-3">
              Ad Type
            </th>
            <th scope="col" className="w-[26.666%] py-3">
              Posted On
            </th>
            <th scope="col" className="w-[10%] py-3 text-center">
              Details
            </th>
            <th scope="col" className="w-[10%] py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, j) => (
            <tr
              key={j}
              className={`border-b dark:border-gray-700 capitalize ${
                j % 2 === 0
                  ? "bg-white dark:bg-gray-900"
                  : "bg-gray-50 dark:bg-gray-800"
              }`}
            >
              <th
                scope="row"
                className={`text-sm pl-9 font-normal text-gray-900 dark:text-gray-400 ${
                  j % 2 === 0 ? "py-3" : "py-2.5"
                }`}
              >
                {i.propertyType}
              </th>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.propertyAdType}
              </td>
              <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                {i.postedOn}
              </td>
              <td className={`text-center ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  View
                </a>
              </td>
              <td className={`text-center ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
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
    </main>
  );
};

export default Table;
