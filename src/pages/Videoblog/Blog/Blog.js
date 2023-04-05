import React, { memo } from 'react'
import heart from '../Blogs/assets/images/heart.svg'
import YouTube from "react-youtube";


const VideoPlayer = React.memo(({ videoUrl }) => {
  const match = videoUrl.match(/v=([a-zA-Z0-9_-]{11})/);
  const videoId = match ? match[1] : null;
  const opts = {
    height: "230px",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  function onReady(event) {
    event.target.pauseVideo();
  }

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
})

const Blog = memo(({ blog }) => (
    <div className="basis-[31%] rounded-[8px] flex h-auto flex-col gap-2 mb-[5%]">
      <div className="flex flex-col gap-2">
        {/* <iframe
          width="100%"
          height="auto"
          src={blog.videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
        <div className=''>
          <VideoPlayer videoUrl={blog.videoUrl}/>
        </div>
        {/* <VideoPlayer videoUrl={'https://www.youtube.com/watch?v=zvTr3P43yUg'}/> */}
  
        <div className="flex justify-between items-center">
          <p className="text-[#403A64]">
            Категория: {" "}
            <span
              className={`border-[0.5px] border-solid rounded-[4px] border-[#CDB4DB] px-1 py-px bg-[rgba(102,_45,_145,_0.6)] text-white`}
            >
              Образование
            </span>
          </p>
          <p className="text-[#AFAAD0] font-semibold text-[clamp(0.62rem,_0.97vw,_1.1rem)]">
            {blog.postViewCount} просмотров
          </p>
        </div>
      </div>
      <div className=''>
        <div className="flex justify-between items-center">
          <p className="text-[#662D91] font-bold text-[clamp(1rem,_1.39vw,_1.5rem)]">
            {blog.title}
          </p>
          <img src={heart} alt="heart" className="w-[6%]" />
        </div>
        <div className="flex justify-between items-center">
          <p className="text-[#AFAAD0] font-semibold text-[clamp(0.62rem,_0.97vw,_1.1rem)]">
            Лектор: {blog.lecturerName}
          </p>
          <p className="text-[#AFAAD0] font-semibold text-[clamp(0.62rem,_0.97vw,_1.1rem)]">
            {blog.createdAt}
          </p>
        </div>
      </div>
    </div>
  ));
export default Blog