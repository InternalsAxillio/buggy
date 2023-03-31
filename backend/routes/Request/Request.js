import axios from 'axios'
import express from 'express'
const router = express.Router()

router.get('/makeReq',async(req,res)=>{
  //create function of these and pass in the variables.
  var data = JSON.stringify({
    "NumberOfPeople": 5,
    "AgeCategory": {
      "Adult": 5,
      "Children": 1,
      "Infants": 0
    },
    "Options": {
      "HardLiquour": true,
      "PrivateTour": true,
      "SpecialDrinks": true,
      "SelfDrive": true,
      "SharedDrive": false
    },
    "startDate": "2023-01-16T16:47",
    "endDate": "2023-01-16T19:47",
    "userID": "63c3e9889fd2be4e3dad1a91"
  });
  
  var config = {
    method: 'post',
    url: 'http://localhost:3000/api/EveningSafari/createBooking',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
})
router.get('/createUser',async(req,res)=>{
  var data = JSON.stringify({
    "name": "Ali Mukhtar",//variable for name
    "number": "0300000",//variable for number
    "email": "awsxedcrfv@gmail.com"
    //"example": '<your_Variable_here>' //This is how the above value should look
  });
  
  var config = {
    method: 'post',
    url: 'http://localhost:3000/api/Users/createUser',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
    res.status(405).json.stringify(error)
    console.log(error);
  });
})

//Login Api call to check if user exists
router.get('/getCreatedUser', async(req,res)=>{
  var data = JSON.stringify({
    "name": "Zeeshan Ahmad",
    "email": "awsxedcrfv@gmail.com"
  });
  
  var config = {
    method: 'get',
    url: 'http://localhost:3001/api/Users/getUserLogin',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
})
export default router