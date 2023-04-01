import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Events from "../../modules/Events/Events";

const ApplicationsSlider = ({ events }) => {
  return (
    <div className="eventsSlider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        direction={"horizontal"}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
            delay: 2500, // adjust the delay as needed
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: 1000
        }}

      >
        {events &&
          events.map((event) => {
            return (
              <SwiperSlide key={event.id}>
                <Events
                  title={'Предстоящие тренинги'}
                  imgSource={event.imgUrl}
                  eventName={event.eventName}
                  description={event.description}
                  time={event.time}
                  date={event.date}
                  location={event.location}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ApplicationsSlider