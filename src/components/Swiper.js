/* global Swiper */
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
            <div className="swiper-slide  kancil-slide" style={{ height: "70vh" }}>
              <h1 className="fnt-white hero-1">Cerdik kini,<br className="hidden-lg" /> cicil nanti</h1>
              <h2 className="fnt-white hero-2">Ingin nyicil smartphone impianmu tapi nggak punya kartu kredit?<br /> Jangan khawatir! Jadilah cerdik dengan menjadikan kami Kawan Cicil-mu!</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SwiperComponent;
