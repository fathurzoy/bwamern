import React, { Component } from "react";

import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";

import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  //constructor akan berjalan paling pertama ketika kita meruning class
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    //kalo komponent baru di load Staycation | Home //windownya viewportnya arah paling atas
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }

  render() {
    // console.log(this.props)
    return (
      <>
        {/* ...this.props = sintak es6 sprate operator / ketika ada props di class ini dia akan di parsing ke component header */}
        <Header {...this.props}></Header>

        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
