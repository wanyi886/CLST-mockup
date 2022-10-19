var express = require('express');
var router = express.Router();
var path = require('path');
const bcrypt = require('bcrypt');

// valid credentials for customer website:
// const user = { id: 2, email: 'abhinash@getnada.com', password: 'Admin@123'}
const user = { id: 1, name: 'testUser', email: 'theuser@qualys.com', password: 'abc123'}

router.get('/', function(req, res) {
  res.sendFile(path.resolve("./public/login.html"));
});

router.get('/loggedIn', function(req, res) {
  res.sendFile(path.resolve("./public/logged-in-page.html"))
})

router.get('/test', function(req, res) {
  return res.json({ message: "hi"})
})

router.post('/api/session', async function(req, res, next) {
  
  const { email, password, loginType, firebaseToken } = req.body;

  if (email === user.email && password === user.password) {

    // res.cookie("userId", user.id);
    res.cookie("userName",  user.name )

    return res.json({ 
      userId: user.id
    })     

    // If we want to use the original sign in button: 
    // comment in line 38 - 44
    // can successfully login and redirect to the user page, but can't load page normally, should be invalid when token is changed

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzE3ODIwOTExZTliNWRhMGJkZmU0YSIsImZpcnN0bmFtZSI6IkFiaGluYXNoIiwibGFzdG5hbWUiOiJTaGFybWEiLCJyb2xlcyI6WyJTVVBFUl9BRE1JTiJdLCJjb21wYW55SWQiOiI2MjMxNzgyMDkxMWU5YjVkYTBiZGZlNDYiLCJjb21wYW55TmFtZSI6IkhpbWFjaGFsIEdyYW1pbiBCYW5rIiwiY2FsbE1vbmV5QWNjb3VudFR5cGUiOiJCT1RIIiwiZW1haWwiOiJhYmhpbmFzaEBnZXRuYWRhLmNvbSIsImlhdCI6MTY2NjAyNTg3OSwiZXhwIjoxNjY2MTEyMjc5fQ._VAWM7i1wmHlt7VK6DaVodkNRToyK5mA7OE8mUvEdX4"
    
    // return res.json({ 
    //   // follow the response format of CLST
    //   message: "User loggedIn successfully.",
    //   response: { token: token},
    //  })


  } else {
    const err = new Error('Login failed');
    console.log("err here!", err)
    err.status = 401;
    err.title = 'Login Failed';
    err.errors = ['Email/ Password did not match, please try again']
    err.message = 'Email/ Password did not match, please try again';
    // return err;
    return next(err)
   
  }

});

router.delete('/WTA-739-CLST-login/api/logout', async function(req, res) {
  // res.clearCookie("userId");
  res.clearCookie("userName")

  res.json({ message: "Logout Successfully."})
  
})

module.exports = router;
