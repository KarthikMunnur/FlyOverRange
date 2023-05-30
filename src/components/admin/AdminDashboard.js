import React, { Component } from "react";
import AdminMenu from "./AdminMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Moderate from "./Posts/Moderate";

class AdminDashboard extends Component {
  render() {
    return (
      <section className="admin-container">
        {/* <AdminMenu></AdminMenu> */}
        <article className="content"></article>
      </section>
    );
  }
}

export default AdminDashboard;
