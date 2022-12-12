import React, { useState, useEffect } from 'react';
import './BoxComp.css';

function BoxComp(props) {

  const [img, setImg] = useState('/ledya-notes/img/레댜.jpg');

  useEffect(() => {
    console.log('props.img : ', props.img);
    if (props.img !== '') {
      setImg(props.img);
    }
  }, [props]);

  return (
    <div className='BoxComp' style={{  }}>
        <img src={img} alt={''} width="400" height="400" style={{ width: "100%", height: "auto" }} />
    </div>
  )
}

export default BoxComp
