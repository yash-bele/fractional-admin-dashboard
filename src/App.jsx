import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Table from "./pages/Table";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/table" element={<Table />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
