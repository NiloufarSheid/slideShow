import React from 'react';
import { FaChevronRight,FaChevronLeft} from 'react-icons/fa';

const Review = () => {
  return (
    <div className='review'>
        <div className="review-img">
            <img src='./profileone.png' />
        </div>
        <h4 className='author'>نیلوفر شید</h4>
        <p className='job'>برنامه نویس</p>
        <p className='info'>ذتاذزریذزتنیذزنتذستیزذتیسذزتایذزیذزتیذزیذزیازذیتزذرتایرزیتاذزاتیذ زاتیرثزغلیثزلغثلزثلذزذلثغزلعغثلزعثلذ</p>
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