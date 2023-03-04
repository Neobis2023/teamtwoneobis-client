// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import line from '../../assets/images/mentorship/mentors/line.svg';
import Button from '../../UI/Button/Button';
import circle from '../../assets/images/mentorship/mentors/circle.svg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import YouTube from "react-youtube";
import { NavLink } from "react-router-dom";

function VideoPlayer({ videoUrl }) {
  const match = videoUrl.match(/v=([a-zA-Z0-9_-]{11})/);
  const videoId = match ? match[1] : null;
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
}

const MySlider = ({ videoblog = null, events = null, mentors = null, graduates = null }) => {
  return (
    <div className="mySwiper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        direction={"horizontal"}
        slidesPerView={mentors ? 4 : 3}
        loop={true}
        // loopFillGroupWithBlank={false}
        // centeredSlides={true}
        // slidesPerGroup={3}
        spaceBetween={mentors ? 40 : 60}
        navigation={mentors ? false : true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        // slidesOffsetAfter={mentors && 300}
      >
        {videoblog &&
          videoblog.map((videoUrl, index) => {
            return (
              <SwiperSlide key={index}>
                <VideoPlayer key={videoUrl} videoUrl={videoUrl} />
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
                  <div className="rounded-b w-full text-center absolute bottom-0 left-0 right-0 font-semibold text-[clamp(90%,_1.5vw,_2rem)] leading-[2vw] backdrop-blur-md h-[20%] flex items-center justify-center">
                    {el.title}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        {mentors && mentors.map((mentor) => {
          return (
            <SwiperSlide key={mentor.id} className='mentors-swiper-slider'>
              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,_#FAEFFF_0%,_#E8E5FF_100%)] border border-solid border-[rgba(153,_96,_195,_0.5)] rounded-[40px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.25)] w-full flex flex-col gap-5 items-center text-center p-6">
                <div className="relative flex items-center justify-center">
                  <img src={mentor.img} alt='ment' className="absolute top-0 bottom-0 my-auto z-10 w-[78%] h-auto"/> 
                  <img src={circle} alt='circle' className="relative w-[90%] h-auto"/>
                </div>
                <p className="text-[#471280] font-medium text-[clamp(1rem,_1.38vw,_1.5rem)]">{mentor.fullName}</p>
                <img src={line} alt='line'/>
                <p className="font-normal text-[clamp(.5rem,_0.83vw,_1rem)] text-[#662D91]">
                  {mentor.desc}
                </p>
                <NavLink to='/'>
                  <Button text='Узнать подробнее' className={'!rounded-[50px] text-[0.75rem] font-bold'}/>
                </NavLink>
              </div>
            </SwiperSlide>
          )
        })}

        {graduates && graduates.map((graduate) => {
          return (
            <SwiperSlide key={graduate.id}>
              <div>
                <img src={graduate.img} alt='graduate'/>
                <div>
                  <p>{graduate.title}</p>
                  <p>{graduate.desc}</p>
                  <div>
                    {graduate.fullName}
                    {graduate.place}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default MySlider;
