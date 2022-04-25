import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Session from "./pages/Session";
import Consult from "./pages/Consult";

//Setup routes
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route element={<Home />} index />
          <Route exact path="/session" element={<Session />} />
          <Route exact path="/consult" element={<Consult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
