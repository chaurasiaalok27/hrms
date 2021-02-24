import React from 'react';

const DataCard = (props) => {
  return(
    <div className="main-container">
      <div className="data-container">
          <div>{`Good Moorning ${props.name}`} </div>
          <br/>
         <text>{props.data}</text>
      </div>
      <div className="image-container">
        <img src="image.svg" alt="image"></img>
      </div>
    </div>
  )
}

export default DataCard;