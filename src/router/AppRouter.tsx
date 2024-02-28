import { Route, Routes } from "react-router-dom";
import HeroesApp from "../App";
import { DcPage, MarvelPage } from "../heroes/pages";
import { NavBar } from "../ui/components";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroesApp />} />
        <Route path="/dcpage" element={<DcPage />} />
        <Route path="/marvelpage" element={<MarvelPage />} />
      </Routes>
    </>
  );
};
