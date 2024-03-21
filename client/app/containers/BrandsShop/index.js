/**
 *
 * BrandsShop
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import ProductList from '../../components/Store/ProductList';
import NotFound from '../../components/Common/NotFound';
import LoadingIndicator from '../../components/Common/LoadingIndicator';

import agbada from './images/agbada.png'
import kaftan from './images/kaftan.png'
import eshiki from './images/eshiki.png'
import euit from './images/suit.png'
import senator from './images/senator.png'

class BrandsShop extends React.PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.fetchBrandProducts(slug);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      const slug = this.props.match.params.slug;
      this.props.fetchBrandProducts(slug);
    }
  }

  render() {
    const { products, isLoading, authenticated, updateWishlist } = this.props;
    const slug = this.props.match.params.slug;

    function getBackgroundImage(slug) {
      switch (slug) {
        case 'agbada':
          return agbada;
        case 'kaftan':
          return kaftan;
        case 'eshiki':
          return eshiki;
        case 'senator':
          return senator;
        case 'suit':
          return suit;
        default:
          return suit;
      }
    }

    return (
      <div className='brands-shop'>
        <div className="brands-hero" 
          style={{backgroundImage: `url(${getBackgroundImage(slug)})`,
          backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
          <p className="brands-title">{slug} by eminence</p>
          <p className="brands-paragraph">Featuring African <span className="slug-up">{slug}</span> Styles for both sexes, We combine both modern and trendy looks coupled with <span className="brands-color">simple</span> And <span className="brands-color">Intricate</span> Embroidery according to your taste.</p>
          <p className="brands-last-paragraph">shop from our carefully curated agbada styles below.</p>
       </div>
        {isLoading ? (
          <LoadingIndicator />
        ) : products.length > 0 ? (
          <ProductList
            products={products}
            authenticated={authenticated}
            updateWishlist={updateWishlist}
          />
        ) : (
          <NotFound message='No products found.' />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.storeProducts,
    isLoading: state.product.isLoading,
    authenticated: state.authentication.authenticated
  };
};

export default connect(mapStateToProps, actions)(BrandsShop);
