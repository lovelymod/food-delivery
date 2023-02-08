import { Restuarants } from "../Restuarants/RestuarantsList";

import AppBarr from "../components/Appbar";
import SideBar from "../components/SizeBar";

import { useState } from "react";

function HomePage() {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <div className="flex h-screen w-screen flex-col">
      <AppBarr navOpen={navOpen} setnavOpen={setnavOpen} />
      <SideBar navOpen={navOpen} setnavOpen={setnavOpen} />
      <div className="h-full w-full"></div>
    </div>
  );
}

export default HomePage;
