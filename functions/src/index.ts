const functions = require('firebase-functions');
const googleTrends = require('google-trends-api');

exports.bigben = functions.https.onRequest((req, res) => {
  /*const hours = (new Date().getHours() % 12) + 1 // London is UTC + 1hr;
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
    </body>
  </html>`);*/
  googleTrends.interestOverTime({keyword: 'Women\'s march'})
    .then(function(results){
          console.log('These results are awesome', results);
          res.status(200).send(`<!doctype html>
                                  <head>
                                    <title>Time</title>
                                  </head>
                                  <body>
                                    ${results}
                                  </body>
                                </html>`);
                                    })
                                    .catch(function(err){
                                      console.error('Oh no there was an error', err);
                                    });
});