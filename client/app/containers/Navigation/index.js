/**
 *
 * Navigation
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Link, NavLink as ActiveLink, withRouter } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import actions from '../../actions';

import Button from '../../components/Common/Button';
import CartIcon from '../../components/Common/CartIcon';
import { BarsIcon } from '../../components/Common/Icon';
import MiniBrand from '../../components/Store//MiniBrand';
import logo from "../../images/logo.png"
import Menu from '../NavigationMenu';
import Cart from '../Cart';

class Navigation extends React.PureComponent {

  componentDidMount() {
    this.props.fetchStoreBrands();
    this.props.fetchStoreCategories();
  }

  toggleBrand() {
    this.props.fetchStoreBrands();
    this.props.toggleBrand();
  }

  toggleMenu() {
    this.props.fetchStoreCategories();
    this.props.toggleMenu();
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion, { query, isHighlighted }) {
    const BoldName = (suggestion, query) => {
      const matches = AutosuggestHighlightMatch(suggestion.name, query);
      const parts = AutosuggestHighlightParse(suggestion.name, matches);

      return (
        <div>
          {parts.map((part, index) => {
            const className = part.highlight
              ? 'react-autosuggest__suggestion-match'
              : null;
            return (
              <span className={className} key={index}>
                {part.text}
              </span>
            );
          })}
        </div>
      );
    };

    return (
      <Link to={`/product/${suggestion.slug}`}>
        <div className='d-flex'>
          <img
            className='item-image'
            src={`${
              suggestion.img
                ? suggestion.img
                : '/images/placeholder-image.png'
            }`}
          />
          <div>
            <Container>
              <Row>
                <Col>
                  <span className='name'>{BoldName(suggestion, query)}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className='price'>${suggestion.price}</span>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Link>
    );
  }

  render() {
    const {
      history,
      authenticated,
      user,
      cartItems,
      brands,
      categories,
      signOut,
      isMenuOpen,
      isCartOpen,
      isBrandOpen,
      toggleCart,
      toggleMenu,
      searchValue,
      suggestions,
      onSearch,
      onSuggestionsFetchRequested,
      onSuggestionsClearRequested
    } = this.props;

    const inputProps = {
      placeholder: 'Search Products',
      value: searchValue,
      onChange: (_, { newValue }) => {
        onSearch(newValue);
      }
    };

    return (

      <>

          <div className="navbar-top">
            <p>free shipping on orders more than $120 in the uk</p>
          </div>
          <div className="second-nav">
            <div className="row">
              <div className="col-lg-3 col-md-3 d-flex justify-content-end" style={{margin: "auto"}}>
                <a href="/">
                  <img src={logo} style={{ width: "200px", height: "auto" }} alt="logo" />
                </a>
              </div>
              <div className="col-lg-6 col-md-6 d-flex">
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  getSuggestionValue={this.getSuggestionValue}
                  renderSuggestion={this.renderSuggestion}
                  inputProps={inputProps}
                  onSuggestionSelected={(_, item) => {
                    history.push(`/product/${item.suggestion.slug}`);
                  }}
                  className="autosuggest-container"
                  renderInputComponent={inputProps => (
                    <input {...inputProps} className="autosuggest-input" 
                      style={{width: "450px", height: "10px", marginRight: "8px"}} />
                  )}
                />
                <button className="homepage-butt" onClick={() => onSearch(inputProps.value)}>search</button>
              </div>
              <div className="col-lg-3 col-md-3" style={{margin: "auto"}}>
                <ul className="horizontal-list">
                  <li><a href="https://instagram.com/eminencebygtx" target="_blank"><img src="https://img.icons8.com/material-outlined/24/null/instagram-new--v1.png"/></a></li>
                  <li><a href="https://facebook.com/eminence" target="_blank"><img src="https://img.icons8.com/windows/24/null/facebook-f--v1.png"/></a></li>
                  <li><a href="https://wa.me/+447759962526" target="_blank"><img width="24" height="24" src="https://img.icons8.com/material-sharp/24/whatsapp--v1.png" alt="whatsapp--v1"/></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="third-nav">
            <div className="row">
              <div className="col-lg-3" style={{margin: "auto"}}>
                <button className="nav-category">all categories</button>
              </div>
              <div className="col-lg-6 d-flex justify-content-center" style={{margin: "auto"}}>
                <ul className="horizontals-list d-flex justify-content-center">
                  <li><a href="/">home</a></li>
                  <li><a href="/shop">shop</a></li>
                  <li><a href="">custom</a></li>
                  <li><a href="">media</a></li>
                  <li><a href="/about">about</a></li>
                  <li><a href="/contact">contact</a></li>
                </ul>
              </div>
              <div className="col-lg-3 d-flex justify-content-end" style={{margin: "auto"}}>
                <ul className="horizontal-list">
                  <li>
                    <Nav navbar>
                      {authenticated ? (
                        <UncontrolledDropdown nav inNavbar>
                          <DropdownToggle nav>
                            <img width="50" height="50" src="https://img.icons8.com/small/50/user.png" alt="user"/>
                            {/*<span className="hide-display">{user.firstName ? user.firstName : 'Welcome'}</span>
                            <span className='fa fa-chevron-down dropdown-caret'></span>*/}
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              onClick={() => history.push('/dashboard')}
                            >
                              Dashboard
                            </DropdownItem>
                            <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      ) : (
                        <UncontrolledDropdown nav inNavbar>
                          <DropdownToggle nav>
                            <img width="50" height="50" src="https://img.icons8.com/small/50/user.png" alt="user"/>
                            {/*<span className="hide-display">Welcome!</span>
                            <span className='fa fa-chevron-down dropdown-caret hide-display'></span>*/}
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem onClick={() => history.push('/login')}>
                              Login
                            </DropdownItem>
                            <DropdownItem onClick={() => history.push('/register')}>
                              Sign Up
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      )}
                    </Nav>
                  </li>
                  <li><a href=""><img width="50" height="50" src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1"/></a></li>
                  <li>
                    <CartIcon
                      className=''
                      cartItems={cartItems}
                      onClick={toggleCart}
                    />
                    {/*<a href="" onClick={toggleCart}>
                      <img width="50" height="50" src="https://img.icons8.com/material-sharp/50/shopping-cart.png" alt="shopping-cart"/>
                    </a>*/}
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/*MOBILE MENU*/}
          <div className="mobile-menu">
            <div>
              <Button
                variant='empty'
                className='nav-btn'
                ariaLabel='open the menu'
                icon={<BarsIcon />}
                onClick={() => this.toggleMenu()}
              />
            </div>
            <div>
              <a href="/">
                <img src={logo} style={{ width: "200px", height: "auto" }} alt="logo" />
              </a>
            </div>
            <div className='header-links cart-icon-nav'>
              <CartIcon
                className=''
                cartItems={cartItems}
                onClick={toggleCart}
              />
            </div>
          </div>



          {/*<nav className="navbar navbar-expand-lg fixed-top">
            <Button
              variant='empty'
              className='nav-btn'
              ariaLabel='open the menu'
              icon={<BarsIcon />}
              onClick={() => this.toggleMenu()}
            />

            <div className="interior">
              <a className="btn" href="#open-modal">
                <img 
                  className="search-icon" 
                  width="24" 
                  height="24" 
                  src="https://img.icons8.com/ios-glyphs/24/search--v1.png" 
                  alt="search--v1"
                />
              </a>
            </div>

              <a className="navbar-brand mx-auto" href="/">eminence</a>
              

              

              <div className="form-inline my-4 my-lg-0">
                <Nav navbar>
                  {authenticated ? (
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav>
                        <img className="account-image" width="30" height="30" src="https://img.icons8.com/small/30/user.png" alt="user"/>
                        <span className="hide-display">{user.firstName ? user.firstName : 'Welcome'}</span>
                        <span className='fa fa-chevron-down dropdown-caret'></span>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          onClick={() => history.push('/dashboard')}
                        >
                          Dashboard
                        </DropdownItem>
                        <DropdownItem onClick={signOut}>Sign Out</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav>
                        <img className="account-image" width="24" height="24" src="https://img.icons8.com/small/24/user.png" alt="user"/>
                        <span className="hide-display">Welcome!</span>
                        <span className='fa fa-chevron-down dropdown-caret hide-display'></span>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={() => history.push('/login')}>
                          Login
                        </DropdownItem>
                        <DropdownItem onClick={() => history.push('/register')}>
                          Sign Up
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  )}
                </Nav>
                <div className='header-links cart-icon-nav'>
                  <CartIcon
                    className=''
                    cartItems={cartItems}
                    onClick={toggleCart}
                  />
                </div>
              </div>
          </nav>*/}

          
          <div id="open-modal" className="modal-window">
            <div>
              <a href="#" title="Close" className="modal-close">Close</a>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
                onSuggestionSelected={(_, item) => {
                  history.push(`/product/${item.suggestion.slug}`);
                }}
              />
            </div>
          </div>
          <div
            className={isCartOpen ? 'mini-cart-open' : 'hidden-mini-cart'}
            aria-hidden={`${isCartOpen ? false : true}`}
          >
            <div className='mini-cart'>
              <Cart />
            </div>
            <div
              className={
                isCartOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
              }
              onClick={toggleCart}
            />
          </div>

          
          <div
            className={isMenuOpen ? 'mini-menu-open' : 'hidden-mini-menu'}
            aria-hidden={`${isMenuOpen ? false : true}`}
          >
            <div className='mini-menu'>
              <Menu brands={brands} />
            </div>
            <div
              className={
                isMenuOpen ? 'drawer-backdrop dark-overflow' : 'drawer-backdrop'
              }
              onClick={toggleMenu}
            />
          </div>

      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMenuOpen: state.navigation.isMenuOpen,
    isCartOpen: state.navigation.isCartOpen,
    isBrandOpen: state.navigation.isBrandOpen,
    cartItems: state.cart.cartItems,
    brands: state.brand.storeBrands,
    categories: state.category.storeCategories,
    authenticated: state.authentication.authenticated,
    user: state.account.user,
    searchValue: state.navigation.searchValue,
    suggestions: state.navigation.searchSuggestions
  };
};

export default connect(mapStateToProps, actions)(withRouter(Navigation));