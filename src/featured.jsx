import "./featuredstyle.scss";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate=useNavigate();
  const handleSearch = () => {
    navigate("/dsaf");
  };
  return (
    <div className="featured">
      <div className="featuredItem" onClick={handleSearch}>
        <img
          // src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          src="img-1.webp"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Desert Safari</h1>
          
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="img-3.webp"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Private Safari</h1>
          
        </div>
      </div>
      <div id="feature-last" className="featuredItem">
        <img
          src="img-2.webp"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Camping</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
