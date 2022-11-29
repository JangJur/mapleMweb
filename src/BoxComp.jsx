import React, { useEffect } from 'react';
import './BoxComp.css';

function BoxComp(props) {

  useEffect(() => {
    
  }, [props]);

  return (
    <div className='BoxComp'>
      <img src={props.img} alt={''} />
    </div>
  )
}

export default BoxComp
