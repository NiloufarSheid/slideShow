import React, { useState } from 'react';
import { FaChevronRight,FaChevronLeft} from 'react-icons/fa';
import persons from './data';

const Review = () => {
 const [index,setIndex]=useState(0);
 const{name,job,image,text}=persons[index];

 const checkNumber=(number)=>{
if(number>persons.length -1){
  return 0
}
if(number<0){
  return persons.length -1
}
return number
 }


 const nextSlide=()=>{
  setIndex((index)=>{
    let newIndex=index+1
    return checkNumber(newIndex)
  })
 }


 const preSlide=()=>{
  setIndex((index)=>{
    let newIndex=index-1
    return checkNumber(newIndex)
  })
 }

 const randomPerson=(randomNumber)=>{
  randomNumber=Math.floor(Math.random() * persons.length)
  if(randomNumber===index){
    randomNumber = index + 1
  }
  setIndex(checkNumber(randomNumber))
 }
 
  return (
    <div className='review'>
        <div className="review-img">
            <img src={image} />
        </div>
      
        <h4 className='author'>{name}</h4>
        <p className='job'> {job}</p>
        <p className='info'> {text}</p>
        <div className='all-btn'>
        <div className="review-button">
            <button onClick={nextSlide}><FaChevronRight/></button>
            <button onClick={preSlide}><FaChevronLeft/></button>
            </div>
            <div>

        <button className='random-btn'  onClick={randomPerson}>تصادفی</button>
        </div>
        </div>
    </div>
  );
}

export default Review;