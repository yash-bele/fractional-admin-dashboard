import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <main className=" dark:bg-gray-900 h-screen grid place-items-center">
      <ImSpinner9 className="text-gray-800 text-9xl animate-spin -mt-10" />
    </main>
  );
};

export default Loading;
