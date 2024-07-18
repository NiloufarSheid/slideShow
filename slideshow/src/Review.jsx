import React, { useState } from 'react';
import { FaChevronRight,FaChevronLeft} from 'react-icons/fa';
import persons from './data';

const Review = () => {
 const [index,setIndex]=useState(0);
 const{name,job,image,text}=persons[index];
 
  return (
    <div className='review'>
        <div className="review-img">
            <img src={image} />
        </div>
      
        <h4 className='author'> {name}</h4>
        <p className='job'> {job}</p>
        <p className='info'> {text}</p>
        <div className='all-btn'>
        <div className="review-button">
            <button><FaChevronRight/></button>
            <button><FaChevronLeft/></button>
            </div>
            <div>

        <button className='random-btn'>تصادفی</button>
        </div>
        </div>
    </div>
  );
}

export default Review;