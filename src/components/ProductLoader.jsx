import React from 'react';
import pictureSVG from '../assets/icons/picture.svg';
import lineSVG from '../assets/icons/line.svg';

const ProductLoader = (props) => (
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '10em 5em'}}>
    {
      [...Array(5)].map((e, i) => (
        <div key={i} style={{display: 'flex', alignItems: 'center', flexDirection: 'column', flexBasis: '30%'}}>
          <img src={pictureSVG} style={{width: '50%'}} alt="loader"/>
          <img src={lineSVG} style={{width: '50%'}} alt="loader"/>
        </div>
      ))
    }
  </div>
);

export default ProductLoader;
