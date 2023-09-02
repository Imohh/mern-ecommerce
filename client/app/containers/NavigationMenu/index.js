/**
 *
 * NavigationMenu
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container } from 'reactstrap';

import actions from '../../actions';

import Button from '../../components/Common/Button';
import { CloseIcon } from '../../components/Common/Icon';
import MiniBrand from '../../components/Store//MiniBrand';

class NavigationMenu extends React.PureComponent {
  render() {
    const { isMenuOpen, categories, toggleMenu, brands } = this.props;

    const handleCategoryClick = () => {
      this.props.toggleMenu();
    };

    return (
      <div className='navigation-menu'>
        <div className='menu-header'>
          {isMenuOpen && (
            <Button
              borderless
              variant='empty'
              ariaLabel='close the menu'
              icon={<CloseIcon />}
              onClick={toggleMenu}
            />
          )}
        </div>
        <div className='menu-body'>

          
            <p 
              onClick={handleCategoryClick} 
              className='menu-title'>
              <a href="/shop" style={{fontSize: "20px"}}>Shop</a>
            </p>
            <h3 className='menu-title'>Shop By Category</h3>
            <nav role='navigation'>
              <ul className='menu-list'>
                {categories.map((link, index) => (
                  <li key={index} className='menu-item'>
                    <NavLink
                      onClick={handleCategoryClick}
                      to={'/shop/category/' + link.slug}
                      activeClassName='active-link'
                      exact
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <h3 className='menu-title'>Shop By Brand</h3>
            <nav role='navigation'>
              <ul className='menu-list'>
              {brands.map((brand, index) => (
                <li key={index} className='menu-item'>
                  <NavLink
                    onClick={handleCategoryClick}
                    to={`/shop/brand/${brand.slug}`}
                    activeClassName='active-link'
                    exact
                  >
                    {brand.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isMenuOpen: state.navigation.isMenuOpen,
    categories: state.category.storeCategories,
    brands: state.brand.storeBrands
  };
};

export default connect(mapStateToProps, actions)(NavigationMenu);