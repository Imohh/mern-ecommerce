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
    // <div className='product-list'>
    //   {products.map((product, index) => (
    //     <div key={index} className='mb-3 mb-md-0'>
    //       <div className='product-container'>
    //         <div className='item-box'>
    //           <div className='add-wishlist-box'>
    //             <AddToWishList
    //               id={product._id}
    //               liked={product?.isLiked ?? false}
    //               enabled={authenticated}
    //               updateWishlist={updateWishlist}
    //               authenticated={authenticated}
    //             />
    //           </div>

    //           <div className='item-link'>
    //             <Link
    //               to={`/product/${product.slug}`}
    //               className='d-flex flex-column h-100'
    //             >
    //               <div className='item-image-container'>
    //                 <div className='item-image-box'>
    //                   <img
    //                     className='item-image'
    //                     src={`${
    //                       product.img
    //                         ? product.img
    //                         : '/images/placeholder-image.png'
    //                     }`}
    //                   />
    //                 </div>
    //               </div>
    //               <div className='item-body'>
    //                 <div className='item-details p-3'>
    //                   <h1 className='item-name'>{product.name}</h1>
    //                   {product.brand && Object.keys(product.brand).length > 0 && (
    //                     <p className='by'>
    //                       By <span>{product.brand.name}</span>
    //                     </p>
    //                   )}
    //                   <p className='item-desc mb-0'>{product.description}</p>
    //                 </div>
    //               </div>
    //               <div className='d-flex flex-row justify-content-between align-items-center px-4 mb-2 item-footer'>
    //                 <p className='price mb-0'>${product.price}</p>
    //                 {product.totalReviews > 0 && (
    //                   <p className='mb-0'>
    //                     <span className='fs-16 fw-normal mr-1'>
    //                       {parseFloat(product?.averageRating).toFixed(1)}
    //                     </span>
    //                     <span
    //                       className={`fa fa-star ${
    //                         product.totalReviews !== 0 ? 'checked' : ''
    //                       }`}
    //                       style={{ color: '#ffb302' }}
    //                     ></span>
    //                   </p>
    //                 )}
    //               </div>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>




  <div className="container shop-container">
  {products.map((product, index) => (
    <div key={index} className="cards">
      
      <div className="card-content">
        <div className="top-bar">
          <span className="price-text">
            ${product.price}
          </span>
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
        <div className="img">
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
          {product.name}
        </div>
      </div>
      <div className="span product-desc">
        {product.description.length > 90 ? 
          `${product.description.substring(0, 70) + "..."}` : product.description}
      </div>
      <div className="card-footer">
        
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
      </div>
      </Link>
    </div>
    ))}
  </div>








  );
};

export default ProductList;
