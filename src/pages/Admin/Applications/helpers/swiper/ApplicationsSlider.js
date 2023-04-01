import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Events from "../../components/Events";
import { NavLink } from "react-router-dom";

const ApplicationsSlider = ({ data, event }) => {
  return (
    <div className="applicationsSlider w-[700px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        direction={"horizontal"}
        slidesPerView={"auto"}
        spaceBetween={5}
        loop={true}
        centeredSlides={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
      >
        {data &&
          data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <NavLink
                  to={
                    event === "mentoring"
                      ? `/admin/applications/mentoring-program/${item.title
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`
                      : event === "trainings"
                      ? `/admin/applications/trainings/${item.title
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`
                      : event === "forums"
                      ? `/admin/applications/forums/${item.title
                          .toLowerCase()
                          .split(" ")
                          .join("-")}`
                      : null
                  }
                  key={item.id}
                  className={`adminEventsLink border border-[#79768D] rounded-[10px] p-2 flex flex-col gap-2 w-fit min-w-[200px] mb-6`}
                >
                  <div className="flex items-center justify-between gap-8">
                    <p className="text-[1.25rem] font-bold">
                      <span>{item.title}</span>
                    </p>
                    {item.city && (
                      <p className="font-bold text-[0.875rem]">{item.city}</p>
                    )}
                  </div>
                  <p className="text-[0.875rem] font-bold mb-2">
                    Статус: <span>{item.status}</span>
                  </p>
                  <p className="text-[0.875rem] font-semibold">
                    Дедлайн: {item.deadline}
                  </p>
                </NavLink> 
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default ApplicationsSlider;
