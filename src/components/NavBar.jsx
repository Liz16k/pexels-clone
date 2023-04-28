import SearchForm from "./SearchForm";
const NavBar = () => {
  return (
    <nav>
      <div>
        <div>
          <img
            src="https://www.drupal.org/files/project-images/pexels_logo_0.png"
            alt="logo"
            width="3%"
          />
          <div>Pexels</div>
        </div>
        <div>
          <SearchForm />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
