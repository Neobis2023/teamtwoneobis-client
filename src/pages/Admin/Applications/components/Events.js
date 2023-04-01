import React from "react";
import { NavLink } from "react-router-dom";

const Events = ({ data, event }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-[#403A64] flex gap-4 flex-wrap">
        {data.map((item) => {
          return (
            <NavLink to={
              ((event === 'mentoring') ? `/admin/applications/mentoring-program/${item.title.toLowerCase().split(' ').join('-')}` : (event === 'trainings') ? `/admin/applications/trainings/${item.title.toLowerCase().split(' ').join('-')}` : (event === 'forums') ? `/admin/applications/forums/${item.title.toLowerCase().split(' ').join('-')}` : null)
            }
              key={item.id}
              className={`adminEventsLink border border-[#79768D] rounded-[10px] p-2 flex flex-col gap-2 w-fit min-w-[200px]`}
            >
              <div className="flex items-center justify-between gap-8">
              <p className="text-[1.25rem] font-bold">
                <span>{item.title}</span>
              </p>
              {item.city && <p className="font-bold text-[0.875rem]">{item.city}</p>}
              </div>  
              <p className="text-[0.875rem] font-bold mb-2">
                Статус: <span>{item.status}</span>
              </p>
              <p className="text-[0.875rem] font-semibold">
                Дедлайн: {item.deadline}
              </p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
