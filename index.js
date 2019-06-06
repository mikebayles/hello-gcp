const functions = require('firebase-functions');

exports.sayHello = functions.https.onRequest(async (req, res) => {
    res.send('hello world!')
});