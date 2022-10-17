var express = require('express');
var router = express.Router();
var path = require('path');
const bcrypt = require('bcrypt')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


const user = { id: 1, email: 'abhinash@getnada.com', password: 'Admin@123'}

router.get('/', function(req, res) {
  res.sendFile(path.resolve("./public/login.html"));
});

router.get('/loggedIn', function(req, res) {
  res.sendFile(path.resolve("./public/logged-in-page.html"))
})

router.get('/test', function(req, res) {
  return res.json({ message: "hi"})
})

router.post('/api/session', async function(req, res) {
  
  const { email, password, loginType, firebaseToken } = req.body;

  // console.log("++++++++", email, "++++++++", password, "loginType", loginType, "+++++++", firebaseToken)

  if (email === user.email && password === user.password) {

    // For original sign in button: 
    // can successfully login and redirect to the user page, but can't load page normally, should be invalid when token is changed
    
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzE3ODIwOTExZTliNWRhMGJkZmU0YSIsImZpcnN0bmFtZSI6IkFiaGluYXNoIiwibGFzdG5hbWUiOiJTaGFybWEiLCJyb2xlcyI6WyJTVVBFUl9BRE1JTiJdLCJjb21wYW55SWQiOiI2MjMxNzgyMDkxMWU5YjVkYTBiZGZlNDYiLCJjb21wYW55TmFtZSI6IkhpbWFjaGFsIEdyYW1pbiBCYW5rIiwiY2FsbE1vbmV5QWNjb3VudFR5cGUiOiJCT1RIIiwiZW1haWwiOiJhYmhpbmFzaEBnZXRuYWRhLmNvbSIsImlhdCI6MTY2NjAyNTg3OSwiZXhwIjoxNjY2MTEyMjc5fQ._VAWM7i1wmHlt7VK6DaVodkNRToyK5mA7OE8mUvEdX4"
    // console.log("token", token)
    // return res.json({ 
    //   message: "User loggedIn successfully.",
    //   response: { token: token}
    //  })


    // For testButton I created:
    return res.json({
      user
    })
    


  } else {
    res.status(200).send({message: 'Please prodive valid credentials.'})
  }

  // TODO: need to make the payload same with the original site.

})

module.exports = router;
