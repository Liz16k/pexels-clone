import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import Nav from "../styles/elements/Nav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavContainer } from "./../styles/elements/NavContainer";
import { NavBarLogo } from "./NavBarLogo";

const NavBar = () => {
  const params = useParams();
  const [isTransparent, setTransparency] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    if (!header) setTransparency(false);
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting
          ? setTransparency(true)
          : setTransparency(false);
      },
      { threshold: 0 }
    );
    if (header) {
      observer.observe(header ?? nav);
      return () => {
        observer.disconnect();
      };
    }
  }, [params]);

  return (
    <Nav transparent={isTransparent}>
      <NavContainer>
        <Link to="/">
          <NavBarLogo />
        </Link>
        {!isTransparent && <SearchForm />}
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
