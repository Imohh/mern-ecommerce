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
import collection from './collection.json'

class Homepage extends React.PureComponent {
  render() {
    return (
      <>
        hello world      
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
