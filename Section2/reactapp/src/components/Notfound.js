import React from 'react'
import myimg from '../image/page_not_found.png';
const Notfound = () => {
  return (
    <div className='card'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='photowithtext'>
            <img src={myimg} alt="" />
            <h5>PAGE NOT FOUND </h5>
            <h6>The page you are looking are might have been removed  had its </h6>
            name changed or its temporaral unavaliable
            <div className='btn'>HOME PAGE</div>
          </div>
          </div>
      </div>
    </div>




  )
}

export default Notfound