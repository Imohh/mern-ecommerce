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
// import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';
// import CarouselSlider from '../../components/Common/CarouselSlider';
// import background from './assets/ron-lach.jpg'
// import bottomImg from './assets/bottoms.header.jpg'
// import accessoriesImg from './assets/accessorizz.jpg'
// import { ArrowBackIcon } from '../../components/Common/Icon';
// import collection from './collection.json'

class Homepage extends React.PureComponent {
  render() {
    return (
      <>
      {/*<div className='homepage'>
            <div className='home-carousel'>
              <CarouselSlider
                swipeable={true}
                showDots={false}
                infinite={true}
                autoPlay={true}
                slides={banners}
                responsive={responsiveOneItemCarousel}
                autoPlaySpeed = {5000}
              >
                {banners.map((item, index) => (
                  <div className='poster'>
                  <img key={index} src={item.imageUrl} />
                  <p>{item.content}</p>
                  </div>
                ))}
              </CarouselSlider>
            </div>
      </div>

           <div className='latest'>
            <h2>Latest Arrivals</h2>
            <button>See all</button>
            <ul className='cardars'>
              {
                collection.map((item, index) => (
                  <li key = {index} className='cardar'>
                      <img src= {item.imageUrl} />
                    <div className = 'cardar-info'>
                      <h3>{item.category}</h3>
                      <h1>{item.name}</h1>
                      <p> Price: ${item.price}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
           </div>
        
        <div className='categories'>
          <Row className='flex-row' >
            <Col xs='12' lg='12'>
                <h2>Shop by category</h2>  
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
        </div>*/}
          </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
