import React, { Component } from 'react';

const id = '562f3909aa9612778a2b8d2e';
const secret = 'AAZog0WWSApnQUI1c1J544Fm2Aqjp+NMvKlqgx9V2DbvGTcYHpbNGlXxwSzcQHpJBTSSyCYlR4YqQMrHRQBHdw==';
// Import clients
const lenddo_clients = require('lenddo').clients;

// this is the client ID that you sent us initially.
const client_id = '{55f79f82aa9612620b9855df}';
const partner_script_id = '{59230c27f7a5793fa653526}';

// begin main script
const ScoreService = lenddo_clients.Score;
const client_instance = new ScoreService(id, secret);

class LenddoPage extends Component {
  componentWillMount() {
    var VerificationObject = require('lenddo').verification;
    // Get an instance of the verification object
    var user_verification = new VerificationObject();
    // Define probes to be verified (Everything is optional)
    user_verification.set.firstName('John')
                    .middleName('J')
                    .lastName('Doe')
                    .dateOfBirth('YYYY-MM-DD')
                    .employer('Lenddo')
                    .mobilePhone('555-124-56789')
                    .university('University Name')
                    .email('user@domain.com');
  }
  componentDidMount() {
    client_instance.CommitClientJob.post(client_id, partner_script_id, profile_ids, user_verification)
    .exec(function(err, data) {
    	if (err) {
            // This is only triggered during network connectivity issues
            throw err;
        }

        if (data.response.code >= 500) {
            // Something went wrong on Lenddo's side. If this continues, contact Lenddo.
            throw data.response.data;
        }

        if (data.response.code >= 400) {
            // This occurs when the request was incorrect
            throw data.response.data;
        }

        if (data.response.data.success) {
    		// Application was successfully submitted
        } else {
    		// Application submission failed.
    		throw data.response.data;
        }
    });
  }
  render() {
    return (
      <div>Haloo</div>
    )
  }
}

export default LenddoPage;
