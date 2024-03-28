/**
 *
 * Homepage
 *
 */

import React, { useRef, useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import { sortOptions } from '../../utils/store';

import ProductsShop from '../ProductsShop';
import BrandsShop from '../BrandsShop';
import CategoryShop from '../CategoryShop';

import Page404 from '../../components/Common/Page404';
import SelectOption from '../../components/Common/SelectOption';
import Newsletter from '../Newsletter'
import popupImage from './assets/20230901_030546.jpg'
import section1 from './assets/20230831_045126.jpg'
import section2 from './assets/20230831_051121.jpg'
import agadaImage from './assets/20230901_065504.jpg'
import native from './assets/20230903_015047.jpg'
import suit from './assets/20230903_015006.jpg'
import slider from './assets/slider.jpg'
import slider1 from './assets/slider1.jpg'
import agbadahome from './assets/agbada-home.png'
import kaftanhome from './assets/kaftan-home.png'
import heroone from './assets/hero-one.png'
import herotwo from './assets/hero-two.png'
import herothree from './assets/hero-three.png'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay'


import ProductList from '../../components/Store/ProductList';
import NotFound from '../../components/Common/NotFound';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import Pagination from '../../components/Common/Pagination';



class Homepage extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      modalState: false
    };
    this.handleShow = this.handleShow.bind(this)
  }

  handleShow() {
    this.setState({ modalState: false })
  }

  componentDidMount() {
    // Check if the modal should be shown when the component mounts
    this.checkShowModal();
  }


  checkShowModal = () => {
    const lastDisplayDate = localStorage.getItem('lastModalDisplayDate');
    if (!lastDisplayDate) {
      // If the last display date is not set, show the modal and set the current date
      this.setState({ modalState: true });
      localStorage.setItem('lastModalDisplayDate', new Date().toISOString());
    } else {
      // If the last display date is set, compare it with the current date
      const lastDisplayTimestamp = Date.parse(lastDisplayDate);
      const currentDateTimestamp = new Date().getTime();
      const twentyDaysInMillis = 20 * 24 * 60 * 60 * 1000; // 20 days in milliseconds

      if (currentDateTimestamp - lastDisplayTimestamp >= twentyDaysInMillis) {
        // If 20 days have passed, show the modal and update the last display date
        this.setState({ modalState: true });
        localStorage.setItem('lastModalDisplayDate', new Date().toISOString());
      }
    }
  };


  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.filterProducts(slug);
  }


  render() {
    const { products, isLoading, authenticated, updateWishlist, advancedFilters, filterProducts } = this.props;
    const { totalPages } = advancedFilters;
    const displayPagination = totalPages > 1;

    let displayProducts = [];
    if (products && products.length > 0) {
        // Ensure only the first 6 products are displayed
        displayProducts = products.slice(0, 8);
    }

    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const AutoplaySlider = withAutoplay(AwesomeSlider)


    return (
      <>

        {/*MODAL*/}
        <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header d-sm-none">
              <button type="button" className="btn btn-secondary align-self-end float-right" onClick={this.handleShow}>
                <img width="20" height="20" src="https://img.icons8.com/ios/20/delete-sign--v1.png" alt="close-sign--v1"/>
              </button>
            </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4">
                    <img src={popupImage} alt="Popup Image" className="d-none d-md-block" />
                  </div>
                  <div className="col-md-8 text-center">
                    <button type="button" className="btn btn-secondary align-self-end d-none d-md-block float-right" onClick={this.handleShow}>
                      <img width="30" height="30" src="https://img.icons8.com/ios/30/delete-sign--v1.png" alt="close-sign--v1"/>
                    </button>
                    <div className="d-flex flex-column justify-content-center" style={{height: "100%"}}>
                      <h1 className="modal-logo">eminencebygtx</h1>
                      <p className="modal-discount-text">unlock 10% off your first order</p>
                      <p style={{textTransform: "capitalize" }}>sign up for an instant discount, plus early access to new products, sales and more!</p>
                      <Newsletter />
                      <p style={{textTransform: "capitalize", fontSize: "12px", textColor: "gray", margin: "5% 0"}}>by signing up you agree to receive email marketing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        

        {/*SLIDER*/}


        {/*TOP SECTION*/}
        <div className="homepage-hero d-flex flex-column justify-content-center"
          style={{backgroundImage: `url${heroone}`}}>
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-explore">explore a world of beautiful African Attires tailored for you.</p>
              <p className="hero-custom">custom made african prints</p>
              <a href="" className="homepage-button">shop now</a>
            </div>
            <div className="hero-images">
              <img src={heroone} className="hero-image" alt="Hero One" />
              <img src={herotwo} className="hero-image" alt="Hero Two" />
              <img src={herothree} className="hero-image" alt="Hero Three" />
            </div>
          </div>
        </div>

        <div className="overall-div">
          {/*NEW SECTION*/}
          <div className="newsection">
            <div className="bestseller-title">
              <p>our bestsellers</p>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-6 col-md-6 bestseller-section-one">
                <div className="row no-gutters">
                  <div className="col d-flex align-items-center bestseller-text-section">
                    <div className="d-flex flex-column justify-content-center">
                      <p className="bestseller-text">agbada</p>
                      <a href="/shop/brand/agbada" className="homepage-button">shop now</a>
                    </div>
                  </div>
                  <div className="col image-right" style={{ position: "relative" }}>
                    <div className="image-overlay"></div>
                    <img src={agbadahome} height="50%" alt="image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 bestseller-section-one">
                <div className="row no-gutters">
                  <div className="col d-flex align-items-center bestseller-text-section">
                    <div className="d-flex flex-column justify-content-center">
                      <p className="bestseller-text">kaftan</p>
                      <a href="/shop/brand/kaftan" className="homepage-button">shop now</a>
                    </div>
                  </div>
                  <div className="col" style={{ position: "relative" }}>
                    <div className="image-overlay"></div>
                    <img src={kaftanhome} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*END OF NEW SECTION*/}



          {/* PRODUCT SECTIONS */}
          <div className="homepage-product-section">
            <div className="bestseller-title">
              <p>always fly 24/7, 365</p>
            </div>
            <div className="" style={{height: "93%"}}>
              {isLoading && <LoadingIndicator />}
              {displayProducts.length > 0 && (
                <ProductList
                  products={displayProducts}
                  authenticated={authenticated}
                  updateWishlist={updateWishlist}
                />
              )}


              {!isLoading && !displayProducts.length === 0 && (
                <NotFound message='No products found.' />
              )}
            </div>
              <div className="homepage-products">
                <a href="/shop" className="homepage-butt">view more</a>
              </div>
          </div>

          <div>

          </div>



          {/*NEW SECTION*/}
          <div className="bottom-section">
            <div className="row">
              <div className="col-lg-12 col-md-12 bestseller-section-one">
                <div className="row no-gutters">
                  <div className="col-lg-8 col-md-8 bestseller-text-section">
                      <p className="bestseller-text">aso-oke extravaganza</p>
                      <p className="bestseller-paragraph">shop different custom pieces with our colourful collection of Aso-Oke Fabrics</p>
                      <div className="bottom-button">
                        <a href="/shop/brand/suit" className="bottom-button">
                          see more
                          {/*<img width="24" height="24" src="https://img.icons8.com/material-rounded/24/forward.png" alt="forward"/>*/}
                        </a>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <img src={agadaImage} height="100%" width="100%" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*END OF NEW SECTION*/}
        
        </div>{/*END OF THE OVERALL DIV */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.storeProducts,
    isLoading: state.product.isLoading,
    advancedFilters: state.product.advancedFilters,
    authenticated: state.authentication.authenticated
  };
};

export default connect(mapStateToProps, actions)(Homepage);