import React, { useEffect, useState } from "react";
import videoIcon from '../../assets/images/video-icon.svg';
import axios from "axios";
import AddButton from "../SearchAndAdd";

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
      <AddButton action={'Добавить видео'} to={'add-video'}/>
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
