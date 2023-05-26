import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
