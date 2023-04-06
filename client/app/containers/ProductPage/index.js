/**
 *
 * ProductPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';
import LoadingIndicator from '../../components/Common/LoadingIndicator';
import NotFound from '../../components/Common/NotFound';
import { BagIcon } from '../../components/Common/Icon';
import ProductReviews from '../../components/Store/ProductReviews';
import SocialShare from '../../components/Store/SocialShare';

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

    return (
      <div className='product-shop' style={{padding: "10px 150px", margin: "0 auto"}}>
        {isLoading ? (
          <LoadingIndicator />
        ) : Object.keys(product).length > 0 ? (
          <>
            <Row className='flex-row'>
              <Col xs='12' md='5' lg='5' className='mb-3 px-3 px-md-2'>
                <div className='position-relative'>
                  {/*<img
                    className='item-image'
                    src={`${
                      product.imageUrl
                        ? product.imageUrl
                        : '/images/placeholder-image.png'
                    }`}
                  />*/}

                  <div className="slider">
                    <input type="radio" name="slide_switch" id="id1" checked="checked"/>
                    <label for="id1">
                      <img src={`${
                      product.img
                        ? product.img
                        : '/images/placeholder-image.png'
                    }`} width="100"/>
                    </label>
                    <img src={`${
                      product.img
                        ? product.img
                        : '/images/placeholder-image.png'
                    }`}/>
                    
                    {/*<!--Lets show the second image by default on page load-->*/}
                    <input type="radio" name="slide_switch" id="id2"/>
                    <label for="id2">
                      <img src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg" width="100"/>
                    </label>
                    <img src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg"/>
                    
                    <input type="radio" name="slide_switch" id="id3"/>
                    <label for="id3">
                      <img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg" width="100"/>
                    </label>
                    <img src="http://thecodeplayer.com/uploads/media/00kih8g.jpg"/>
                    
                    <input type="radio" name="slide_switch" id="id4"/>
                    <label for="id4">
                      <img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg" width="100"/>
                    </label>
                    <img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg"/>
                    
                    <input type="radio" name="slide_switch" id="id5"/>
                    <label for="id5">
                      <img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg" width="100"/>
                    </label>
                    <img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg"/>
                  </div>


                  {product.inventory <= 0 && !shopFormErrors['quantity'] ? (
                    <p className='stock out-of-stock'>Out of stock</p>
                  ) : (
                    <p className='stock in-stock'>In stock</p>
                  )}
                </div>
              </Col>
              <Col xs='12' md='7' lg='7' className='mb-3 px-3 px-md-2'>
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
                      <p className='price'>${product.price}</p>
                      <div className='item-customize'>
                        <Input
                          type={'numeber'}
                          error={shopFormErrors['size']}
                          label={'Size'}
                          name={'size'}
                          decimals={false}
                          min={1}
                          max={product.sizer}
                          placeholder={'Product Size'}
                          disabled={
                            product.sizer <= 0 && !shopFormErrors['size']
                          }
                          value={productShopData.size}
                          onInputChange={(name, value) => {
                            productShopChange(name, value);
                          }}
                        />
                      </div>
                      <div className='item-actions'>
                        {itemInCart ? (
                          <Button
                            variant='primary'
                            disabled={
                              product.inventory <= 0 &&
                              !shopFormErrors['quantity']
                            }
                            text='Remove From Bag'
                            className='bag-btn'
                            icon={<BagIcon />}
                            onClick={() => handleRemoveFromCart(product)}
                          />
                        ) : (
                          <Button
                            variant='primary'
                            disabled={
                              product.quantity <= 0 && !shopFormErrors['quantity']
                            }
                            text='Add To Bag'
                            className='bag-btn'
                            icon={<BagIcon />}
                            onClick={() => handleAddToCart(product)}
                          />
                        )}
                      </div>

                      {/*accordion section*/}
                      <section id="accordion">
                        <div>
                          <input type="checkbox" id="check-1" />
                          <label for="check-1">Details<span>^</span></label>
                          <article>
                            <p>{product.description}</p>
                          </article>
                        </div>
                      </section>



                      
                    </div>
                    <div className='item-customize'>
                      <Input
                        type={'number'}
                        error={shopFormErrors['quantity']}
                        label={'Quantity'}
                        name={'quantity'}
                        decimals={false}
                        min={1}
                        max={product.inventory}
                        placeholder={'Product Quantity'}
                        disabled={
                          product.inventory <= 0 && !shopFormErrors['quantity']
                        }
                        value={productShopData.quantity}
                        onInputChange={(name, value) => {
                          productShopChange(name, value);
                        }}
                      />
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
