import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
      <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
      <Link className="navbar-brand" href="/">WikiCountries</Link>
      </div>
</nav>


  );
}

export default Navbar;