/* jshint esversion:6 */
import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branching } = props;
  return (
    <nav className="navbar navbar-expand-sm  bg-danger navbar-dark mb-3 py-0">
          <div className="container">
              <a href="/" className="navbar-brand">{branching}</a>
          </div>
          <div>
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <a href="/" className="nav-link">Home</a>
                  </li>
              </ul>
          </div>
    </nav>
  );
};

Header.defaultProps = {
  branching: "My Application"
};

Header.propTypes = {
    branching: PropTypes.string.isRequired
};

export default Header;