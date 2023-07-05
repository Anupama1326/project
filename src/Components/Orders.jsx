import React from 'react'
import Hilton from '../Images/Hilton.jpg'
import Layalee from '../Images/Layalee.png'
import A2B from '../Images/A2B.png'

const Orders = () => {
  return (
    <div className='Orders'>
      <div className='orderleft'>
        <div className='cardorders'>
          <div className="Imgdivorder">
              <img src={Hilton} alt="Hilton" />
          </div>
          <div className="imgdescorder">
            <h1>Hilton</h1>
            <p>Never just stay, Stay Inspired</p>
            <button>Menu</button>
          </div>
        </div>
        <div className='cardorders'>
          <div className="Imgdivorder">
              <img src={Layalee} alt="Layalee" />
          </div>
          <div className="imgdescorder">
            <h1>Layalee</h1>
            <button>Menu</button>
          </div>
        </div>
        <div className='cardorders'>
          <div className="Imgdivorder">
              <img src={A2B} alt="A2B" />
          </div>
          <div className="imgdescorder">
            <h1>A2B</h1>
            <button>Menu</button>
          </div>
        </div>
      </div>
      <div className="orderright">

      </div>
    </div>
  )
}

export default Orders
