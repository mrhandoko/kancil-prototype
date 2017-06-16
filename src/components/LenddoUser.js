import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LenddoUser extends Component {
  render () {
    return (
      <div>
        <input type="text" placeholder="Fullname" onChange={event => localStorage.setItem('lenddoUser', event.target.value)} />
        <Link className="button primary" to="/lenddo">Verify</Link>
      </div>
    );
  }
}

export default LenddoUser;
