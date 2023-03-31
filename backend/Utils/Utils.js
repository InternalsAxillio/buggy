//import userModel from "../models/Users/userModel";
//import { Express } from "express";
export function ParseSearchData_DuneBuggeyBooking(NumOfPeoples,Adults,Children,Infants,HardLiqour,PrivateTour,SpecialDrinks,SelfDrive,SharedDrive,StartDate,EndDate,userID) {
    const ParsedData ={};
        ParsedData['NumberOfPeople']= NumOfPeoples,
        ParsedData['AgeCategory']={
            "Adult":Adults,
            "Children":Children,
            "Infants":Infants
        }
        ParsedData['Options']={
            "HardLiquour": HardLiqour,
            "PrivateTour": PrivateTour,
            "SpecialDrinks": SpecialDrinks,
            "SelfDrive": SelfDrive,
            "SharedDrive": SharedDrive
        }
        ParsedData['startDate']=StartDate
        ParsedData['endDate']=EndDate
        ParsedData['userID']=userID
    return ParsedData;
}
export function CheckUserExists(userName,email,number){

    if(userName==null){
        
    }
}