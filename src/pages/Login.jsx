import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => navigate("/home");

  return (
    <section>
      <div class="flex flex-col items-center justify-center px-6 h-screen lg:py-0">
        <section className="w-fit text-lg text-center text-white mb-5 -mt-10 font-serif">
          <h1>FRACTIONAL ASSET</h1>
          <p className="text-xs">Admin Dashboard</p>
        </section>
        <div class="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-semibold leading-tight tracking-tight md:text-2xl text-white">
              Login to your account
            </h1>
            <form>
              <div className="mb-4 md:mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div className="mb-8 md:mb-10">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                class="font-serif w-full text-white text-lg focus:ring-4 focus:outline-nonefont-medium rounded-lg px-5 py-2 text-center duration-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
