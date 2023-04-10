import React from 'react';

const Header =  () => (
  <div
    className="page-header page-header-xs"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(121, 0, 0)), url(${require('assets/img/sections/fractals.jpg').default})`,
      height: '350px',
    }}
  >
    <div className="filter" />
  </div>
);

export default Header;