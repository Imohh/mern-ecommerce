/**
 *
 * Homepage
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';
import background from './assets/ron-lach.jpg'
import bottomImg from './assets/bottoms.header.jpg'
import accessoriesImg from './assets/accessorizz.jpg'
import { ArrowBackIcon } from '../../components/Common/Icon';

class Homepage extends React.PureComponent {
  render() {
    return (
      <>
      <div className='homepage'>
        <Row className='flex-row'>
          <Col xs='12' lg='6' className='order-lg-2 mb-3 px-3 px-md-2'>
            <div className='home-carousel'>
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} />
                ))}
              </CarouselSlider>
            </div>
          </Col>
          <Col xs='12' lg='3' className='order-lg-1 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/banners/banner-2.jpg' className='mb-3' />
              <img src='/images/banners/banner-5.jpg' />
            </div>
          </Col>
          <Col xs='12' lg='3' className='order-lg-3 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/banners/banner-2.jpg' className='mb-3' />
              <img src='/images/banners/banner-6.jpg' />
            </div>
          </Col>
        </Row>
      </div>



        <div className='brands-homepage'>
          <Row className='flex-col'>
            <Col xs='12' lg='12' className='order-lg-1 mb-3 px-3 px-md-2'>
                <h2>Our brands and partners</h2>
            </Col>
            <Col xs='12' lg='4' className='order-lg-1 mb-3 px-3 px-md-2'>              
              <img src='/images/banners/banner-6.jpg' />
            </Col>
            <Col xs='12' lg='4' className='order-lg-1 mb-3 px-3 px-md-2'> 
              <img src='/images/banners/banner-6.jpg' />
            </Col>
            <Col xs='12' lg='4' className='order-lg-1 mb-3 px-3 px-md-2'> 
              <img src='/images/banners/banner-6.jpg' />
            </Col>
          </Row>
        </div>

        <div className='categories'>
          <Row className='flex-row' >
            <Col xs='12' lg='12'>
                <h2>Kentyle categories</h2>  
                <p>T-shirts, pants, accessories , we've got it all</p> 
                <button>Shop now</button>     
            </Col>
            <Col lg = '12' className='categories-image categories-image1' style={{ backgroundImage: `url(${background})` }}>
                <p>TOP</p>
                <div className='content'>
                  <div class="content-overlay"></div>
                  <div class="content-details fadeIn-bottom">
                    <h3>T-shirt</h3>
                    <h3>Jacket</h3>
                    <h3>Vest</h3>
                    <ArrowBackIcon className='icon-go' width='50' height='30'/>
                  </div>
                </div>
            </Col> 
            <Col lg= '4' className='categories-image categories-image2'
            style={{backgroundImage: `url(${bottomImg})`}}>
              <p>BOTTOM</p>
                <div className='content'>
                  <div class="content-overlay"></div>
                  <div class="content-details fadeIn-bottom">
                    <h3>Jeans</h3>
                    <h3>Chinose</h3>
                    <h3>Cordurouy</h3>
                    <ArrowBackIcon className='icon-go' width='50' height='30'/>
                  </div>
                </div>
            </Col>
            <Col lg = '7' className='categories-image categories-image3'
            style={{backgroundImage: `url(${accessoriesImg})`}}>
                <p>Accessories</p>
                <div className='content'>
                  <div class="content-overlay"></div>
                  <div class="content-details fadeIn-bottom">
                    <h3>Sun glasses</h3>
                    <h3>Balaclavas</h3>
                    <h3>Caps & Hats</h3>
                    <h3>Rings</h3>
                    <ArrowBackIcon className='icon-go' width='50' height='30'/>
                  </div>
                </div>
            </Col>
          </Row>
        </div>


        <div className='brands-homepage'>
          <Row className='flex-row'>
            <Col xs='12' lg='12' className='order-lg-1 mb-3 px-3 px-md-2'> 
              <div className="high-fashion" style={{background: "#e7e7e7", margin: "0 auto", padding: "50px 20px", width: "20%", textAlign: "center"}}>
                <h2 style={{margin: "0 auto", textAlign: "center", fontWeight: "normal", paddingBottom: "20px"}}>Eminence high fashion</h2>
                <p tyle={{margin: "0 auto", textAlign: "center", fontWeight: "normal"}}>Discover More</p>
              </div>
            </Col>
          </Row>
        </div>
          </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
