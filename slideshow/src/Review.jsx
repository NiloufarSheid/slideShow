import React from 'react';
import { FaChevronRight,FaChevronLeft} from 'react-icons/fa';

const Review = () => {
  return (
    <div className='review'>
        <div className="review-img">
            <img src='' />
        </div>
        <h4 className='author'>نیلوفر شید</h4>
        <p className='job'></p>
        <p className='info'></p>
        <div className="review-button">
            <button><FaChevronRight/></button>
            <button><FaChevronLeft/></button>
        </div>
        <button className='random-btn'></button>
    </div>
  );
}

export default Review;