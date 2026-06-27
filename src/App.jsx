import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Streak from "./pages/Streak";
import Duvidas from "./pages/Duvidas";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/streak" element={<Streak />} />
      <Route path="/duvidas" element={<Duvidas />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
