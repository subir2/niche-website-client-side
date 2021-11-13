import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './ReviewHome.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from 'react-rating';
const ReviewHome = () => {

  const [show,setShow]=useState([]);
  useEffect(() => {
    fetch("https://intense-ravine-08808.herokuapp.com/showReview")
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, []);
  console.log(show);
    return (
        <div>
          <h1>Our Clients Review</h1><hr/>
              <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
    
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
   
    

    {show.map(user=>(
      
      <SwiperSlide className="slide col-md-4 col-sm-4">
        <div className="slide-content">
          <div className="user-image">
         <img src="/user1.png"alt=" " className="user-photo"/>
          </div>
          <div>
          <p><i>{(user?.email).substring(0, user?.email.lastIndexOf("@"))}</i></p>
        
         <p><i>"{user?.comments}"</i></p>
         <Rating 
initialRating={parseInt(user?.ratings)}
emptySymbol="far fa-star icon-sm"
fullSymbol="fas fa-star icon-sm"
readonly
></Rating>
         </div>
        </div>

      </SwiperSlide>
      
    ))}
        </Swiper>    
        </div>
    );
};

export default ReviewHome;