var express = require('express');
var router = express.Router();
var path = require('path');
const bcrypt = require('bcrypt')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


const user = { id: 1, email: 'theuser@qualys.com', password: 'abc123'}

router.get('/', function(req, res) {
  res.sendFile(path.resolve("./public/login.html"));
});

router.post('/session', function(req, res) {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    res.json({ user })
  } else {
    res.status(500).send('Please valid credentials.')
  }



})

module.exports = router;
