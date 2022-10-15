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

router.get('/test', function(req, res) {
  return res.json({ message: "hi"})
})

router.post('/session', async function(req, res) {
  console.log("in post route");
  console.log("!!!!!!!!", req.body);
  const { email, password, msg } = req.body;

  console.log("++++++++", email, "++++++++", password, '++++++', msg)

  if (email === user.email && password === user.password) {
    return res.json({ user })
  } else {
    res.status(500).send('Please prodive valid credentials.')
  }



})

module.exports = router;
