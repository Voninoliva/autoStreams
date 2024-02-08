import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "./PictureSwaper.css";


const PictureSwaper = (props) => {

  const [selectedBox, setSelectedBox] = useState(0);
  const [direction, setDirection] = useState("");


  const handleIndex = (index)=>{
    if(props.pictures.length<=index|| 0>index) return
    setSelectedBox(index)
  }
  return (
    <div className="picture_swaper_container">
      <div className={`front_pic `}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(e) => {
            handleIndex(e.activeIndex);
          }}
          // onSwiper={(swiper: any) => ""}
        >
          <SwiperHandler indexPicture={selectedBox} />
          <div className="left_swiper" onClick={()=>{
            handleIndex(selectedBox-1)
          }}>
            Left
          </div>

          <div className="right_swiper"  onClick={()=>{
            handleIndex(1 +selectedBox)
          }}>
            Right 
          </div>
          {props.pictures.map((key, index) => (
            <SwiperSlide key={index}>
              <div className="slide_pic">
                <img src={key} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     
    </div>
  );
};


const SwiperHandler = (props) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(props.indexPicture);
  }, [props.indexPicture]);
  return <></>;
};

export default PictureSwaper;
