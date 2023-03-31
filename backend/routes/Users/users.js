import express  from 'express'
import userModel from '../../models/Users/userModel.js';
import DesertSafariModel from '../../models/DesertSafari/DesertSafariModel.js';
import DuneBuggeyModel from '../../models/DuneBuggey/DuneBuggeyModel.js';
import EveningSafariModel from '../../models/EveningSafari/EveningSafariModel.js';

const router = express.Router();



router.get('/',async (req,res)=>{
    res.send("Users Endpoint")
})

router.post("/createUser",async (req,res)=>{
    const name=req.body.name;
    const number=req.body.number;
    const email=req.body.email;
    const newUser = new userModel({name,number,email})
    try{
        await newUser.save().then(()=>{
            res.status(200).json(newUser)
        }).catch((err)=>{
            console.log(err);
            res.send().json(err)
            console.log("reg err");
        })
    }
    catch(error){
        res.status(500).json(error)
    }
})
router.get('/getUserbyID',async(req,res)=>{
    const userID=req.body._id;
   if(userID){
    try{
        userModel.findById(userID,function(err,docs){
            if(docs){
                res.status(200).json(docs)
            }
            else{
                res.send().json({"Err":"The user you entered is either invalid or does not exist"})
            }
        })
    }catch(err){
        res.send().status(err);
    }
}
})
router.get('/getAllUsers',async(req,res)=>{
    try{
        userModel.find(null,function(err,docs){
            if(docs){
                res.status(200).json(docs)
            }
            else{
                res.send().json({"Err":"The user you entered is either invalid or does not exist"})
            }
        })
    }catch(err){
        res.send().status(err);
    }
})
router.get('/getUserLogin',async(req,res)=>{
    try{
        const INemail=req.body.email
        const INusername=req.body.name
        if(INemail!=null && INusername!=null){

            userModel.findOne({email:INemail,name:INusername},'_id',function(err,docs){
                if(docs){
                    //console.log(docs)
                    res.send(docs)
                }
            })
        }else{
            res.send({"Err":"Incorrect data sent"})
        }
        
    }catch(err){
        res.send(err)
    }
})
router.get('/allBookingsByid',async (req,res)=>{
    try {
        let flag = false;
        const IN_id=req.body._id
        User.countDocuments({_id: IN_id}, function (err, count){ 
            if(count>0){
                console.log(flag)
                //User Exists
                flag=true
            }
            }); 
            console.log(flag)
            if(flag){
                const bookingIDs={}
                DuneBuggeyModel.find({userID:IN_id},function (err,Docs) {
                    if (Docs) {
                        console.log(Docs)
                        bookingIDs["DuneBuggey"]=Docs
                    }
                })
                DesertSafariModel.find({userID:IN_id},function (err,Docs) {
                    if (Docs) {
                        console.log(Docs)
                        bookingIDs["DesertSafari"]=Docs
                    }
                })
                EveningSafariModel.find({userID:IN_id},function (err,Docs) {
                    if (Docs) {
                        console.log(Docs)
                        bookingIDs["EveningSafari"]=Docs
                    }
                })
            }
            console.log(bookingIDs)
            res.send(bookingIDs)
        
    } catch (error) {
        res.sendStatus(500)
    }
})
export default router