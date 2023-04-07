import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Homepage from "./pages/HomePage";
import Register from "./pages/Register";
import SongUpload from "./pages/SongUpload";

const App = () => {
  // const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<Register />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/upload" element={<SongUpload />} />
      </Routes>
    </div>
  );
};

export default App;
