import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./homeStyle.scss";
import videoSrc from "./bg-vid.mp4";
import FAQ from "./FAQ";
import Featured from "./featured";
import SecondFeature from "./second-feature";
import Slider from "./slider";


const Home=()=>{
    return(
       <div id="home">
        
            
        
        <div id="vid-container">
        <video className="video-bg" autoPlay loop muted playsInline preload="true">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div id="overlay"className=" d-flex flex-column align-items-center justify-content-center">
        <h1>Welcome to Dubai Habibi</h1>
        <h3>Welcome to richest toursit country lets have shisha</h3>
        <button type="button" class="btn btn-outline-light">Enta Habibi</button>
      </div>
        </div>
        <div id="second-page" className="d-flex flex-column align-items-center justify-content-evenly">
        
        <Featured></Featured>
        <SecondFeature></SecondFeature>
        </div>
        <div id="third-page" className="d-flex  flex-column align-items-center justify-content-between">
          <Slider></Slider>
        </div>
        <FAQ></FAQ>
       </div>
    );
}
export default Home;
