import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import { NavContainer } from "./NavContainer.styles";
import { NavBarLogo } from "./NavBarLogo";
import Nav from "./Nav.styles";

const NavBar = () => {
  const params = useParams();
  const [isTransparent, setTransparency] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const header = document.querySelector("header");
    const nav = navRef.current;
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
    <Nav ref={navRef} transparent={isTransparent}>
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
