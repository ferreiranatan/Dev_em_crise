import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/public/Home";
import Diario from "../pages/public/Diario";
import Projetos from "../pages/public/Projetos";
import Sobre from "../pages/public/Sobre";
import Dashboard from "../pages/private/Dashboard";
import DiarioPost from "../pages/public/DiarioPost";
import Analytics from "../pages/public/Analytics";

export default function AppRoutes() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/diario" element={<Diario />} />
          <Route path="/diario/:id" element={<DiarioPost />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>

        <Route path="/admin" element={<Dashboard />} />
        <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
      </Routes>
  );
}
