/**
 *
 * Footer
 *
 */

import React, {useState} from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Newsletter from '../../../containers/Newsletter';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';



const Footer = () => {
  const [show, setShow] = useState(false)

  const infoLinks = [
    { id: 0, name: 'Our Story', to: '/about' },
    { id: 0, name: 'FAQs', to: '/faq' },
    { id: 1, name: 'Customer Reviews', to: '/payment' },
  ];

  const aboutCompany = [
    { id: 0, name: 'About Eminence', to: '/about' },
    { id: 1, name: 'Legal', to: '/legal' },
    { id: 2, name: 'Shipping', to: '/shipping' }
  ];

  const help = [
    { id: 0, name: 'Contact Us', to: '/contact' },
    { id: 1, name: 'Returns & Exchanges', to: '/return' },
    { id: 1, name: 'Payment Options', to: '/payment' },
    { id: 2, name: 'Shipping', to: '/shipping' },
    { id: 2, name: 'Maintenance and Repairs', to: '/maintenance-repair' },
    { id: 1, name: 'Legal', to: '/legal' },
  ];

  const showSocial = () => {
    setShow(true)
  }

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to='/dashboard'>Account Details</Link>
      </li>
      <li className='footer-link'>
        <Link to='/dashboard/orders'>Orders</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  const aboutFooterLinks = aboutCompany.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  const helpLinks = help.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className='footer'>
      {/*<Container className="footer-conainer" style={{background: "red"}}>*/}
      <div className="footer-container">
        <div className='footer-content'>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>proudly african</h3>
            </div>
            <div className='block-content'>
              <p>Eminence by GTX is a leader in the field of Trendy, customized African and international Attires</p>
            </div>
            <div style={{marginTop: "10%"}}>
              <ul className="footer-horizontal-list">
                <li>
                  <a href="https://instagram.com/eminencebygtx" target="_blank">
                    <img src="https://img.icons8.com/material-outlined/24/null/instagram-new--v1.png"/>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/eminence" target="_blank">
                    <img src="https://img.icons8.com/windows/24/null/facebook-f--v1.png"/>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/eminence" target="_blank">
                    <img width="24" height="24" src="https://img.icons8.com/color/24/gmail-new.png" alt="gmail-new"/>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+447759962526" target="_blank">
                    <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/whatsapp--v1.png" alt="whatsapp--v1"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>information</h3>
            </div>
            <div className='block-content'>
              <ul>{aboutFooterLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>help</h3>
            </div>
            <div className='block-content'>
              <ul>{helpLinks}</ul>
            </div>
          </div>
          {/*<div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Newsletter</h3>
              <p>Sign Up for Our Newsletter</p>
              <Newsletter />
              <button onClick={showSocial}>follow us</button>
              <div className="accepted-cards">
                <div className="accepted-column">
                  <img width="50" height="50" src="https://img.icons8.com/color/50/visa.png" alt="visa"/>
                </div>
                <div className="accepted-column">
                  <img width="50" height="50" src="https://img.icons8.com/color/50/mastercard.png" alt="mastercard"/>
                </div>
                <div className="accepted-column">
                  <img width="50" height="50" src="https://img.icons8.com/fluency/50/amex.png" alt="amex"/>
                </div>
              </div>
            </div>
          </div>*/}
        </div>

        {/*{show && 
          <div className="social-media">
            <p>Follow Us</p>
    
            <ul className='footer-social-item'>
              <li>
                <a href='/#facebook' rel='noreferrer noopener' target='_blank'>
                  <img src="https://img.icons8.com/windows/32/null/facebook-f--v1.png"/>
                </a>
              </li>
              <li>
                <a href='https://instagram.com/eminencebygtx' rel='noreferrer noopener' target='_blank'>
                  <img src="https://img.icons8.com/material-outlined/32/null/instagram-new--v1.png"/>
                </a>
              </li>
              <li>
                <a href='/#twitter' rel='noreferrer noopener' target='_blank'>
                  <img src="https://img.icons8.com/ios-filled/32/null/twitter.png"/>
                </a>
              </li>
            </ul>
          </div>
        }*/}




        <div className='footer-copyright'>
          <img src="/images/logo.JPG" style={{width: "10%"}} alt="logo" />
          <div className="footer-copyright-text">
            <p>© Copyright 2023. All rights reserved - <a href="https://instagram.com/oprime.ng" target="_blank">Oprime Tech</a></p>
          </div>
        </div>



        
      </div>
      {/*</Container>*/}

      <div className="mobile-footer">
            <Accordion>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton className="accorditmebtn">
                          <img src="https://img.icons8.com/ios/30/null/services--v1.png"/>Information
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <ul>{aboutFooterLinks}</ul>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton className="accorditmebtn">
                          <img src="https://img.icons8.com/ios/30/null/company--v1.png"/>Help
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <ul>{helpLinks}</ul>
                  </AccordionItemPanel>
              </AccordionItem>
              {/*<AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton className="accorditmebtn">
                          <img src="https://img.icons8.com/material-outlined/30/null/email-open.png"/>Newsletter
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Newsletter />
                  </AccordionItemPanel>
              </AccordionItem>*/}
            </Accordion>
            <div className="mobile-footer-title">
              <div className="social-media">
        
                <ul className='footer-social-item'>
                  <li>
                    <a href='/#facebook' rel='noreferrer noopener' target='_blank'>
                      <img src="https://img.icons8.com/windows/32/null/facebook-f--v1.png"/>
                    </a>
                  </li>
                  <li>
                    <a href='/#instagram' rel='noreferrer noopener' target='_blank'>
                      <img src="https://img.icons8.com/material-outlined/32/null/instagram-new--v1.png"/>
                    </a>
                  </li>
                  <li>
                    <a href='/#twitter' rel='noreferrer noopener' target='_blank'>
                      <img src="https://img.icons8.com/ios-filled/32/null/twitter.png"/>
                    </a>
                  </li>
                </ul>
              </div>
              <img src="/images/logo.JPG" style={{width: "20%", marginBottom: "5%"}} alt="logo" />
              <div className="footer-copyright-text">
                <p>© Copyright 2023. All rights reserved - <a href="https://instagram.com/oprime.ng" target="_blank">Oprime Tech</a></p>
              </div>
                <div className="accepted-cards">
                  <div className="accepted-column">
                    <img width="40" height="40" src="https://img.icons8.com/color/40/visa.png" alt="visa"/>
                  </div>
                  <div className="accepted-column">
                    <img width="40" height="40" src="https://img.icons8.com/color/40/mastercard.png" alt="mastercard"/>
                  </div>
                  <div className="accepted-column">
                    <img width="40" height="40" src="https://img.icons8.com/fluency/40/amex.png" alt="amex"/>
                  </div>
                </div>
            </div>
        </div>


        


    </footer>
  );
};

export default Footer;