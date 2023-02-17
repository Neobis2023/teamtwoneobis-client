import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider ({ videosProp }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videosProp);
  }, [videosProp]);

  return (
    <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={60}
        slidesPerView={3}
        loop={true}
        navigation
        // scrollbar={{ draggable: true }}
        centeredSlides={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {videos.map((video, index) => {
            return (<SwiperSlide key={index}>
                {video.video}
                <p className="text-center">{video.title}</p>
            </SwiperSlide>)
        })}
      </Swiper>
  );
}

export default Slider;