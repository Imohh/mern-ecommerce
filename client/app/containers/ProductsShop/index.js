/**
 *
 * ProductsShop
 *
 */

import React from 'react';

import { connect } from 'react-redux';

import actions from '../../actions';

import ProductList from '../../components/Store/ProductList';
import NotFound from '../../components/Common/NotFound';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import Pagination from '../../components/Common/Pagination';

class ProductsShop extends React.PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.filterProducts(slug);
  }

  render() {
    const { products, isLoading, authenticated, updateWishlist, advancedFilters, filterProducts } = this.props;
    const { totalPages } = advancedFilters;
    const displayPagination = totalPages > 1;
    
    const displayProducts = products && products.length > 0;

    return (
      <div className="" style={{height: "93%"}}>
        {isLoading && <LoadingIndicator />}
        {displayProducts && (
          <ProductList
            products={products}
            authenticated={authenticated}
            updateWishlist={updateWishlist}
          />
        )}
        {displayPagination && (
          <div className='d-flex justify-content-center text-center'>
            <Pagination
              totalPages={totalPages}
              onPagination={filterProducts}
            />
          </div>
        )}
        {!isLoading && !displayProducts && (
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
    advancedFilters: state.product.advancedFilters,
    authenticated: state.authentication.authenticated
  };
};

export default connect(mapStateToProps, actions)(ProductsShop);
