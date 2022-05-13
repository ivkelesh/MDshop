import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="row justify-content-center m-4">Copyright © {year}</div>
  );
};

export default Footer;
