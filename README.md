send otp in nodeJs using twilio verification api. (particularly for otp verification)


to run the code:

~install: npm i express nodemon twilio

~then: npm start


apis endpoint:

1. /api/send-opt: to send the otp
body object:{
    phone:'99XXXXXX91'
}

2. /api/verify-otp: to veryfy the sent otp
body object:{
    phone:'99XXXXXX91',
    otp:'enter received otp'
}

