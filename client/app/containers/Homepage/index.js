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

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay'

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';





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



  render() {

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


        <div className="" style={{height: "100px"}}></div>

        {/*SLIDER*/}


        {/*TOP SECTION*/}
        

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
                      <a href="/shop/brand/suit" className="homepage-button">shop now</a>
                    </div>
                  </div>
                  <div className="col image-right">
                    <img src={agadaImage} height="50%" alt="image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 bestseller-section-one">
                <div className="row no-gutters">
                  <div className="col d-flex align-items-center bestseller-text-section">
                    <div className="d-flex flex-column justify-content-center">
                      <p className="bestseller-text">kaftan</p>
                      <a href="/shop/brand/suit" className="homepage-button">shop now</a>
                    </div>
                  </div>
                  <div className="col">
                    <img src={agadaImage} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*END OF NEW SECTION*/}


          {/*NEW SECTION*/}
          <div className="bottom-section">
            <div className="row">
              <div className="col-lg-12 col-md-12 bestseller-section-one">
                <div className="row no-gutters">
                  <div className="col-lg-8 col-md-8 bestseller-text-section">
                    <div className="d-flex flex-column justify-content-center">
                      <p className="bestseller-text">aso-oke extravaganza</p>
                      <p className="bestseller-paragraph">shop different custom pieces with our colourful collectionof Aso-Oke Fabrics</p>
                      <a href="/shop/brand/suit" className="homepage-button">see more</a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <img src={agadaImage} height="300px" alt="image" />
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
    advancedFilters: state.product.advancedFilters,
    products: state.product.storeProducts
  };
};

export default connect(mapStateToProps, actions)(Homepage);
