import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';
import Swiper1 from './Swiper1';
import HomeContent1 from './HomeContent1';
import Footer from '../Footer';
import { setPartnership } from '../../actions'

class UberHome1 extends React.Component {

  componentDidMount() {
    this.props.setPartnership(3)
  }

  render () {
    return (
      <div>
        <Header />
        <Swiper1 />
        <HomeContent1 toPhonePage/>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPartnership }, dispatch)
)

export default connect(null, mapDispatchToProps)(UberHome1)
