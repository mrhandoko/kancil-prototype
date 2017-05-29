import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../Header';
import Swiper1 from './Swiper1';
import HomeContent2 from './HomeContent2';
import Footer from '../Footer';
import setPartnership from '../../actions';

class UberHome2 extends React.Component {
  componentDidMount() {
    this.props.setPartnership(4)
  }

  render () {
    return (
      <div>
        <Header />
        <Swiper1 />
        <HomeContent2 />
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setPartnership }, dispatch)
)

export default connect(null, mapDispatchToProps)(UberHome2)
