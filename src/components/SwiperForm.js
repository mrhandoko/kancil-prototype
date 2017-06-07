/* global Swiper */
import React from 'react';

import SwiperForm1 from './SwiperFormComponents/SwiperForm1';
import SwiperForm2 from './SwiperFormComponents/SwiperForm2';
import SwiperForm3 from './SwiperFormComponents/SwiperForm3';
import SwiperForm4 from './SwiperFormComponents/SwiperForm4';
import SwiperForm5 from './SwiperFormComponents/SwiperForm5';

class SwiperComponent extends React.Component {
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
              setGender={this.props.setGender}
              setBirthPlace={this.props.setBirthPlace}
              validBirthplace={this.props.validBirthplace}
              datePickerBirthdate={this.props.datePickerBirthdate}
              setBirthday={this.props.setBirthday}
              validBirthdate={this.props.validBirthdate}
              setLastEducation={this.props.setLastEducation}
              validLastEducation={this.props.validLastEducation}
            />
            <SwiperForm3
              setAddress={this.props.setAddress}
              validAddress={this.props.validAddress}
              setKelurahan={this.props.setKelurahan}
              validKelurahan={this.props.validKelurahan}
              setKecamatan={this.props.setKecamatan}
              validKecamatan={this.props.validKecamatan}
              setCity={this.props.setCity}
              validCity={this.props.validCity}
              setProvince={this.props.setProvince}
              validProvince={this.props.validProvince}
              setPostcode={this.props.setPostcode}
              validPostcode={this.props.validPostcode}
              uploadProofAddressImage={this.props.uploadProofAddressImage}
            />
            <SwiperForm2
              setMarriedStatus={this.props.setMarriedStatus}
              validMarriedStatus={this.props.validMarriedStatus}
              setSpouseName={this.props.setSpouseName}
              validSpouseName={this.props.validSpouseName}
              setChildren={this.props.setChildren}
              validChildren={this.props.validChildren}
            />
            <SwiperForm5
              earnings={this.props.earnings}
              setEarnings={this.props.setEarnings}
              datePickerStartJob={this.props.datePickerStartJob}
              setStartDateJob={this.props.setStartDateJob}
              validStartDateJob={this.props.validStartDateJob}
              uploadProofIncome1={this.props.uploadProofIncome1}
              uploadProofIncome2={this.props.uploadProofIncome2}
              uploadProofIncome3={this.props.uploadProofIncome3}
            />
            <SwiperForm4
              setNIK={this.props.setNIK}
              validNIK={this.props.validNIK}
              uploadKTPImage={this.props.uploadKTPImage}
              uploadKTPSelfieImage={this.props.uploadKTPSelfieImage}
              uploadFamilyCardImage={this.props.uploadFamilyCardImage}
              uploadProofIncome1={this.props.uploadProofIncome1}
              uploadProofIncome2={this.props.uploadProofIncome2}
              uploadProofIncome3={this.props.uploadProofIncome3}

              disableSubmitButton={this.props.disableSubmitButton}
              clickLoanApplication={this.props.clickLoanApplication}
              isChecked={this.props.isChecked}
              validFinanceProductID={this.props.validFinanceProductID}
            />
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"><button className="primary">Next</button></div>
          <div className="swiper-button-prev"><button className="primary">Prev</button></div>
        </div>
      </div>
    );
  }
}

export default SwiperComponent;
