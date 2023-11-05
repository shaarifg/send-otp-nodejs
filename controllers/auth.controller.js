require("dotenv").config();
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const verifySid = process.env.verifySid;
const client = require("twilio")(accountSid, authToken);

const sentOtp = (body) => {
  console.log(body);
  return new Promise((reject, resolve) => {
    const { phone } = body;

    //getting phone number from body
    if (!phone || phone == "") {
      reject({ message: "please provide number", status: 404 });
    } else {
     

      //twilio's api for verification
      client.verify.v2
        .services(verifySid)
        .verifications.create({ to: "+91" + phone, channel: "sms" })
        .then(
          (verifications)=>{
            console.log(verifications)
            resolve({ message: "otp sent succussfully", status: 200 })
          }
        ).catch(reject({message:'max limit reached', status:500}));
    }
  });
};
//method to verify-otp
const verifyOtp = (body) => {
console.log(body)
return new Promise((reject, resolve)=>{
  const {phone, otp} = req.body

  //we can set validation here
  if(phone && otp){
    client.verify.v2
            .services(verifySid)
            .verificationChecks.create({ to: "+91" + phone, code: otp })
            .then((verification_check) => {
              console.log(verification_check)
              if(verification_check.status){
                resolve({message:'otp verified', status:200})
              }else{
                reject({message:'bad request sharif', status:500})
              }
            })
  }
})

};

module.exports = {
  sentOtp,
  verifyOtp,
};
