import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Session from "./pages/Session";
import User from "./pages/User";

//Setup routes
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/session" element={<Session></Session>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
