/* global Swiper */
import React from 'react';
import DatePicker from 'react-datepicker';

import SwiperForm1 from './SwiperFormComponents/SwiperForm1';
import SwiperForm2 from './SwiperFormComponents/SwiperForm2';
import SwiperForm3 from './SwiperFormComponents/SwiperForm3';
import SwiperForm4 from './SwiperFormComponents/SwiperForm4';

class SwiperComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    new Swiper('.swiper-container', {
      autoHeight: true,
      noSwiping: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      pagination: '.swiper-pagination',
      paginationType: 'progress'
    });
  }
  render() {
    return (
      <div>
        <div className="swiper-container swiper-no-swiping">
          <div className="swiper-wrapper">
            <SwiperForm1
              setFullname={this.props.setFullname}
              validFullname={this.props.validFullname}
              setPhone={this.props.setPhone}
              validPhone={this.props.validPhone}
              setNIK={this.props.setNIK}
              validNIK={this.props.validNIK}
              setGender={this.props.setGender}
              setBirthPlace={this.props.setBirthPlace}
              validBirthplace={this.props.validBirthplace}
            />
            <SwiperForm2
              setMarriedStatus={this.props.setMarriedStatus}
              validMarriedStatus={this.props.validMarriedStatus}
              setSpouseName={this.props.setSpouseName}
              validSpouseName={this.props.validSpouseName}
              setChildren={this.props.setChildren}
              validChildren={this.props.validChildren}
              setLastEducation={this.props.setLastEducation}
              validLastEducation={this.props.validLastEducation}
              validStartDateJob={this.props.validStartDateJob}
            />
            <SwiperForm3
              setAddress={this.props.setAddress}
              validAddress={this.props.validAddress}
              setKelurahan={this.props.setAddress}
              validKelurahan={this.props.validKelurahan}
              setKecamatan={this.props.setKecamatan}
              validKecamatan={this.props.validKecamatan}
              setCity={this.props.setCity}
              validCity={this.props.validCity}
              setProvince={this.props.setProvince}
              validProvince={this.props.validProvince}
              setPostcode={this.props.setPostcode}
              validPostcode={this.props.validPostcode}
            />
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"><button className="primary">Next</button></div>
          <div className="swiper-button-prev"><button className="primary">Prev</button></div>
        </div>
      </div>
    );
  };
}

export default SwiperComponent;
