import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import search from '../assets/images/search.svg';

const LeftTop = () => {
    const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <h1 className="text-[#662D91] font-bold text-2xl mb-3">Обратная связь</h1>
      <div className="mb-3 relative">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          id="gsearch"
          name="gsearch"
          placeholder="Поиск..."
          className="w-full placeholder:text-[#616161] placeholder:text-[1rem] bg-[#F9F9F9] border border-none rounded-[8px] pl-12 pr-2 py-2 outline-none"
        />
        <img
          src={search}
          alt="search-icon"
          className="absolute my-auto top-0 bottom-0 left-2"
        />
      </div>
      <div className="flex justify-between mb-4 text-[#303030] text-[0.875rem]">
        <NavLink to={"/admin/feedback/all"} className='messagesLink'>Все</NavLink>
        <NavLink to={"/admin/feedback/read"} className='messagesLink'>Прочитанные</NavLink>
        <NavLink to={"/admin/feedback/favorites"} className='messagesLink'>Избранные</NavLink>
      </div>
    </div>
  );
};

export default LeftTop;
