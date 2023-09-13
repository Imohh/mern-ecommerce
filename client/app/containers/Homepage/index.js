/**
 *
 * Homepage
 *
 */

import React, { useEffect } from 'react';

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


    return (
      <>

        {/*MODAL*/}
        <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header d-sm-none">
              <button type="button" className="btn btn-secondary align-self-end" onClick={this.handleShow}>Close</button>
            </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <img src={popupImage} alt="Popup Image" className="d-none d-md-block" />
                  </div>
                  <div className="col-md-6 text-right">
                    <button type="button" className="btn btn-secondary align-self-end d-none d-md-block float-right" onClick={this.handleShow}>Close</button>
                    <div className="d-flex flex-column justify-content-center" style={{height: "100%"}}>
                      <h1 className="text-center">Sign Up for Our Newsletter</h1>
                      <Newsletter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="" style={{height: "100px"}}></div>

        {/*SLIDER*/}
        <div className="">

          <AwesomeSlider animation="cubeAnimation" style={{height: "600px"}} >
            <div data-src={slider} style={{height: "600px"}} />
            <div data-src={slider1} style={{height: "600px"}} />
            <div data-src={slider} style={{height: "600px"}} />
          </AwesomeSlider>

        </div>

        <div style={{textAlign: "center", padding: "10% 2%"}}>
          <i style={{fontSize: "22px"}}>fashion is like eating, you shouldn't stick to the same menu...</i>
        </div>


        {/*TOP SECTION*/}
        <div className="" style={{height: "100%"}}>
          <div className="row">
            <div 
              className="col-md-4" 
              style={{
                padding: "100px", 
                backgroundImage: `url(${section1})`, 
                backgroundSize: "cover",
                backgroundPosition: "center", 
                textTransform: "uppercase"
              }}
            >
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  zIndex: 1
                }}
              ></div>
              <div className="text-center" style={{position: "relative", zIndex: 20}}>
                <p style={{color: "white", fontWeight: "900", fontSize: "20px"}}>agbada</p>
                <a href="/shop/brand/agbada" className="top-section-link">shop now</a>
              </div>
            </div>
            <div 
              className="col-md-4" 
              style={{
                padding: "100px", 
                backgroundImage: `url(${suit})`, 
                backgroundSize: "cover",
                backgroundPosition: "center",
                textTransform: "uppercase"
              }}
            >
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  zIndex: 1
                }}
              ></div>
              <div className="text-center" style={{position: "relative", zIndex: 20}}>
                <p style={{color: "white", fontWeight: "900", fontSize: "20px"}}>suit</p>
                <a href="/shop/brand/suit" className="top-section-link">shop now</a>
              </div>
            </div>
            <div 
              className="col-md-4" 
              style={{
                padding: "100px", 
                backgroundImage: `url(${native})`, 
                backgroundSize: "cover",
                backgroundPosition: "center", 
                textTransform: "uppercase"
              }}
            >
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  zIndex: 1
                }}
              ></div>
              <div className="text-center" style={{position: "relative", zIndex: 20}}>
                <p style={{color: "white", fontWeight: "900", fontSize: "20px"}}>native</p>
                <a href="/shop/brand/native" className="top-section-link">shop now</a>
              </div>
            </div>
          </div>
        </div>


        {/*SHOP SECTION*/}
        <div className="bg-red-500 py-40">
          <h1>hello world</h1>
        </div>




        {/*NEW SECTION*/}
        <div style={{height: "100%"}}>
          <div className="row">
            <div className="col-md-6"
              style={{
                height: "500px",
                paddingTop: "250px",
                paddingLeft: "50px", 
                backgroundImage: `url(${section2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  zIndex: 1
                }}
              ></div>
              <div  className="text-center" style={{position: "relative", zIndex: 20}}>
                <p className="classic-section-text" style={{textTransform: "uppercase", color: "white", fontWeight: "900", fontSize: "20px"}}>classic suits for classic men</p>
                <a href="/shop/brand/suit" className="homepage-button">discover now</a>
              </div>
            </div>
            <div className="col-md-6"
              style={{
                height: "500px",
                paddingTop: "250px",
                paddingLeft: "50px", 
                backgroundImage: `url(${agadaImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  zIndex: 1
                }}
              ></div>
              <div  className="text-center" style={{position: "relative", zIndex: 20}}>
                <p style={{textTransform: "uppercase", color: "white", fontWeight: "900", fontSize: "20px"}}>agbada attire</p>
                <a href="/shop/brand/agbada" className="homepage-button">discover now</a>
              </div>
            </div>
          </div>
        </div>
        
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
