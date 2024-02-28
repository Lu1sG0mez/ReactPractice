import { NavLink, useLocation } from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <nav
      className={`grid grid-cols-5 text-white ${
        pathname == "/dcpage" || pathname == "/marvelpage"
          ? pathname == "/dcpage"
            ? "bg-blue-900"
            : "bg-red-700"
          : "bg-violet-900"
      } h-10 place-items-center`}
    >
      <div className="flex flex-row col-start-1 col-end-3 w-full">
        <NavLink
          to="/"
          className="flex flex-row h-full items-center pl-2 text-2xl font-semibold border-r-2 pr-2 border-bl"
        >
          Otakomic
        </NavLink>
        <div className="flex flex-row w-full">
          <NavLink
            to="/marvelpage"
            className={"px-4 flex flex-row items-center h-full font-semibold"}
          >
            Marvel
          </NavLink>
          <NavLink
            to="/dcpage"
            className={"px-4 flex flex-row items-center h-full font-semibold"}
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="col-start-5 flex flex-row items-center">
        <ul className="absolute right-2">
          <NavLink to="/login">Logout</NavLink>
        </ul>
      </div>
    </nav>
  );
};
