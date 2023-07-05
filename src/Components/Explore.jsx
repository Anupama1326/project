import React from "react";
import vadapalani from "../Images/Vadapalani.jpg";
import Guindy from "../Images/Guiny.jpg";
import Ekattuthangal from "../Images/Ekattuthangal.jpg";


const Explore = () => {
  return (
    <div className="ExplorePage">
      {/* <div className='Cards'> */}
      <div className="Card">
      <div className="Imgdiv">
          <img src={Guindy} alt="Guindy" />
        </div>
        <div className="imgdesc">
          <h1>Guindy</h1>
          <button>Show Hotels</button>
        </div>
      </div>
      <div className="Card">
      <div className="Imgdiv">
          <img src={vadapalani} alt="Vadapalani" />
        </div>
        
        <div className="imgdesc">
          <h1>Vadapalani</h1>
          <button>Show Hotels</button>
        </div>
      </div>
      <div className="Card" onClick={() => alert("Hello from here")}>
        <div className="Imgdiv" >
          <img src={Ekattuthangal} alt="Ekattuthagal" />
        </div>
        <div className="imgdesc">
          <h1>Ekattuthangal</h1>
          <button>Show Hotels</button>
        </div>
        
      </div>
      {/* </div> */}
    </div>
  );
};

export default Explore;
