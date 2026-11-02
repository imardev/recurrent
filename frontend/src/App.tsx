import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import DasboardHome from "./pages/dashboard/DasboardHome";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      <Route path="dasboard">
        <Route index element={<DasboardHome />} />
      </Route>
    </Routes>
  );
}

export default App;
