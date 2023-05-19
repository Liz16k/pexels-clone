import SearchForm from "./SearchForm";
import Nav from "./elements/Nav";
const NavBar = () => {
  return (
    <Nav>
      <img height="50px" src="/src/assets/pexels-white.png" alt="pexels logo" />
      <SearchForm />
    </Nav>
  );
};

export default NavBar;
