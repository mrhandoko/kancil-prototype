/* global Swiper*/
import React from 'react';

class SwiperComponent extends React.Component {
  componentDidMount() {
    new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoHeight: true,
    });
  }
  render() {
    return (
      <div>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <h1>Kancil is a lending company<small>Something else here</small></h1>
            </div>
            <div className="swiper-slide">Slide 2</div>
            <div className="swiper-slide">Slide 3</div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    );
  }
}

export default SwiperComponent;
