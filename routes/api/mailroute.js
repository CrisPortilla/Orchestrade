const router = require("express").Router();
const okta = require('@okta/okta-sdk-nodejs');
var mailgun = require("mailgun-js");
var mailgun = require('mailgun-js')({
  apiKey: "key-4bc819de1c6711499f7e3483c1f62296",
  domain: "sandbox070c5e1ec6d0415095e68a9742c5a5c0.mailgun.org"
});

//mailgun 
// matches with "/api/mail"
router.route('/')
    .post(function (req, res) {
    console.log("mailing");
    client.getUser('me')
        .then(user => {
        console.log(user);
    });

//   let length = req.body.length;
//   let email = req.body.email;
//   let name = req.body.name;
//   let instrument = req.body.instrument
//   const output = `
//       <p>One of your instruments have been requested</p>
//       <ul>
//           <li> Name: ${req.body.name} </li>
//           <li> Email: ${req.body.email}</li>
//           <li> Phone: ${req.body.instrument}</li>
//           <li> Length: ${req.body.length}</li>
//       </ul>
//     `
    const output = `
        <p>You have a new Orchestrade instrument request!</p>

        <li> Name: Demo User </li>
        <li> Email: email@gmail.com</li>
        <li> Phone: Trombone</li>
        <li> Length: 1 Semester</li>
    `
  
  const data = {
      from: 'Orchestrade <postmaster@sandbox070c5e1ec6d0415095e68a9742c5a5c0.mailgun.org> ',
      to: 'treadam9115@gmail.com',
      subject: 'An Instrument Request',
      text: 'Testing some Mailgun awesomness!',
      html: output,
  };

  mailgun.messages().send(data, function (error, body) {
      console.log(body);
  });
}),

module.exports = router;