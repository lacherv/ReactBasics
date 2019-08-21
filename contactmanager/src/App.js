/* jshint esversion:6 */
import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branching="Contact Manager" />
        <Contact
          name="John Doe"
          email="jdoe@gmail.com"
          phone="555-555-5555" />
        <Contact
          name="Jane Smith"
          email="jsmith@gmail.com"
          phone="222-333-4444"
        />
      </div>
    );
  }
}
export default App;
