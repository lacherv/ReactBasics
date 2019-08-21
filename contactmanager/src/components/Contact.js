/* jshint esversion:6 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import './contact.css';

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <ol>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ol>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
