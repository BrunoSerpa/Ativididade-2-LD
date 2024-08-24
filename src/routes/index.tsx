import { Route, Routes } from "react-router-dom";
import { Megasena, Quina, Timemania } from "../components/Principal";
export default function Rotas() {
  return (
    <Routes>
      <Route path="*" element={<Megasena />} />
      <Route path="/megasena" element={<Megasena />} />
      <Route path="/quina" element={<Quina />} />
      <Route path="/timemania" element={<Timemania />} />
    </Routes>
  );
}
