import "./sliderstyle.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import  {Autoplay, Navigation } from "swiper";



 // for slider responsiveness
let NoOfslide=4;

function currsize(){
  const win=window.innerWidth;
  if(win<481){
    return 1;
  }
  else if(win>=481 && win<=768){
    return 2;
  }
  else if(win>=769 && win<=1023){
   return 2;
  }
  else{
    return 4;
  }
}

function useWindowSize(){
  const [temp,settemp]=useState(4);
  const [size,setsize]=useState([window.innerWidth,window.innerHeight]);
  useEffect(()=>{
    const handleResize=()=>{
      setsize([window.innerWidth,window.innerHeight]);
      const win=window.innerWidth;
      if(win<481){
        settemp(1)
      }
      else if(win>=481 && win<=768){
       settemp(2)
      }
      else if(win>=769 && win<=1023){
        settemp(2)
      }
      else{
        settemp(4);
      }
      
      
    }
    window.addEventListener("resize",handleResize)
    return()=>{
      window.removeEventListener("resize",handleResize);
    }
  },[])




 return temp;


}



const Slider=()=>{
    NoOfslide=useWindowSize();
    NoOfslide=currsize();
    return(
        <div id="main-review" className="d-flex flex-column justify-content-center align-items-center ">
            <div className="rev-heading d-flex flex-column justify-content-evenly align-items-center">
            <img id="google-logo" src="https://cdn.trustindex.io/assets/platform/Google/logo.svg" alt="" />
            <div className="rev-stars d-flex flex-row px-1 justify-content-center align-items-center">
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 </div>
                 <p>Based on <strong>295 reviews</strong></p>
            </div>
        <div className="slider-container">
             <Swiper 
             navigation={false}
             loop={true} 
             autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter:true,
              }}
             modules={[Autoplay,Navigation]} 
             spaceBetween={30}
             slidesPerView={NoOfslide}
             className="mySwiper">
        <SwiperSlide>
            <div className="review-box">
             <div className="r1 row px-0 py-0 mx-0 my-0">
                <div className="r1-in d-flex px-0 mx-0 py-0 my-0 align-items-start justify-content-between">
                    <img className="user-img" src="user-img.png" alt="" />
                    <div className="rev-top d-flex align-items-start justify-content-between">
                    <div className="about px-0 py-0 mx-0 my-0 d-flex flex-column align-items-start justify-content-start ">
                    
                        <p className="user-name">
                            Omar Sajid
                        </p>
                        <p className="upload-date">
                            2023-01-17
                        </p>
                        
                    </div>
                    <img className="google-img" src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" />
                    </div>
                    

                </div>

             </div>
             <div className="r2 row d-flex flex-column align-items-center justify-content-center pt-4 px-0 py-0 mx-0 my-0">
                <div className="r2-in row px-0 py-0 mx-0 my-0 ">
                    <div className="rating d-flex flex-row px-1 justify-content-start align-items-end">
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img className="verified" src="https://cdn.trustindex.io/assets/icon/trustindex-verified-icon.svg" alt="" />
                 </div>
                </div>
                <div className="rev-text px-0 py-0 mx-0 my-0 d-flex align-items-start justify-content-start">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review-box">
             <div className="r1 row px-0 py-0 mx-0 my-0">
                <div className="r1-in d-flex px-0 mx-0 py-0 my-0 align-items-start justify-content-between">
                    <img className="user-img" src="user-img.png" alt="" />
                    <div className="rev-top d-flex align-items-start justify-content-between">
                    <div className="about px-0 py-0 mx-0 my-0 d-flex flex-column align-items-start justify-content-start ">
                    
                        <p className="user-name">
                            Ali Mukhtar
                        </p>
                        <p className="upload-date">
                            2023-01-17
                        </p>
                        
                    </div>
                    <img className="google-img" src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" />
                    </div>
                    

                </div>

             </div>
             <div className="r2 row d-flex flex-column align-items-center justify-content-center pt-4 px-0 py-0 mx-0 my-0">
                <div className="r2-in row px-0 py-0 mx-0 my-0 ">
                    <div className="rating d-flex flex-row px-1 justify-content-start align-items-end">
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img className="verified" src="https://cdn.trustindex.io/assets/icon/trustindex-verified-icon.svg" alt="" />
                 </div>
                </div>
                <div className="rev-text px-0 py-0 mx-0 my-0 d-flex align-items-start justify-content-start">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review-box">
             <div className="r1 row px-0 py-0 mx-0 my-0">
                <div className="r1-in d-flex px-0 mx-0 py-0 my-0 align-items-start justify-content-between">
                    <img className="user-img" src="user-img.png" alt="" />
                    <div className="rev-top d-flex align-items-start justify-content-between">
                    <div className="about px-0 py-0 mx-0 my-0 d-flex flex-column align-items-start justify-content-start ">
                    
                        <p className="user-name">
                            Zeeshan Ahmed
                        </p>
                        <p className="upload-date">
                            2023-01-17
                        </p>
                        
                    </div>
                    <img className="google-img" src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" />
                    </div>
                    

                </div>

             </div>
             <div className="r2 row d-flex flex-column align-items-center justify-content-center pt-4 px-0 py-0 mx-0 my-0">
                <div className="r2-in row px-0 py-0 mx-0 my-0 ">
                    <div className="rating d-flex flex-row px-1 justify-content-start align-items-end">
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img className="verified" src="https://cdn.trustindex.io/assets/icon/trustindex-verified-icon.svg" alt="" />
                 </div>
                </div>
                <div className="rev-text px-0 py-0 mx-0 my-0 d-flex align-items-start justify-content-start">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review-box">
             <div className="r1 row px-0 py-0 mx-0 my-0">
                <div className="r1-in d-flex px-0 mx-0 py-0 my-0 align-items-start justify-content-between">
                    <img className="user-img" src="user-img.png" alt="" />
                    <div className="rev-top d-flex align-items-start justify-content-between">
                    <div className="about px-0 py-0 mx-0 my-0 d-flex flex-column align-items-start justify-content-start ">
                    
                        <p className="user-name">
                            Noor fatima
                        </p>
                        <p className="upload-date">
                            2023-01-17
                        </p>
                        
                    </div>
                    <img className="google-img" src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" />
                    </div>
                    

                </div>

             </div>
             <div className="r2 row d-flex flex-column align-items-center justify-content-center pt-4 px-0 py-0 mx-0 my-0">
                <div className="r2-in row px-0 py-0 mx-0 my-0 ">
                    <div className="rating d-flex flex-row px-1 justify-content-start align-items-end">
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img className="verified" src="https://cdn.trustindex.io/assets/icon/trustindex-verified-icon.svg" alt="" />
                 </div>
                </div>
                <div className="rev-text px-0 py-0 mx-0 my-0 d-flex align-items-start justify-content-start">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review-box">
             <div className="r1 row px-0 py-0 mx-0 my-0">
                <div className="r1-in d-flex px-0 mx-0 py-0 my-0 align-items-start justify-content-between">
                    <img className="user-img" src="user-img.png" alt="" />
                    <div className="rev-top d-flex align-items-start justify-content-between">
                    <div className="about px-0 py-0 mx-0 my-0 d-flex flex-column align-items-start justify-content-start ">
                    
                        <p className="user-name">
                            Omar Sajid
                        </p>
                        <p className="upload-date">
                            2023-01-17
                        </p>
                        
                    </div>
                    <img className="google-img" src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" />
                    </div>
                    

                </div>

             </div>
             <div className="r2 row d-flex flex-column align-items-center justify-content-center pt-4 px-0 py-0 mx-0 my-0">
                <div className="r2-in row px-0 py-0 mx-0 my-0 ">
                    <div className="rating d-flex flex-row px-1 justify-content-start align-items-end">
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img className="verified" src="https://cdn.trustindex.io/assets/icon/trustindex-verified-icon.svg" alt="" />
                 </div>
                </div>
                <div className="rev-text px-0 py-0 mx-0 my-0 d-flex align-items-start justify-content-start">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review-box">
             <div className="r1 row px-0 py-0 mx-0 my-0">
                <div className="r1-in d-flex px-0 mx-0 py-0 my-0 align-items-start justify-content-between">
                    <img className="user-img" src="user-img.png" alt="" />
                    <div className="rev-top d-flex align-items-start justify-content-between">
                    <div className="about px-0 py-0 mx-0 my-0 d-flex flex-column align-items-start justify-content-start ">
                    
                        <p className="user-name">
                            Omar Sajid
                        </p>
                        <p className="upload-date">
                            2023-01-17
                        </p>
                        
                    </div>
                    <img className="google-img" src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" />
                    </div>
                    

                </div>

             </div>
             <div className="r2 row d-flex flex-column align-items-center justify-content-center pt-4 px-0 py-0 mx-0 my-0">
                <div className="r2-in row px-0 py-0 mx-0 my-0 ">
                    <div className="rating d-flex flex-row px-1 justify-content-start align-items-end">
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img className="verified" src="https://cdn.trustindex.io/assets/icon/trustindex-verified-icon.svg" alt="" />
                 </div>
                </div>
                <div className="rev-text px-0 py-0 mx-0 my-0 d-flex align-items-start justify-content-start">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review-box">
             <div className="r1 row px-0 py-0 mx-0 my-0">
                <div className="r1-in d-flex px-0 mx-0 py-0 my-0 align-items-start justify-content-between">
                    <img className="user-img" src="user-img.png" alt="" />
                    <div className="rev-top d-flex align-items-start justify-content-between">
                    <div className="about px-0 py-0 mx-0 my-0 d-flex flex-column align-items-start justify-content-start ">
                    
                        <p className="user-name">
                            Omar Sajid
                        </p>
                        <p className="upload-date">
                            2023-01-17
                        </p>
                        
                    </div>
                    <img className="google-img" src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" />
                    </div>
                    

                </div>

             </div>
             <div className="r2 row d-flex flex-column align-items-center justify-content-center pt-4 px-0 py-0 mx-0 my-0">
                <div className="r2-in row px-0 py-0 mx-0 my-0 ">
                    <div className="rating d-flex flex-row px-1 justify-content-start align-items-end">
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img className="verified" src="https://cdn.trustindex.io/assets/icon/trustindex-verified-icon.svg" alt="" />
                 </div>
                </div>
                <div className="rev-text px-0 py-0 mx-0 my-0 d-flex align-items-start justify-content-start">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                
             </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="review-box">
             <div className="r1 row px-0 py-0 mx-0 my-0">
                <div className="r1-in d-flex px-0 mx-0 py-0 my-0 align-items-start justify-content-between">
                    <img className="user-img" src="user-img.png" alt="" />
                    <div className="rev-top d-flex align-items-start justify-content-between">
                    <div className="about px-0 py-0 mx-0 my-0 d-flex flex-column align-items-start justify-content-start ">
                    
                        <p className="user-name">
                            Omar Sajid
                        </p>
                        <p className="upload-date">
                            2023-01-17
                        </p>
                        
                    </div>
                    <img className="google-img" src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" />
                    </div>
                    

                </div>

             </div>
             <div className="r2 row d-flex flex-column align-items-center justify-content-center pt-4 px-0 py-0 mx-0 my-0">
                <div className="r2-in row px-0 py-0 mx-0 my-0 ">
                    <div className="rating d-flex flex-row px-1 justify-content-start align-items-end">
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="" />
                 <img className="verified" src="https://cdn.trustindex.io/assets/icon/trustindex-verified-icon.svg" alt="" />
                 </div>
                </div>
                <div className="rev-text px-0 py-0 mx-0 my-0 d-flex align-items-start justify-content-start">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                
             </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
    );
}
export default Slider;