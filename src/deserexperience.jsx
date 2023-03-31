import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./desertexperienceStyle.scss";
import { useNavigate } from "react-router-dom";
import { GiCheckMark} from 'react-icons/gi';





const DeserEx=()=>{
    const navigate=useNavigate();

    const ExclusivSafari=()=>{
        navigate("/ede");
    }
    const JeepSafari=()=>{
        navigate("/jsaf");
    }
    const CamelRide=()=>{
        navigate("/cride");
    }
    const HorsebackRide=()=>{
        navigate("/hride");
    }
    return(
        <div id="desexpage">
            <div className="container">
                <div className="description mt-5 d-flex flex-column align-items-center justify-content-evenly">
                    <h2>Desert Experience</h2>
                    <p>If you’re looking to take your adventures in the UAE off the beaten track, and experience something truly extraordinary, treat yourself to one of our exceptional desert experiences. Whether you’re ready to immerse yourself in the local culture as you roam the emirates on a Jeep adventure, get a taste of authentic Bedouin life trekking the dunes by camel, or just eager to enjoy the tranquillity and solitude of the desert, during a private dinner under the stars, we’ve got you covered. Choose your adventure and get ready to make some ever-lasting memories.</p>

                
                
                </div>
                <div className="product mb-5">    
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-6">
                    <img src="private-safari.webp" alt="" />
                </div>
                <div className=" col-xl-6 col-lg-6 col-6 d-flex flex-column align-items-start justify-content-evenly">
                    <h2>Exclusive Desert Experience</h2>
                    <p>Enjoy a smaller more intimate desert experience</p>
                    <div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div>
                    <div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div>
                    
                    <div className="b-housing d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-success" onClick={ExclusivSafari}>Success</button>
                    </div>

                </div>

            </div>
            </div>
            <div className="product mb-5">    
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-6">
                    <img src="jeep-safari.jpg" alt="" />
                </div>
                <div className=" col-xl-6 col-lg-6 col-6 d-flex flex-column align-items-start justify-content-evenly">
                    <h2>Jeep Adventure Safari</h2>
                    <p>Enjoy a smaller more intimate desert experience</p>
                    <div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div>
                    <div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div>
                    
                    <div className="b-housing d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-success" onClick={JeepSafari}>Success</button>
                    </div>
                    <div className="b-housing d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-success" onClick={JeepSafari}>Success</button>
                    </div>


                </div>

            </div>
            </div>
            <div className="product mb-5">    
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-6">
                    <img src="Camel-Ride.webp" alt="" />
                </div>
                <div className=" col-xl-6 col-lg-6 col-6 d-flex flex-column align-items-start justify-content-evenly">
                    <h2>Camel Ride Experience</h2>
                    <p>Enjoy a smaller more intimate desert experience</p>
                    <div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div>
                    <div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div>
                    
                    <div className="b-housing d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-success" onClick={CamelRide}>Success</button>
                    </div>
                    <div className="b-housing d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-success" onClick={CamelRide}>Success</button>
                    </div>


                </div>

            </div>
            </div><div className="product mb-5">    
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-6">
                    <img src="Horseback-Riding.webp" alt="" />
                </div>
                <div className=" col-xl-6 col-lg-6 col-6 d-flex flex-column align-items-start justify-content-evenly">
                    <h2>Horseback Ride</h2>
                    <p>Enjoy a smaller more intimate desert experience</p>
                    <div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div>
                    <div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div><div className=" text d-flex align-items-center justify-content-start
                    ">
                   <GiCheckMark color="#d4af37" ></GiCheckMark>
                   
                    <p className="ms-2">Hotel pick-up and drop-off in a private 4-wheel drive vehicle</p>
                    
                    </div>
                    
                    <div className="b-housing d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-success" onClick={HorsebackRide}>Success</button>
                    </div>
                    <div className="b-housing d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-success" onClick={HorsebackRide}>Success</button>
                    </div>


                </div>

            </div>
            </div>
            </div>
            

        </div>
    );
}
export default DeserEx;