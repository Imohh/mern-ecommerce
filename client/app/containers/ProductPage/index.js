/**
 *
 * ProductPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import NotFound from '../../components/Common/NotFound';
import { BagIcon } from '../../components/Common/Icon';
import ProductReviews from '../../components/Store/ProductReviews';
import SocialShare from '../../components/Store/SocialShare';


import Lightbox from 'react-image-lightbox'

class ProductPage extends React.PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.fetchStoreProduct(slug);
    this.props.fetchProductReviews(slug);
    document.body.classList.add('product-page');
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      const slug = this.props.match.params.slug;
      this.props.fetchStoreProduct(slug);
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('product-page');
  }


  render() {
    const {
      isLoading,
      product,
      productShopData,
      shopFormErrors,
      itemInCart,
      productShopChange,
      handleAddToCart,
      handleRemoveFromCart,
      addProductReview,
      reviewsSummary,
      reviews,
      reviewFormData,
      reviewChange,
      reviewFormErrors
    } = this.props;

    const images = [
      {
        original: `${product.img || '/images/placeholder-image.png'}`,
        thumbnail: `${product.img || '/images/placeholder-image.png'}`
      },
      {
        original: `${product.imgs || '/images/placeholder-image.png'}`,
        thumbnail: `${product.imgs || '/images/placeholder-image.png'}`
      },
      {
        original: "https://picsum.photos/id/10/300/150",
        thumbnail: "https://picsum.photos/id/10/300/150"
      },
      {
        original: "https://picsum.photos/id/100/300/150",
        thumbnail: "https://picsum.photos/id/100/300/150"
      },
      {
        original: "https://picsum.photos/id/101/300/150",
        thumbnail: "https://picsum.photos/id/101/300/150"
      }
    ];

    const pound = '\u00A3'


    return (
      <div className='product-shop' style={{margin: "0 auto"}}>
        {isLoading ? (
          <LoadingIndicator />
        ) : Object.keys(product).length > 0 ? (
          <>
            <Row className='flex-row'>
              <Col xs='12' md='5' lg='8' className='mb-3 px-md-2 px-0'>
                <div className='position-relative product-image-left'>


                  
                  <ImageGallery
                    items={images}
                    showBullets={false}
                    showIndex={false}
                    showThumbnails={true}
                    lazyLoad={false}
                    showPlayButton={false}
                    showNav={false}
                    showFullscreenButton={false}
                    thumbnailPosition={"left"}
                  />

                  {product.inventory <= 0 && !shopFormErrors['quantity'] ? (
                    <p className='stock out-of-stock'>Out of stock</p>
                  ) : (
                    <p className='stock in-stock'>In stock</p>
                  )}
                </div>
              </Col>
              <Col xs='12' md='7' lg='4' className='mb-3 px-md-2 px-0'>
                <div className='product-container'>
                  <div className='item-box'>
                    <div className='item-details'>
                      <h1 className='item-name one-line-ellipsis'>
                        {product.name}
                      </h1>
                      {/* <p className='sku'>{product.sku}</p>
                       <hr />*/}
                      {product.brand && (
                        <p className='by'>
                          see more from{' '}
                          <Link
                            to={`/shop/brand/${product.brand.slug}`}
                            className='default-link'
                          >
                            {product.brand.name}
                          </Link>
                        </p>
                      )}
                      <p className='price'>{pound}{product.price}</p>
                      <div className='item-customize product-select-section'>
                        <button
                          className={`size-option ${productShopData.size === "S" ? "active-select" : "size-select"}`}
                          onClick={() => productShopChange("size", "S")}
                        >
                          S
                        </button>
                        <button
                          className={`size-option ${productShopData.size === "M" ? "active-select" : "size-select"}`}
                          onClick={() => productShopChange("size", "M")}
                        >
                          M
                        </button>
                        <button
                          className={`size-option ${productShopData.size === "L" ? "active-select" : "size-select"}`}
                          onClick={() => productShopChange("size", "L")}
                        >
                          L
                        </button>
                        <button
                          className={`size-option ${productShopData.size === "XL" ? "active-select" : "size-select"}`}
                          onClick={() => productShopChange("size", "XL")}
                        >
                          XL
                        </button>
                      </div>
                      <div className='item-customize'>
                        <button
                          className="quantity-btn"
                          disabled={productShopData.quantity <= 1}
                          onClick={() => {
                            productShopChange('quantity', productShopData.quantity - 1);
                          }}
                        >
                          -
                        </button>
                        
                        <span className="quantity-value">{productShopData.quantity}</span>
                        

                        <button
                          className="quantity-btn"
                          disabled={product.inventory <= 0}
                          onClick={() => {
                            if (productShopData.quantity < product.inventory) {
                              productShopChange('quantity', productShopData.quantity + 1);
                            }
                          }}
                        >
                          +
                        </button>




                      </div>
                      <div className='item-actions' style={{marginBottom: "5%"}}>
                        {itemInCart ? (
                          <Button
                            disabled={
                              product.inventory <= 0 &&
                              !shopFormErrors['quantity']
                            }
                            text='Remove From Bag'
                            className='product-detail-btn'
                            style={{color: "#fff !important"}}
                            icon={<BagIcon />}
                            onClick={() => handleRemoveFromCart(product)}
                          />
                        ) : (
                          <Button
                            disabled={
                              product.quantity <= 0 && !shopFormErrors['quantity']
                            }
                            text='Add To Bag'
                            className='product-detail-btn'
                            icon={<BagIcon />}
                            onClick={() => {
                              if (!productShopData.size) {
                                alert("Please select a size."); // Display an error message
                                return; // Exit the function
                              }
                             handleAddToCart(product)
                           }}
                          />
                        )}
                        
                      </div>

                      {/*accordion section*/}




                          <div className="tabs" style={{ maxHeight: '250px', overflow: 'auto' }}>
                            <div className="tab">
                              <input type="checkbox" id="chck1" className="inputstyle"/>
                              <label className="tab-label" for="chck1">Details</label>
                              <div className="tab-content">
                                {product.description}
                              </div>
                            </div>
                            <div className="tab">
                              <input type="checkbox" id="chck2" className="inputstyle"/>
                              <label className="tab-label" for="chck2">Size & Fit</label>
                              <div className="tab-content">
                                <img src='/images/cloth.webp'/>
                              </div>
                            </div>
                            <div className="tab">
                              <input type="checkbox" id="chck3" className="inputstyle"/>
                              <label className="tab-label" for="chck3">Shipping & Returns</label>
                              <div className="tab-content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                              </div>
                            </div>
                          </div>




                      
                    </div>
                    
                    
                    <div className='my-4 item-share'>
                      <SocialShare product={product} />
                    </div>
                    
                  </div>
                </div>
              </Col>
            </Row>
            <ProductReviews
              reviewFormData={reviewFormData}
              reviewFormErrors={reviewFormErrors}
              reviews={reviews}
              reviewsSummary={reviewsSummary}
              reviewChange={reviewChange}
              addReview={addProductReview}
            />
          </>
        ) : (
          <NotFound message='No product found.' />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const itemInCart = state.cart.cartItems.find(
    item => item._id === state.product.storeProduct._id
  )
    ? true
    : false;

  return {
    product: state.product.storeProduct,
    productShopData: state.product.productShopData,
    shopFormErrors: state.product.shopFormErrors,
    isLoading: state.product.isLoading,
    reviews: state.review.productReviews,
    reviewsSummary: state.review.reviewsSummary,
    reviewFormData: state.review.reviewFormData,
    reviewFormErrors: state.review.reviewFormErrors,
    itemInCart
  };
};

export default connect(mapStateToProps, actions)(ProductPage);