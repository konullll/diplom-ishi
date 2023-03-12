import React, { useEffect } from 'react'
import './CountElement.css'
import CountUp from 'react-countup';
import AOS from "aos";

const CountElement = ({count_image,count_amount,count_title}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='count-element-counter' data-aos="zoom-out" data-aos-duration="1500">
        <div className='ce-image'><img src={count_image} alt="" /></div>
        <h2><span><CountUp end={count_amount} /></span>+</h2>
        <p>{count_title}</p>
    </div>
  )
}

export default CountElement