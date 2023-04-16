import React, { useEffect } from "react";
import Button from "./Button/Button";
import userPhoto from './assets/images/video-photo.svg'

const Events = ({ imgSource, eventName, eventId, description, time, date, location, handleClick }) => {
  const eventUrl = eventName?.toLowerCase().split(' ').join('-');
  const newDate = new Date(date);
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const formattedDate = newDate.toLocaleDateString("en-GB", options);

  return (
    <div className="pb-20">
      <div className="myWrapper flex justify-between items-center">
        <div className="basis-1/2 flex flex-col gap-8">
          <p className="text-[#9960C3] font-bold text-[clamp(2.2rem,_2.5vw,_2.5rem)]">
            {eventName}
          </p>
          <div className="text-[clamp(.8rem,_1.1vw,_1.3rem)] flex flex-col gap-2">
            <div className="text-[#9E7CB8]">
              <p>
                <span className="font-bold">Дата:</span> {formattedDate}{" "}
              </p>
              <p>
                <span className="font-bold">Время:</span> {time}
              </p>
              <p>
                <span className="font-bold">Локация:</span> {location}
              </p>
            </div>
            <div className="text-[#403A64] font-normal">
              {description}
            </div>
          </div>
          <div className="flex gap-2">
            <Button where={`${eventUrl}/apply`} text={'Подать заявку'} className={'text-[#662D91] bg-[#E8E5FF]'} onClick={() => handleClick(eventName, eventId)}/>
            <Button where={'/'} text={'Подробнее'} className={'text-[#662D91]'}/>
          </div>
        </div>
        <div className="basis-1/2 h-[350px] rounded-md">
          <img
            src={imgSource || userPhoto}
            alt="girls"
            loading="lazy"
            className="w-full h-full object-cover ml-auto min-w-[320px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
