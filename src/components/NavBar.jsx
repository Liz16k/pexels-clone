import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import Nav from "./elements/Nav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <Link to="/">
        <img
          height="48px"
          src={`/src/assets/${isTransparent ? "pexels-white" : "pexels"}.png`}
          alt="pexels logo"
        />
      </Link>
      {!isTransparent && <SearchForm />}
    </Nav>
  );
};

export default NavBar;
