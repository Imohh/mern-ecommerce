/**
 *
 * FAQ
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

class Faq extends React.PureComponent {
  render() {
    return (
      <>
      
        {/*<section className="faq-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                left
              </div>

              <div className="col-lg-4">
                right
              </div>
            </div>
          </div>
        </section>*/}

        <div class="faq-top">
          <Row>
            <Col
              xs={{ size: 12, order: 2 }}
              md={{ size: '8', order: 1 }}
              className='p-0'
            >
              <Accordion className="faq-accordion">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accorditmebtn">
                      What is Eminence By GTX? <span><i className="fa fa-plus"></i></span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>Eminence By GTX is a product designed by GTX. Classic describes style perfectly 
                    and Eminence By GTX is for timeless looks, beautiful and simple cuts in clothing. 
                    It is a luxurious and grand style you should own. Eminence is never pricey, affordable is a comfort.</p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accorditmebtn">
                      How many items/styles do you sell? <span><i className="fa fa-plus"></i></span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We sell a wide variety of items/styles geared towards creating an 
                      excellent and gorgeous look for our customers. Talk to us via email 
                      or visit our online store/ physical store to see the amazing selection on offer.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accorditmebtn">
                      How will you measure me and know what fits me best? <span><i className="fa fa-plus"></i></span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      We have provided size charts and fitting guides that 
                      will give us the accurate size of your body. You can 
                      easily submit your size without hassles
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accorditmebtn">
                      what if I'm unable to reach out online? <span><i className="fa fa-plus"></i></span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      If you are unable to contact us through our online support, 
                      Kindly reach out to us via email. Our response is speedy and supportive.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton className="accorditmebtn">
                      How long is the delivery time? <span><i className="fa fa-plus"></i></span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      With our current output time, we estimate delivery within 
                      3-5 working days from the time you place your order to the time it ships.
                    </p>

                    <p>
                      The volume of orders can also influence the delivery time 
                      but it can never affect exceptional delivery when needed.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </Col>

            <Col
              xs={{ size: 12, order: 1 }}
              md={{ size: '4', order: 2 }}
              className='login-right'
            >     
              <div className="bottom-faq">
                <h2>interact with us</h2>
                <p>you can leave a message with us and well be with you.</p>

                <a href="/contact">
                  <button type="text" className="faq-btn" name="">Contact Us</button>
                </a>
              </div>
            </Col>
          </Row>

</div>



      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Faq);
