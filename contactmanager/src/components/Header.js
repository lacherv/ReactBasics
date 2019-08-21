/* jshint esversion:6 */
import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branching } = props;
  return (
    <div>
      <h1 style={headingStyle}>{branching}</h1>
    </div>
  );
};

Header.defaultProps = {
  branching: "My Application"
};

Header.propTypes = {
    branching: PropTypes.string.isRequired
};

const headingStyle = {
    color: 'green', fontStyle: '50px'
};
export default Header;

 