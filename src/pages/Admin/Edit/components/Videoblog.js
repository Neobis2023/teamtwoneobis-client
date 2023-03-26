import React, { useEffect, useState } from "react";
import search from "../assets/images/search.svg";
import videoIcon from '../assets/images/video-icon.svg';
import axios from "axios";
import AddButton from "./AddButton";

const Video = ({ title }) => {
    return (<div className="flex justify-between py-2 px-4 bg-[#EAF0FF] rounded-[8px] my-2">
        <p className="text-[#292D32] font-semibold text-[0.875rem]">{title}</p>
        <img src={videoIcon} alt='video-icon'/>
    </div>)
}

const Videoblog = () => {
  
  const [videos, setVideos] = useState(null); 

  useEffect(()  => {
    axios.get("https://girls4girls.herokuapp.com/api/video-blog").then(response => setVideos(response.data.data));
  }, [])

  console.log(videos)
  return (
    <section className="w-full">
      {/* <div className="flex gap-3">
        <div className="relative w-[60%] mb-6">
          <img src={search} className="absolute my-auto top-0 bottom-0 left-2"/>
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

        <button type="button" className="h-fit w-[40%] px-4 py-2 bg-[#9960C3] rounded-[8px] text-white">{action}</button>
      </div> */}
      <AddButton action={'Добавить видео'}/>
      <div>
        {/* {videos && videos.map((video) => <Video {...video}/>)} */}
        {videos && <Video {...videos[0]}/>}
        {videos && <Video {...videos[0]}/>}
        {videos && <Video {...videos[0]}/>}
        {videos && <Video {...videos[0]}/>}
        {videos && <Video {...videos[0]}/>}
        {videos && <Video {...videos[0]}/>}
        {videos && <Video {...videos[0]}/>}
        {videos && <Video {...videos[0]}/>}
        {videos && <Video {...videos[0]}/>}
      </div>
      
    </section>
  );
};

export default Videoblog;
