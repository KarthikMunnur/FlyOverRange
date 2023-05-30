import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutPage from "./components/layout/LayoutPage";
import { MessageManagerProvider } from "react-message-manager";

export default class App extends Component {
  render() {
    return (
      <div>
        <MessageManagerProvider desktopView>
          <LayoutPage></LayoutPage>
        </MessageManagerProvider>
      </div>
    );
  }
}
