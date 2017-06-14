import React, { Component } from 'react';

class LenddoPage extends Component {
  constructor() {
    // Place this in the constructor where it's run once.
    (function() {
      var la = document.createElement('script');
      la.type = 'text/javascript';
      la.async = true;
      la.src = 'https://authorize.partner-service.link/verify.js?v=' + Date.now();
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(la, s);
    })();
    // LenddoVerifyConfig was not available in the scope in which the button could read it
    // as a result the button couldn't be configured
    window.LenddoVerifyConfig = {
      scriptId: '59230c27f7a57939fa653526',
      application_id: 'testing',
      onSubmit: function(cb) {
        var errors = false;
        if (errors === false) {
          cb();
        }
      }
    };
    super();
  }
  render() {
    return (
      <div id="lenddo_verify"></div>
    );
  };
}

export default LenddoPage;
