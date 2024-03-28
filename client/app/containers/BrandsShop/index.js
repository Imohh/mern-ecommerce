/**
 *
 * BrandsShop
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';
import { sortOptions } from '../../utils/store';

import ProductList from '../../components/Store/ProductList';
import NotFound from '../../components/Common/NotFound';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import SelectOption from '../../components/Common/SelectOption';

import agbada from './images/agbada.png'
import kaftan from './images/kaftan.png'
import eshiki from './images/eshiki.png'
import suit from './images/suit.png'
import senator from './images/senator.png'
import asooke from './images/asooke.jpg'

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
    const { products, isLoading, authenticated, updateWishlist, advancedFilters, filterProducts } = this.props;
    const { totalPages, currentPage, count, limit, order } = advancedFilters;
    const displayPagination = totalPages > 1;
    const totalProducts = products.length;
    const left = limit * (currentPage - 1) + 1;
    const right = totalProducts + left - 1;
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
        case 'aso-oke':
          return asooke;
        case 'suit':
          return suit;
        default:
          return suit;
      }
    }

    return (
      <div className='brands-shop'>
        <div className="brands-hero" 
          style={{position: "relative", backgroundImage: `url(${getBackgroundImage(slug)})`,
          backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
          <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity here (0.5 means 50% opaque black)
            }}
          ></div>
          <p className="brands-title">{slug} by eminence</p>
          <p className="brands-paragraph">Featuring African <span className="slug-up">{slug}</span> Styles for both sexes, We combine both modern and trendy looks coupled with <span className="brands-color">simple</span> And <span className="brands-color">Intricate</span> Embroidery according to your taste.</p>
          <p className="brands-last-paragraph">shop from our carefully curated agbada styles below.</p>
        </div>
        <div className="brands-filter">
          <div className="row">
            <div className="col-lg-3 col-md-3 brand-border-right d-flex justify-content-center align-items-center">
              <p>showing {totalProducts > 0
                  ? `${left}-${right} products of ${count} products`
                  : `${count} products`}</p>
            </div>
            <div className="col-lg-6 col-md-3">

            </div>
            <div className="col-lg-3 col-md-3 brand-border-left">
              {/*sort by*/}
              <SelectOption
                name={'sorting'}
                value={{ value: order, label: sortOptions[order].label }}
                options={sortOptions}
                handleSelectChange={(n, v) => {
                  filterProducts('sorting', n.value);
                }}
              />
            </div>
          </div>
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
    authenticated: state.authentication.authenticated,
    advancedFilters: state.product.advancedFilters,
  };
};

export default connect(mapStateToProps, actions)(BrandsShop);
