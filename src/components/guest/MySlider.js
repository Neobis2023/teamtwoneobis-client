// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import YouTube from 'react-youtube';

function VideoPlayer({ videoUrl }) {
  const match = videoUrl.match(/v=([a-zA-Z0-9_-]{11})/);
  const videoId = match ? match[1] : null;
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <YouTube videoId={videoId} opts={opts} onReady={onReady} />
  );
}

const MySlider = ({ videoblog = null, events = null }) => {
  return (
    <div className="mySwiper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        direction={"horizontal"}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        // slidesPerGroup={3}
        spaceBetween={60}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >

        {videoblog &&
          videoblog.map((videoUrl, index) => {
            return (
              <SwiperSlide key={index}>
                <VideoPlayer key={videoUrl} videoUrl={videoUrl}/>
                <p>Title</p>
              </SwiperSlide>
            );
          })}
        {events &&
          events.map((el, index) => {
            return (
              <SwiperSlide key={index} className="h-auto">
                <div className="relative">
                  <img
                    src={el.img}
                    alt={el.title}
                    className="mx-auto w-full rounded"
                  />
                  <div className="rounded-b w-full text-center absolute bottom-0 left-0 right-0 font-semibold text-xl backdrop-blur-md h-[20%] flex items-center justify-center">
                    {el.title}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default MySlider;
