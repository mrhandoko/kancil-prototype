import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../Header';
import Swiper2 from './Swiper2';
import HomeContent3 from './HomeContent3';
import Footer from '../Footer';
import { setPartnership } from '../../actions';

class UberHome3 extends React.Component {
  componentDidMount() {
    this.props.setPartnership(2)
  }

  render () {
    return (
      <div>
        <Header />
        <Swiper2 />
        <HomeContent3 />
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPartnership }, dispatch)
)

export default connect(null, mapDispatchToProps)(UberHome3)
