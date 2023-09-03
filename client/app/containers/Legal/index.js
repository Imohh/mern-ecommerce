/**
 *
 * LEGAL
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

class Legal extends React.PureComponent {
  render() {
    return (
      <>
      
        <div style={{marginTop: "100px"}}>
          <div className="legal-section">
            <div>
              <h2>privacy policy</h2>
              <p>The purpose of this Global Privacy Policy (the "Policy") is to describe how Louis Vuitton Malletier SAS, 
                a French company with registered office at 2 rue du Pont Neuf, 75001 Paris, France and/or its affiliates (“LV"), 
                each in their quality of controller, process personal information about its clients and prospects in order to 
                provide you with the best possible service.
              </p>

              <p>You can get the name and address of the entity acting as data controller in your jurisdiction, here.</p>

              <p>Louis Vuitton Malletier and/or Your responsible local LV entity, as described in this Policy (hereinafter: "We", 
                "Our", or "Us") collects, stores, processes, uses and discloses personal information about you in connection with 
                your use of LV web sites, LV apps, your use of our connected products (if and when available), or when you visit 
                our stores or visit our social media pages, in your jurisdiction. 
              </p>
            </div>
            <div className="legal-content">
              <p className="legal-heading">what kind of information do we collect?</p>
              <p>For the purposes described in this Policy, LV may collect the following categories of personal information:</p>
                <ul>
                  <li>a) Identification and Contact information (such as name, address, phone number or e-mail address), when you are willing to provide them for instance to sign up for an online account or fill out a customer information card in store, to participate in an event, to make a purchase, , or ID information necessary when you request a VAT-refund or a “click and collect” service in store .</li>

                  <li>b) Payment information: for instance credit card details, bank account numbers, paypal account details or other payment details which you must provide to receive products or services you have ordered from us</li>

                  <li>c) Demographic information like your gender and birthday.</li>

                  <li>d) Your image when you visit our stores (as CCTVS are in place), or Your voice when you call LV Clients Services (since your call may be recorded)</li>

                  <li>e) Preferences and interests which you choose to disclose in the course of your privileged contacts or encounters with our client advisors (which may include your preferences about our collections or other luxury brands, your size, your lifestyle, or basic information on your family circle)</li>

                  <li>f) information, which may include health information, related to possible adverse effect caused by our cosmetic products</li>

                  <li>g) Information you submit or post in a public space, on our social media pages or our websites, for example for a product review.</li>

                  <li>h) Information about your purchases online or in stores. This could include the products you purchased and their prices.</li>

                  <li>i) If you use our web sites, we may collect information about the browser you are using, and your browsing behaviour.</li>

                  <li>j) If you use our mobile app, we may collect your GPS location, subject to your consent when required. We might also look how often you use the app and where you downloaded it. We may collect information about the browser you are using, and your browsing behaviour.</li>

                  <li>k) If you use our connected products, we may collect information regarding your use of such products (such as which features on our product you use the most, or battery level information), as well as geolocation information if necessary to provide you the service you requested;</li>

                  <li>l) We may also collect information posted on third party websites or social media platforms about LV products and services, when necessary for the purposes defined hereunder. </li>
                </ul>

                <p>Your personal information is collected either directly from you (e.g., if you create an account on one of our sites/apps or make a purchase or otherwise interact with our client advisors in stores or with our LV Client Services), or from you passively (e.g., when using tracking tools like browser cookies), or from third parties (e.g. through social media platforms).</p>

                <p>If you choose not to submit any personal information when requested to perform a contract or when required by law, you will not be able to receive the product or service you ordered or otherwise register on our web sites, apps or other media.  </p>

            </div>
          </div>
        </div>



      </>
    );
  }
}


export default Legal;
