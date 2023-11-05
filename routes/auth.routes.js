const express = require("express");
const router = express.Router();


// controllers
const {sentOtp, verifyOtp} = require('../controllers/auth.controller')


//default route
router.get("/", (req, res) => {
  return res.json({
    data: "hello world from Sharif",
  });
})



//route to send otp
router.post("/send-otp", async(req, res) => {
  console.log(req.body)
  sentOtp(req.body) .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
})


//route to verify otp controller
router.post("/verify-otp", async(req, res) => {
  verifyOtp(req.body) .then((response)=>{
        res.status(response.status).send(response)
    })
    .catch((error)=>{
        res.status(error.status).send(error)
    })
});

module.exports = router;
