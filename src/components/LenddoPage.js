import React, { Component } from 'react';

// const id = '562f3909aa9612778a2b8d2e';
// const secret = 'AAZog0WWSApnQUI1c1J544Fm2Aqjp+NMvKlqgx9V2DbvGTcYHpbNGlXxwSzcQHpJBTSSyCYlR4YqQMrHRQBHdw==';
// // Import clients
// const lenddo_clients = require('lenddo').clients;
//
// // this is the client ID that you sent us initially.
// const client_id = '{55f79f82aa9612620b9855df}';
// const partner_script_id = '{59230c27f7a5793fa653526}';
// // begin main script
// const ScoreService = lenddo_clients.Score;
// const client_instance = new ScoreService(id, secret);
//
// client_instance.ClientScore.get(client_id, partner_script_id)
// .exec(function(err, result) {
//   var response = result.response;
//   /**
//   * response.data should look like the following:
//   * { score: 521, flags: [] }
//   **/
//   console.log(response.data);
// });
//
// client_instance.ClientVerification.get(client_id, partner_script_id)
// .exec(function(err, result) {
//   var response = result.response;
//   /**
//   * response.data should contain a large object detailing the verification results.
//   **/
//   console.log(response.data);
// });
//
// // this is the partner script ID you used in the data SDK
// var partner_script_id = '{59230c27f7a5793fa653526}';
//
// var NetworkService = lenddo_clients.Network;
// var client_instance = new NetworkService(id, secret);
//
// client_instance.MobileData.get(partner_script_id).exec(function(err, response) {
//     /**
//     * Here you will see a dump of the data received. Please consult with your Lenddo account manager
//     * for documentation regarding the schema that you can expect to see here.
//     */
//     console.log(response.data);
// });
//
// var profile_ids = [];
// client_instance.ClientToken.post(application_id, partner_script_id, provider, token).exec(function (err, data) {
//   if (err) {
//     // This is only triggered during network connectivity issues
//     throw err;
//   }
//
//   if (data.response.code >= 500) {
//     // Something went wrong on Lenddo's side. If this continues, contact Lenddo.
//     throw data.response.data;
//   }
//
//   if (data.response.code >= 400) {
//     // This occurs when the request was incorrect
//     throw data.response.data;
//   }
//
//   // The profile ID returned from the Service. This is very important. Save it.
//   profile_ids.push( data.response.data.profile_id );
//
//   // !!! Begin Step 2 of Whitelabel Integration Here.
// });
//
// var VerificationObject = require('lenddo').verification;
//
// // Get an instance of the verification object
// var user_verification = new VerificationObject();
// // Define probes to be verified (Everything is optional)
// user_verification.set.firstName('John')
//                 .middleName('J')
//                 .lastName('Doe')
//                 .dateOfBirth('YYYY-MM-DD')
//                 .employer('Lenddo')
//                 .mobilePhone('555-124-56789')
//                 .university('University Name')
//                 .email('user@domain.com');
//
// client_instance.CommitClientJob.post(application_id, partner_script_id, profile_ids, user_verification)
// .exec(function(err, data) {
//   if (err) {
//         // This is only triggered during network connectivity issues
//         throw err;
//     }
//
//     if (data.response.code >= 500) {
//         // Something went wrong on Lenddo's side. If this continues, contact Lenddo.
//         throw data.response.data;
//     }
//
//     if (data.response.code >= 400) {
//         // This occurs when the request was incorrect
//         throw data.response.data;
//     }
//
//     if (data.response.data.success) {
//     // Application was successfully submitted
//     } else {
//     // Application submission failed.
//     throw data.response.data;
//     }
// });

class LenddoPage extends Component {
  render() {
    return (
      <div>Haloo</div>
    )
  }
}

export default LenddoPage;
