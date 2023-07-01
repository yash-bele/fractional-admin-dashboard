const Cards = ({ data }) => {
  return (
    <main className="absolute w-full h-full overflow-y-scroll capitalize overflow-hidden">
      <main className="w-fit py-5 grid place-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {data.map((i, j) => (
          <section
            key={i._id}
            className="w-[22rem] h-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-around h-full relative">
              <div className="flex items-center justify-between px-10 w-full">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Type
                </p>
                <span className="w-10 h-px bg-slate-200 absolute mx-auto left-0 right-0"></span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {i.propertyType || "None"}
                </p>
              </div>
              <div className="flex items-center justify-between px-10 w-full relative">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Ad Type
                </p>
                <span className="w-10 h-px bg-slate-200 absolute mx-auto left-0 right-0"></span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {i.propertyAdType || "None"}
                </p>
              </div>
              <div className="flex items-center justify-between px-10 w-full relative">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Posted On
                </p>
                <span className="w-10 h-px bg-slate-200 absolute mx-auto left-0 right-0"></span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {i.postedOn || "None"}
                </p>
              </div>
              <div className="flex items-center justify-between px-10 w-full relative">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Status
                </p>
                <span className="w-10 h-px bg-slate-200 absolute mx-auto left-0 right-0"></span>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {i.isVerified ? "Verified" : "Screening"}
                </p>
              </div>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="px-4 py-1 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  View
                </a>
              </div>
            </div>
          </section>
        ))}
      </main>
    </main>
  );
};

export default Cards;
