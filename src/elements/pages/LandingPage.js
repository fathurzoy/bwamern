import React, { Component } from "react";

import Header from "elements/parts/Header";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        {/* ...this.props = sintak es6 sprate operator / ketika ada props di class ini dia akan di parsing ke component header */}
        <Header {...this.props}></Header>
      </>
    );
  }
}
