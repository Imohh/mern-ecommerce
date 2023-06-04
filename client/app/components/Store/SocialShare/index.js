/**
 *
 * SocialShare
 *
 */

import React from 'react';

import {
  EmailShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookShareButton
} from 'react-share';

const SocialShare = props => {
  const { product } = props;

  const shareMsg = `I ♥ ${
    product.name
  } product on Mern Store!  Here's the link, ${
    window.location.protocol !== 'https' ? 'http' : 'https'
  }://${window.location.host}/product/${product.slug}`;

  return (
    <ul className='d-flex flex-row mx-0 mb-0 justify-content-center justify-content-md-start share-box'>
      <li>
        <FacebookShareButton url={`${shareMsg}`}>
          <img width="32" height="32" src="https://img.icons8.com/windows/32/null/facebook-f--v1.png"/>
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton url={`${shareMsg}`}>
          <img width="32" height="32" src="https://img.icons8.com/ios-filled/32/null/twitter.png"/>
        </TwitterShareButton>
      </li>
      <li>
        <EmailShareButton url={`${shareMsg}`}>
          <img width="32" height="32" src="https://img.icons8.com/metro/26/secured-letter.png" alt="secured-letter"/>
        </EmailShareButton>
      </li>
      <li>
        <WhatsappShareButton url={`${shareMsg}`}>
          <img width="32" height="32" src="https://img.icons8.com/windows/32/whatsapp--v1.png" alt="whatsapp--v1"/>
        </WhatsappShareButton>
      </li>
    </ul>
  );
};

export default SocialShare;
