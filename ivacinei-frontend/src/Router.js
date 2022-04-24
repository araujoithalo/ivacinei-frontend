import { Routes, BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Session from "./pages/Session";
import User from "./pages/User";

//Setup routes
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route element={<Home />} index />
          <Route path="/user" element={<User></User>}></Route>
          <Route path="/session" element={<Session></Session>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
