import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./spotlightstyle.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import { useState } from "react";

import axios from 'axios'

import React from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { FaLanguage } from 'react-icons/fa';
import { FaTshirt } from 'react-icons/fa';
import { FaRunning} from 'react-icons/fa';
import { BsSmartwatch} from 'react-icons/bs';
import { BsCalendarCheck} from 'react-icons/bs';
import { IoCarSportOutline} from 'react-icons/io5';
import { TbCalendarTime} from 'react-icons/tb';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Spotlight=(props)=>{
       
    const makereq=()=>{
        var data = JSON.stringify({
            "NumberOfPeople": adult+child+infant,
            "AgeCategory": {
              "Adult": adult,
              "Children": child,
              "Infants": infant
            },
            "Options": {
              "HardLiquour": hardliquor,
              "PrivateTour": privatetour,
              "SpecialDrinks": specialdrink,
              "SelfDrive": true,
              "SharedDrive": false
            },
            "startDate": value,
            "endDate": "2023-01-16T19:47",
            "userID": "63c3e9889fd2be4e3dad1a91"
          });
          
          var config = {
            method: 'post',
            url: 'http://localhost:3001/api/EveningSafari/createBooking',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
           console.log (JSON.stringify(response.data));
           setcheck(JSON.stringify(response.data));
           console.log(value);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


     const iconColor="#3b5998";
    let price=false;
    let people=false;

    const b1click=()=>{
       document.getElementById("box1").style.borderColor="#3b5998";
       document.getElementById("Radio1").checked="true";
       document.getElementById("box2").style.borderColor="lightgray";
       document.getElementById("box3").style.borderColor="lightgray";
       sethardliquor(true);
    //    price=true;
    //    if(price==true && people==true){
    //       document.getElementById("avail").disabled=false;
    //     }
    }
    const b2click=()=>{
        document.getElementById("box2").style.borderColor="#3b5998";
        document.getElementById("Radio2").checked="true";
        document.getElementById("box1").style.borderColor="lightgray";
        document.getElementById("box3").style.borderColor="lightgray";
        setprivatetour(true);
        // price=true;
        // if(price && people){
        //     document.getElementById("avail").disabled=false;
        //   }
     }

     const b3click=()=>{
        document.getElementById("box3").style.borderColor="#3b5998";
        document.getElementById("Radio3").checked="true";
        document.getElementById("box1").style.borderColor="lightgray";
        document.getElementById("box2").style.borderColor="lightgray";
        setspecialdrink(true);
        // price=true;
        // if(price && people){
        //   document.getElementById("avail").disabled=false;
        // }
     }

     const [adult,setadult]=useState(0);
     const [child,setchild]=useState(0);
     const [infant,setinfant]=useState(0);
     const [hardliquor,sethardliquor]=useState(false);
     const [privatetour,setprivatetour]=useState(false);
     const [specialdrink,setspecialdrink]=useState(false);
     const [check,setcheck]=useState("");
    const increasead=()=>{
      if(adult<50){
        setadult(adult+1);
        people=true
        if(people && price){
            document.getElementById("avail").disabled=false;
        }
      }
    }
    const decreasead=()=>{
        if(adult>0){
            setadult(adult-1);
        }
        // if(adult==0){
        //     document.getElementById("avail").disabled=true;
        // }
    }
    const increasec=()=>{
        if(child<50){
          setchild(child+1);
        //   people=true
        //   if(people && price){
        //       document.getElementById("avail").disabled=false;
        //   }
        }
      }
      const decreasec=()=>{
          if(child>0){
              setchild(child-1);
          }
        //   if(child==0){
        //     document.getElementById("avail").disabled=true;
        // }
      }
      const increasei=()=>{
        if(infant<50){
          setinfant(infant+1);
        //   people=true
        //   if(people && price){
        //       document.getElementById("avail").disabled=false;
        //   }
        }
      }
      const decreasei=()=>{
          if(infant>0){
              setinfant(infant-1);
          }
        //   if(infant==0){
        //     document.getElementById("avail").disabled=true;
        // }
      }


let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
    const [value, setValue] = React.useState(dayjs(year+'-'+month+'-'+date));

    const handleChange = (newValue) => {
        setValue(newValue);
        
      };
    

    return(
<div className="spotlightsection pt-3">
    <div className="container pt-5 mr-1 pr-1">
        <div className="row">
            <div className="col-xl-5 col-lg-5 col-12">
            <Carousel
           
            >
                <div>
                    <img src={props.img1} />
                   
                </div>
                <div>
                    <img src={props.img2} />
                    
                </div>
                <div>
                    <img src={props.img3} />
                    
                </div>
            </Carousel>




            </div>
            <div className="rightside pb-5 col-xl-7 col-lg-7 col-12 d-flex flex-column align-items-start " >
                
                <h1>{props.heading}</h1>
                
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
          label="Date"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          className="date-picker"
        />
            </LocalizationProvider>
            
            <div className="passengers mt-3 d-flex align-items-center justify-content-between">
            <div className="ages d-flex flex-column align-items-between">
                <p>Adults</p>
            <div className="counter d-flex justify-content-evenly align-items-center">
                <ArrowBackIosIcon onClick={decreasead}  className="icon"></ArrowBackIosIcon>
                <p>{adult}</p>
                <ArrowForwardIosIcon className="icon" onClick={increasead}></ArrowForwardIosIcon>
            </div>
            </div>
            <div className="ages d-flex flex-column align-items-between">
                <p>Children</p>
            <div className="counter d-flex justify-content-evenly align-items-center">
                <ArrowBackIosIcon onClick={decreasec}  className="icon"></ArrowBackIosIcon>
                <p>{child}</p>
                <ArrowForwardIosIcon className="icon" onClick={increasec}></ArrowForwardIosIcon>
            </div>
            </div>
            <div className="ages d-flex flex-column align-items-between">
                <p>Infants</p>
            <div className="counter d-flex justify-content-evenly align-items-center">
                <ArrowBackIosIcon onClick={decreasei}  className="icon"></ArrowBackIosIcon>
                <p>{infant}</p>
                <ArrowForwardIosIcon className="icon" onClick={increasei}></ArrowForwardIosIcon>
            </div>
            </div>
            </div>

            <div className="mt-4" style={{width:"100%"}}>
            <h4>choose your option</h4>
                <div className="row d-flex align-items-center justify-content-lg-evenly justify-content-xl-evenly justify-content-md-evenly justify-content-between ">
                    
                    <div id="box1" className="box  col-lg-4 col-xl-4 pb-2 px-2 d-flex flex-column align-items-start justify-content-evenly" onClick={b1click}>
               <div className="ophead d-flex flex-column align-items-center">
                <div class="form-check">
                 <input class="form-check-input" type="radio" name="exampleRadios" id="Radio1" value="option1" />
                 </div>
                    <h5>Hard liquor</h5>
                    </div>


                    <div>
                    <p className="text-secondary mb-0"> From</p>
                    <h6>USD 118</h6>
                    </div>
                </div>
                <div id="box2" className="box  col-lg-4 col-xl-4 pb-2 px-2 d-flex flex-column align-items-start justify-content-evenly" onClick={b2click}>
               <div className="ophead d-flex flex-column align-items-center">
                <div class="form-check">
                 <input class="form-check-input" type="radio" name="exampleRadios" id="Radio2" value="option1" />
                 </div>
                    <h5>Private tour</h5>
                    </div>


                    <div>
                    <p className="text-secondary mb-0"> From</p>
                    <h6>USD 118</h6>
                    </div>
                </div>
                    
                <div id="box3" className="box  col-lg-4 col-xl-4 pb-2 px-2 d-flex flex-column align-items-start justify-content-evenly" onClick={b3click}>
               <div className="ophead d-flex flex-column align-items-center">
                <div class="form-check">
                 <input class="form-check-input" type="radio" name="exampleRadios" id="Radio3" value="option1" />
                 </div>
                    <h5>Special Drink</h5>
                    </div>


                    <div>
                    <p className="text-secondary mb-0"> From</p>
                    <h6>USD 118</h6>
                    </div>
                </div>


                </div>
                </div>
              
                <button id="avail" type="button" class="btn btn-primary mt-4" onClick={makereq} >Check Availaibilty</button>
                
                
                
           
            


            



            </div>
        </div>
    </div>
    <div className="text-section">
      <div className="container d-flex flex-column justify-content-center align-items-center">
      <h1>{props.descriptionHeading}</h1>
        <div className="row pt-3">
          <div className="col-xl-8 col-lg-8">
           <p>Are you ready for an adventure like no other? Experience the magic of the Dubai desert with our Evening Desert Safari! Buckle up and get ready to ride in a four-wheel drive vehicle over the majestic sand dunes, while the setting sun paints the sky with vibrant hues. Once we reach our campsite, you'll be whisked away to a modern Bedouin-style setting, complete with traditional entertainment that will leave you spellbound. Try your hand at sandboarding, hop on a camel for a desert ride or indulge in some henna hand painting, all while sipping on refreshing drinks. And don't forget the highlight of the evening - a sumptuous BBQ dinner, served under a blanket of stars that will take your breath away. So what are you waiting for? Book your Evening Desert Safari now and create unforgettable memories that will last a lifetime!</p>

           <h3>The Package Includes:</h3>
           <ul>
            <li><span>Hotel pick-up and drop-off in a four-wheel drive shared vehicle.</span></li>
            <li><span>Transfers to and from the camp as well as table seating at the campsite are shared with other guests.</span></li>
            <li><span>Enjoy a thrilling dune drive to the campsite.</span></li>
            <li><span>Witness the stunning sunset view during a stop en route.</span></li>
            <li><span>Immerse yourself in the modern Bedouin-style camp for a truly unique experience.</span></li>
            <li><span>Take a camel ride and experience the beauty of the desert from a new perspective.</span></li>
            <li><span>Try sandboarding for a thrilling, high-speed ride down the dunes.</span></li>
            <li><span>Get henna hand painting and feel like a local with a traditional Arabian art form.</span></li>
            <li><span>Be mesmerized by the Arabian Adventures Fire and Dance Show.</span></li>
            <li><span>Savor the taste of the BBQ dinner featuring a variety of mouthwatering dishes.</span></li>
            <li><span>Enjoy unlimited soft drinks to keep you hydrated throughout the evening.</span></li>
            <li><span>For those who choose the Premium Beverages package, you'll have unlimited house beverages (wine and beer) served after sunset, except during religious holidays.</span></li>
            <li><span>Shisha is included in the Premium Beverages package, giving you the chance to enjoy a traditional smoking experience.
            </span></li>


           </ul>
           <br />
           <div className="row">
            <h3>The Facts</h3>
            <div className="col-xl-4 col-lg-4 d-flex flex-column ">
              <div className="d-flex flex-row align-items-center justify-content-start mb-5 mt-3" >
                <div className="icon-bg">
                <FaLanguage size={30} color={iconColor}/>
                </div>
              <div className="mx-3">
                <h6 className="icon-heading">Language</h6>
                <p className="icon-text">English</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start mb-5" >
                <div className="icon-bg">
                <FaTshirt size={30} color={iconColor}/>
                </div>
              <div className="mx-3">
                <h6 className="icon-heading">Dress Code</h6>
                <p className="icon-text">Modest dressing</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start mb-5" >
                <div className="icon-bg">
                <FaRunning size={30} color={iconColor}/>
                </div>
              <div className="mx-3">
                <h6 className="icon-heading">Activity</h6>
                <p className="icon-text">Moderate</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 d-flex flex-column ">
              <div className="d-flex flex-row align-items-center justify-content-start mb-5 mt-3" >
                <div className="icon-bg">
                <TbCalendarTime size={30} color={iconColor}/>
                </div>
              <div className="mx-3">
                <h6 className="icon-heading">Departures</h6>
                <p className="icon-text">Daily</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start mb-5" >
                <div className="icon-bg">
                <BsSmartwatch size={30} color={iconColor}/>
                </div>
              <div className="mx-3">
                <h6 className="icon-heading">Duration</h6>
                <p className="icon-text">Afternoon till evening</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start mb-5" >
                <div className="icon-bg">
                <TbCalendarTime size={30} color={iconColor}/>
                </div>
              <div className="mx-3">
                <h6 className="icon-heading">Estimated Departure time</h6>
                <p className="icon-text">3pm</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 d-flex flex-column ">
              <div className="d-flex flex-row align-items-center justify-content-start mb-5 mt-3" >
                <div className="icon-bg">
                <BsCalendarCheck size={30} color={iconColor}/>
                </div>
              <div className="mx-3">
                <h6 className="icon-heading">Availaibilty</h6>
                <p className="icon-text">Year round</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start mb-5" >
                <div className="icon-bg">
                <IoCarSportOutline size={30} color={iconColor}/>
                </div>
              <div className="mx-3">
                <h6 className="icon-heading">Transport</h6>
                <p className="icon-text">4x4 suv</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-start mb-5" >
                <div className="icon-bg">
                <TbCalendarTime size={30} color={iconColor}/>
                </div>
              <div className="mx-3">
                <h6 className="icon-heading">Estimated Return time</h6>
                <p className="icon-text">9pm</p>
                </div>
              </div>
            </div>

           </div>
           <p>Experience the true magic of the Arabian Desert with our Evening Desert Safari in Dubai! This exhilarating tour takes you on a thrilling journey through the endless sand dunes of the desert, giving you a taste of the desert nightlife as you gaze at the stars shining overhead. Buckle up and get ready for an adrenaline-filled adventure as you ride over the dunes in a 4x4, with stunning desert landscapes stretching out in all directions.
</p>
<br></br>
            
            <p>Once you've had your fill of thrills, we'll take you to our traditional Bedouin camp, where you'll have the chance to try your hand at camel riding, sandboarding, henna tattooing or simply relax and take in the breathtaking views. As the night falls, get ready for a feast for your senses - a mouthwatering BBQ dinner under the stars, complete with your selected beverage package. And that's not all - the local performers will leave you spellbound with an awe-inspiring journey through the best of Emirati entertainment.
</p>
              <br />
              <p>So if you're looking for an unforgettable adventure in the heart of the desert, our Evening Desert Safari in Dubai is definitely for you. Don't miss out on this once-in-a-lifetime opportunity - book your Dubai Evening Desert Safari today and get ready for an experience like no other!</p>

            <br />
            <h3>Insider Tips for the Ultimate Evening Desert Safari:</h3>

            <ul>
              <li><span>Take home a piece of the desert with you! Our campsite has a wide selection of souvenirs and photos available for purchase.</span></li>
              <li><span>Enjoy your evening in comfort with convenient restroom facilities available at the campsite.</span></li>
              <li><span>Get the full Arabian experience with a traditional Shisha smoking session included in the Premium package. If you opt for another package, you can still enjoy Shisha for AED 50 per session at the campsite.</span></li>
              <li><span>Dress to impress with modest clothing and comfortable walking shoes - you're in for an unforgettable adventure!</span></li>
              <li><span>Quench your thirst with unlimited soft drinks and water included in all beverage packages. And if you're feeling adventurous, selected adult beverages are available on-site for an additional charge.</span></li>
              <li><span>Not only will you have the time of your life, but you'll also be contributing to local conservation efforts - a portion of your fee goes towards supporting these initiatives.</span></li>
              <li><span>Please note, entertainment may vary during Ramadan and other religious holidays. But rest assured, you'll still be treated to a truly unforgettable experience</span></li>

            </ul>

          </div>
          <div className="vidSide col-xl-4 col-lg-4 d-flex  flex-column  ">
          <iframe width="100%" height="20%" src="https://www.youtube.com/embed/txOA_KmIpX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br />
          <h5>Best For</h5>
          <div className="right-list">
         
          <ul className="ml-5">
            <li><span>Couples</span></li>
            <li><span>Families</span></li>
            <li><span>Kids</span></li>
            <li><span>Single Travellers</span></li>
            <li><span>Leisure Travellers</span></li>
            <li><span>Buisness Travellers</span></li>


          </ul>

</div>
<br />
           <h5>Age Policy</h5>
           <div className="right-list">
            <ul>
              <li><span>Child pricing is applicable for children between the ages 5-11.</span></li>
              <li><span>Adult pricing is applicable for people from the age of 12 years.</span></li>
              <li><span>To book children between the ages 2-5 years or under 135cm on this tour, private vehicle must be booked and details on infants should be included in the booking information.</span></li>

            </ul>
           </div>
          </div>
        </div>
      </div>
    </div>

</div>

    );
}
export default Spotlight;