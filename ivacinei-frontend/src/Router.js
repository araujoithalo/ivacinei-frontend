import { Routes, BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Session from "./pages/Session";
import User from "./pages/Consult";
import Consult from "./pages/Consult";

//Setup routes
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route element={<Home />} index />
          <Route path="/session" element={<Session></Session>}></Route>
          <Route path="/consult" element={<Consult></Consult>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
