/**
 *
 * ProductList
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';

import AddToWishList from '../AddToWishList';

const ProductList = props => {
  const { products, updateWishlist, authenticated } = props;

  return (


  <div style={{height: "100%"}}>  
  {products.map((product, index) => (
    <div key={index} className="cards">
      <div className="card-content" >
        <div className="top-bar">
          <span className="float-right lnr lnr-heart">
            <AddToWishList
              id={product._id}
              liked={product?.isLiked ?? false}
              enabled={authenticated}
              updateWishlist={updateWishlist}
              authenticated={authenticated}
            />
          </span>
        </div>
        <Link
          to={`/product/${product.slug}`}
          className='d-flex flex-column h-100'
        >
          <div className="img product-list-img">
            <img src={`${
              product.img
              ? product.img
              : '/images/placeholder-image.png'
              }`}
            />
          </div>
        </Link>
      </div>
      <Link
        to={`/product/${product.slug}`}
        className='d-flex flex-column h-100'
      >
      <div className="card-description">
        <div className="title">
          <span style={{textTransform: "capitalize"}}>{product.name}</span><br />
          ${product.price}
        </div>
      </div>
      {/*<div className="card-description">
        <span className="price-text">
          ${product.price}
        </span>
      </div>*/}
      {/*<div className="span product-desc">
        {product.description.length > 90 ? 
          `${product.description.substring(0, 70) + "..."}` : product.description}
      </div>*/}
      {/*<div className="card-footer">
        
        {product.brand && Object.keys(product.brand).length > 0 && (
          <div className="span">
            {product.brand.name}
          </div>
        )}
        {product.totalReviews > 0 && (
        <div className="span float-right">
            <p className='mb-0'>
              <span className='fs-16 fw-normal mr-1'>
                {parseFloat(product?.averageRating).toFixed(1)}
              </span>
              <span
                className={`fa fa-star ${
                  product.totalReviews !== 0 ? 'checked' : ''
                }`}
                style={{ color: '#ffb302' }}
              ></span>
            </p>  
        </div>
        )}
      </div>*/}
      </Link>
    </div>
    ))}
  </div>








  );
};

export default ProductList;