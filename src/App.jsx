import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store";
import { Provider } from "react-redux";

import Login from "./pages/Login";
import Home from "./pages/Home";
import View from "./pages/View";
import Layout from "./pages/Layout";

const App = () => {
  return (
    // <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/view/:id" element={<View />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </Provider>
  );
};

export default App;
