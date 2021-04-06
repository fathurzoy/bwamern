import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Hero from "parts/Hero";

import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

// import landingPage from "json/landingPage.json";
import { fetchPage } from "store/actions/page";
class LandingPage extends Component {
  //constructor akan berjalan paling pertama ketika kita meruning class
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    //kalo komponent baru di load Staycation | Home //windownya viewportnya arah paling atas
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage) {
      this.props.fetchPage(`https://admin-staycation-api.herokuapp.com/api/v1/member/landing-page`, "landingPage");
    }
  }

  render() {
    // console.log(this.props)

    const { page } = this.props;

    return (
      <>
        {/* ...this.props = sintak es6 sprate operator / ketika ada props di class ini dia akan di parsing ke component header */}
        <Header {...this.props}></Header>

        <Hero refMostPicked={this.refMostPicked} data={page.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={page.mostPicked} />
        <Categories data={page.categories} />
        <Testimony data={page.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page ? state.page.landingPage : null,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
