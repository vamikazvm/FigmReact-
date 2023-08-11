import { NavLink } from "react-router-dom";
import "./index.css";
export function NavBar() {
  return (
    <nav className="navbar-container">
      <div className="logo"><img src="./images/logo.png"/></div>
      <NavLink className="link" style={{ textDecoration: "none" }} exact to="/">
        Home
      </NavLink>
      <NavLink className="link" style={{ textDecoration: "none" }} to="/about">
        About
      </NavLink>
      <NavLink className="link" style={{ textDecoration: "none" }} to="/menu">
        Menu
      </NavLink>
      <NavLink
        className="link"
        style={{ textDecoration: "none" }}
        to="/rewards"
      >
        Rewards
      </NavLink>
      <NavLink className="link" style={{ textDecoration: "none" }} to="/deals">
        Deals
      </NavLink>
      <NavLink className="link" style={{ textDecoration: "none" }} to="/brands">
        Brands
      </NavLink>
      <div className="icon">
        <img src="./images/search.png" />
      </div>
      <div className="login">
      <a style={{ textDecoration: "none" }} href="/login">
          Login
        </a>
      </div>
      <div>
        <a style={{ textDecoration: "none" }} href="/signup">
          <button className="signup">Sign up</button>
        </a>
      </div>
      <div className="line"></div>
      <button className="cart" >
      <img src="./images/cart.png" />
      </button>
     
    </nav>
  );
}
