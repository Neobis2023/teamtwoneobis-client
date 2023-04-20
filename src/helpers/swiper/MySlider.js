// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import line from "../../assets/images/mentorship/mentors/line.svg";
import Button from "../../UI/Button/Button";
import circle from "../../assets/images/mentorship/mentors/circle.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import YouTube from "react-youtube";
import { NavLink } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";

const VideoPlayer = React.memo(({ videoUrl }) => {
  const match = videoUrl.match(/v=([a-zA-Z0-9_-]{11})/);
  const videoId = match ? match[1] : null;
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  function onReady(event) {
    event.target.pauseVideo();
  }

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
});

const MySlider = ({
  videoblog = null,
  events = null,
  mentors = null,
  graduates = null,
  dataEvents = null,
}) => {
  const { t } = useTranslation();
  return (
    <div className="mySwiper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        direction={"horizontal"}
        slidesPerView={mentors || dataEvents ? 4 : 3}
        loop={true}
        centeredSlides={mentors || dataEvents ? false : true}
        spaceBetween={mentors || graduates || dataEvents ? 40 : 60}
        navigation={mentors || graduates || dataEvents ? false : true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
      >
        {videoblog &&
          videoblog.map((video, index) => {
            return (
              <SwiperSlide key={index}>
                <VideoPlayer key={index} videoUrl={video.videoUrl} />
                <p>{video.title}</p>
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

        {mentors &&
          mentors.map((mentor) => {
            return (
              <SwiperSlide key={mentor.id} className="mentors-swiper-slider">
                <div className="bg-[radial-gradient(50%_50%_at_50%_50%,_#FAEFFF_0%,_#E8E5FF_100%)] border border-solid border-[rgba(153,_96,_195,_0.5)] rounded-[40px] shadow-[0px_2px_8px_rgba(0,_0,_0,_0.25)] w-full flex flex-col gap-5 items-center text-center p-6">
                  <div className="relative flex items-center justify-center">
                    <img
                      src={mentor.img}
                      alt="ment"
                      className="absolute top-0 bottom-0 my-auto z-10 w-[78%] h-auto rounded-full"
                    />
                    <img
                      src={circle}
                      alt="circle"
                      className="relative w-[90%] h-auto"
                    />
                  </div>
                  <p className="text-[#471280] font-medium text-[clamp(1rem,_1.38vw,_1.5rem)]">
                    {mentor.fullName}
                  </p>
                  <img src={line} alt="line" />
                  <p className="font-normal text-[clamp(.5rem,_0.83vw,_1rem)] text-[#662D91]">
                    {mentor.desc}
                  </p>
                  <NavLink to="/">
                    <Button
                      text={t("Mentorship.fourthSection.button")}
                      className={"!rounded-[50px] text-[0.75rem] font-bold"}
                    />
                  </NavLink>
                </div>
              </SwiperSlide>
            );
          })}

        {graduates &&
          graduates.map((graduate) => {
            return (
              <SwiperSlide key={graduate.id} className="pb-[10%]">
                {/* <div className="relative flex justify-center w-full">
                <img src={graduate.img} alt='graduate' className="rounded-lg w-full"/>
                <div className="bg-[#ffffff] shadow-[0px_9px_32px_rgba(89,_92,_219,_0.05)] flex flex-col gap-3 justify-between rounded-[16px] absolute -bottom-[25%] top-[63%] w-[80%] h-fit p-6">
                  <p className="text-[#662D91] font-semibold text-[clamp(.8rem,_1.38vw,_1.5rem)] leading-[normal]">{graduate.title}</p>
                  <p className="text-[rgba(102,_45,_145,_0.6)] text-[clamp(0.5rem,_0.97vw,_1.17rem)] font-normal">{graduate.desc}</p>
                  <div>
                    <p className="text-[#662D91] text-[clamp(0.5rem,_0.97vw,_1.17rem)] font-medium">{graduate.fullName}</p>
                    <p className="text-[rgba(102,_45,_145,_0.6)] text-[clamp(0.5rem,_0.97vw,_1.17rem)] font-medium">{graduate.place}</p>
                  </div>
                </div>
              </div> */}
                <div className="relative flex justify-center w-full">
                  <img
                    src={graduate.img}
                    alt="graduate"
                    className="rounded-lg w-full"
                  />
                  <div className="bg-[#ffffff] shadow-[0px_9px_32px_rgba(89,_92,_219,_0.05)] flex flex-col gap-3 justify-between rounded-[16px] absolute -bottom-[25%] top-[63%] w-[80%] h-fit p-6">
                    <p className="text-[#662D91] font-semibold text-[clamp(.8rem,_1.38vw,_1.5rem)] leading-[normal]">
                      {t("Mentorship.fifthSection.reviewTitle")}
                    </p>
                    <p className="text-[rgba(102,_45,_145,_0.6)] text-[clamp(0.5rem,_0.97vw,_1.17rem)] font-normal">
                      {graduate.desc}
                    </p>
                    <div>
                      <p className="text-[#662D91] text-[clamp(0.5rem,_0.97vw,_1.17rem)] font-medium">
                        {graduate.fullName}
                      </p>
                      <p className="text-[rgba(102,_45,_145,_0.6)] text-[clamp(0.5rem,_0.97vw,_1.17rem)] font-medium">
                        {graduate.place}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        {dataEvents &&
          dataEvents.map((event) => {
            return (
              <SwiperSlide key={event.id}>
                <div className="flex flex-col gap-4">
                  <img src={event.imgSource} alt={"event"} />
                  <p className="text-[#5D5A88] font-bold text-[clamp(1.2rem,_1.66vw,_1.8rem)]">
                    {event.eventName}
                  </p>
                  <p className="text-[#9795B5] text-[clamp(.8rem,_1.1vw,_1.3rem)]">
                    {event.description}
                  </p>
                  <NavLink to="/" className={"w-fit"}>
                    <Button
                      text={t('Trainings.fourthSection.button')}
                      className={
                        "!rounded-[40px] text-base font-semibold !text-[#662D91] !bg-[#E8E5FF] border border-solid border-[#CDB4DB]"
                      }
                    />
                  </NavLink>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default MySlider;
