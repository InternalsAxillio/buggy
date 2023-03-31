import mongoose, { Schema } from 'mongoose';
import userModel from '../Users/userModel.js';

const EveningSafariBookingSchema = new mongoose.Schema({
    "NumberOfPeople":{
        type: Number,
        required: true
    },
    "AgeCategory":{
        type: Map,
        of:Number,
        required:true
    },
    "Options":{
        type:Map,
        of:Boolean,
        required:true
    },
    "startDate":{          // this also stores time 
        type: Date,
        required: true
    },
    "endDate":{         
        type: Date,
        required: true
    },
    "userID":{
        type: Schema.Types.ObjectId, ref: 'userModel',
        required:true
    }
   
})
export default mongoose.model("EveningSafariBookingModel",EveningSafariBookingSchema)