import React, { Component } from "react";

import Header from "elements/parts/Header";
import landingPage from "elements/json/landingPage.json";
import Hero from "elements/parts/Hero";

import MostPicked from "elements/parts/MostPicked";
import Categories from "elements/parts/Categories";
import Testimony from "elements/parts/Testimony";
import Footer from "elements/parts/Footer";

export default class LandingPage extends Component {
  //constructor akan berjalan paling pertama ketika kita meruning class
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef();
  }


  render() {
    // console.log(this.props)
    return (
      <>
        {/* ...this.props = sintak es6 sprate operator / ketika ada props di class ini dia akan di parsing ke component header */}
        <Header {...this.props}></Header>

        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked  refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.categories}/>
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
