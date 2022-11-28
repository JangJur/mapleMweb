import React from 'react';
import './BoxComp.css';

function BoxComp(props) {
  console.log('props : ', props);
  return (
    <div className='BoxComp'>
      <h1>{props.title}</h1>
      <img src={props.img} alt={''} />
    </div>
  )
}

export default BoxComp
