import express  from 'express'
import userModel from '../../models/Users/userModel.js';
import DuneBuggeyModel from '../../models/DuneBuggey/DuneBuggeyModel.js';

const router = express.Router();



router.get('/',async (req,res)=>{
    res.send("DuneBuggeyBooking Endpoint")
})
router.post('/createBooking', async (req,res)=>{
    //assuming user is sent
    // const userID=req.body.userID;
    // const startDateIN = req.body.startDate;
    // const endDateIN = req.body.endDate;
    // const NumberOfPeople = req.body.NumberOfPeople;
    // const AgeCategory = req.body.AgeCategory;
    // const Options = req.body.Options;
    const BookingData=req.body;
    let StatusCode=406;
    let ReturnJSONMessage={"Inc":"An error occured and the request was not completed"}
    console.log(BookingData.startDate);
    // const query ={};
    // const query2={};
    // query['startDate']={$gte : BookingData.startDate.toString()};
    // query['endDate']={$lte : BookingData.endDate.toString()};
    // query2['$or']=[query];
    // console.log(query2);
    console.log(BookingData.endDate)
    if(!(await userModel.findById(BookingData.userID).exec())){ //returns the id if user exists and null if it does not
        console.log('User Does not Exist');
        res.send().json({'Err':'User not Found'});
        return;
    }
    // const TimeCheckDocs = await DuneBuggeyModel.find(query2);
    //     console.log(TimeCheckDocs);
    //     if(TimeCheckDocs){
    //        return res.status(406).json({"Error":"The date and time values entered you are already booked"});
    //     }
    

    const newBooking = new DuneBuggeyModel(BookingData)
    try{
        await newBooking.save().then(()=>{
            res.status(200).json(BookingData)
        }).catch((err)=>{
            console.log(err);
            res.json(err) 
            //console.log("reg err");
        })
    }
    catch(error){
        res.status(500).json(error)
    }

})

router.get('/SearchByBookingID',async(req,res)=>{
    const BookingID=req.body._id;
    
    if(BookingID){
            try{
                DuneBuggeyModel.findById(BookingID,function(err,docs){
                if(docs){
                    res.status(200).json(docs)
                }
                else{
                    res.send().json({"Err":"The BookingID you entered is either invalid or does not exist"})
                }
                }) 
                }catch(err){
                     res.status(500).json(error)
                }
        }
})
router.get('/SearchByUserID',async(req,res)=>{
const UserIDin = req.body._id;
if(UserIDin==null){
    res.send().json({"Err":"UserID is missing"})
}
else{
    DuneBuggeyModel.find({userID : UserIDin},function (err,docs){
        if(docs){
            res.status(200).json(docs);
        }else{
            res.send().json({"Err":"Invalid UserID or No bookings"})
        }
    })
}
})

// router.get('/SearchByDate',async(req,res)=>{
//     const DateIN = req.body.DateIN;
//     let returMessage;
//     if( DateIN==null){
//         res.send().json({"Err":"DateIN is missing"})
//     }
// })
export default router