import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Events from "../../modules/Events/Events";


const EventsSlider = ({ events }) => {
  const handleClick = (eventName, eventId) => {
    sessionStorage.setItem('eventName', JSON.stringify(eventName))
    sessionStorage.setItem('eventId', JSON.stringify(eventId))
    console.log('clicked', eventName, eventId);
  }
  
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
              <SwiperSlide key={event?.id}>
                <Events
                  eventId={event?.id}
                  imgSource={event?.images[0]?.url}
                  eventName={event?.title}
                  eventNameKG={event?.titleKG}
                  descriptionKG={event?.descriptionKG}
                  description={event?.description}
                  time={event?.time}
                  date={event?.eventDate}
                  location={event?.location}
                  handleClick={handleClick}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default EventsSlider;
