import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import search from '../assets/images/search.svg';

const AddButton = ({ action }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex gap-3 w-full">
      <div className="relative w-[60%] mb-6">
        <img src={search} className="absolute my-auto top-0 bottom-0 left-2" />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          id="gsearch"
          name="gsearch"
          placeholder="Поиск..."
          className="placeholder:text-[#616161] placeholder:text-[1rem] border border-[#662D91] rounded-[8px] pl-12 pr-2 py-2 outline-none w-full"
        />
      </div>

      <NavLink
        to={'/admin/edit/videoblog/add-video'}
        className="h-fit w-[40%] px-4 py-2 bg-[#9960C3] rounded-[8px] text-white flex justify-center"
      >
        {action}
      </NavLink>
    </div>
  );
};

export default AddButton;
