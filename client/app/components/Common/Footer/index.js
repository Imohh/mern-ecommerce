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
    { id: 0, name: 'FAQs', to: '/faq' },
    { id: 1, name: 'Payment Options', to: '/payment' },
    { id: 2, name: 'Return & Exchanges', to: '/return' },
    { id: 3, name: 'Track Orders', to: '/track-orders' }
  ];

  const aboutCompany = [
    { id: 0, name: 'About Eminence', to: '/about' },
    { id: 1, name: 'Legal', to: '/legal' },
    { id: 2, name: 'Shipping', to: '/shipping' }
  ];

  const help = [
    { id: 0, name: 'Email Unsubscribe', to: '/unsubscribe' },
    { id: 1, name: 'Maintenance and Repairs', to: '/maintenance-repair' },
    { id: 2, name: 'Contact Us', to: '/contact' }
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
              <h3 className='text-uppercase'>services</h3>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>the company</h3>
            </div>
            <div className='block-content'>
              <ul>{aboutFooterLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>may we help you?</h3>
            </div>
            <div className='block-content'>
              <ul>{helpLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Newsletter</h3>
              <p>Sign Up for Our Newsletter</p>
              <Newsletter />
              <button onClick={showSocial}>follow us</button>
              <div className="accepted-cards">
                <div className="accepted-column">
                  <img width="50" height="50" src="https://img.icons8.com/glyph-neue/50/visa.png" alt="visa"/>
                </div>
                <div className="accepted-column">
                  <img width="50" height="50" src="https://img.icons8.com/fluency-systems-filled/50/mastercard.png" alt="mastercard"/>
                </div>
                <div className="accepted-column">
                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/amex.png" alt="amex"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {show && 
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
        }




        <div className='footer-copyright'>
          {/*<span>© {new Date().getFullYear()} MERN Store</span>*/}
          <span>EMINENCE</span>
          <div className="footer-copyright-text">
            <p>© Copyright 2023. All rights reserved - Oprime Tech</p>
          </div>
        </div>



        
      </div>
      {/*</Container>*/}

      <div className="mobile-footer">
            <Accordion>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton className="accorditmebtn">
                          <img src="https://img.icons8.com/ios/30/null/services--v1.png"/>Services
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <ul>{footerLinks}</ul>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton className="accorditmebtn">
                          <img src="https://img.icons8.com/ios/30/null/company--v1.png"/>The Company
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <ul>{aboutFooterLinks}</ul>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton className="accorditmebtn">
                          <img src="https://img.icons8.com/ios/30/null/scales--v1.png"/>Legal
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                      <ul>{helpLinks}</ul>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton className="accorditmebtn">
                          <img src="https://img.icons8.com/material-outlined/30/null/email-open.png"/>Newsletter
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <Newsletter />
                  </AccordionItemPanel>
              </AccordionItem>
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
              <h3>EMINENCE</h3>
              <div className="footer-copyright-text">
                <p>© Copyright 2023. All rights reserved - Oprime Tech</p>
              </div>
                <div className="accepted-cards">
                  <div className="accepted-column">
                    <img width="50" height="50" src="https://img.icons8.com/glyph-neue/50/visa.png" alt="visa"/>
                  </div>
                  <div className="accepted-column">
                    <img width="50" height="50" src="https://img.icons8.com/fluency-systems-filled/50/mastercard.png" alt="mastercard"/>
                  </div>
                  <div className="accepted-column">
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/amex.png" alt="amex"/>
                  </div>
                </div>
            </div>
        </div>


        


    </footer>
  );
};

export default Footer;