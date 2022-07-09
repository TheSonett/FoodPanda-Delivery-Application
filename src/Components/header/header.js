/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './header.css';

function Header() {
  return (
    <div className='max-width header'>
      <img src='https://cdn.looka.com/images/logos/looka_logo_black.svg' 
      alt='Failed to load the image!' 
      className='header-logo'
      />

      <div className='header-right'>
        <div className='header-location-search-container'>
          <div className='header-wrapper'>
            <div className='location-icon-name'>
              <i className='fi fi-rr-marker absolute-center location-icon'></i>
              <div>Kolkata</div>
            </div>
            <i className='fi fi-rr-caret-down absolute-center'></i>
          </div>
          <div className='location-search-separator'></div>
          <div className='header-searchBar'>
          <i className='fi fi-rr-caret-down absolute-center search-icon'></i>
            <input placeholder='Search for restaurant, cuisine or a dish' className='search-input'/>
          </div>
        </div>
        <div className='profile-wrapper'>
          <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
            alt='Failed to load!'
            className='header-profile-image'
          />
          <div className='header-username'>Joy</div>
          <i className='fi fi-rr-angle-small-down absolute-center profile-options-icon'></i>
        </div>
      </div>
    </div>
  )
}

export default Header