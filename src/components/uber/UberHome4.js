import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../Header';
import Swiper2 from './Swiper2';
import HomeContent4 from './HomeContent4';
import Footer from '../Footer';
import setPartnership from '../../actions';

class UberHome4 extends React.Component {
  componentDidMount() {
    this.props.setPartnership(1)
  }

  render () {
    return (
      <div>
        <Header />
        <Swiper2 />
        <HomeContent4 />
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPartnership }, dispatch)
)

export default connect(null, mapDispatchToProps)(UberHome4)
