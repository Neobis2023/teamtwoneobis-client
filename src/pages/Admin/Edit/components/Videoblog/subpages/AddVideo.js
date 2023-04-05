import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import videoPhoto from "../../../assets/images/video-photo.svg";
import Input from "../../Input";
import axios from "axios";
import SaveButton from "../../../../components/SaveButton";
import Textarea from "../../Textarea";
import YouTube from "react-youtube";

const VideoPlayer = React.memo(({ videoUrl }) => {
  const match = videoUrl.match(/v=([a-zA-Z0-9_-]{11})/);
  const videoId = match ? match[1] : null;
  const opts = {
    height: "200px",
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

const AddVideo = () => {
  const [category, setCategory] = useState("Здоровье");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState("");
  const [lecturerName, setLecturerName] = useState("");
  const [lecturerInfo, setLecturerInfo] = useState("");
  const [lecturerImage, setLecturerImage] = useState(null);

  // const handleSave = () => {
  //   const formData = new FormData();
  //   formData.append("image", lecturerImage);

  //   const newVideoBlog = {
  //     videoUrl,
  //     title,
  //     description,
  //     lecturerName,
  //     lecturerInfo,
  //     lecturerImage,
  //     category,
  //   };
  //   console.log(newVideoBlog)
  //   axios
  //     .post(
  //       "https://girls4girls.herokuapp.com/api/video-blog/post",
  //       newVideoBlog
  //     )
  //     .then((res) => console.log(res));
  //     console.log(newVideoBlog)
  // };
  
  const handleSave = () => {
    const formData = new FormData();
    formData.append("image", lecturerImage);
  
    const newVideoBlog = {
      videoUrl,
      title,
      description,
      lecturerName,
      lecturerInfo,
      category,
    };
  
    Object.keys(newVideoBlog).forEach((key) => {
      formData.append(key, newVideoBlog[key]);
    });
  
    axios
      .post("https://girls4girls.herokuapp.com/api/video-blog/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };


  const handleImageSelect = (e) => {
    setLecturerImage(e.target.files[0]);
  };

  return (
    <div className="w-[60%]">
      <h2 className="text-[#000000] font-semibold mb-2">Название видеоурока</h2>
      <div className="flex flex-col gap-3">
        <div className="h-[200px]">
          {!videoUrl ? (
            <img src={videoPhoto} alt="video photo" />
          ) : (
            <VideoPlayer videoUrl={videoUrl} />
          )}
        </div>
        <Input
          label={"Ссылка"}
          onChange={(e) => setVideoUrl(e.target.value)}
          value={videoUrl}
        />
        <Input
          label={"Название"}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div
          className="flex justify-between border rounded-[8px] px-1 py-4 pb-1  border-[#9960C3] hover:cursor-pointer relative"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          <p>{category}</p>
          <label className="absolute top-0 left-1 text-[#79768D] font-medium text-[0.75rem]">
            Категория
          </label>
          <ArrowDropDownIcon className="text-[#9960C3]" />
          <div
            className={`bg-[#9960C3] text-white rounded-[5px] px-4 py-2 ${
              !categoryOpen
                ? `hidden`
                : "absolute z-10 flex flex-col justify-between top-12"
            }`}
          >
            <p onClick={() => setCategory("Здоровье")}>Здоровье</p>
            <p onClick={() => setCategory("Образование")}>Образование</p>
            <p onClick={() => setCategory("Кухня")}>Кухня</p>
          </div>
        </div>
        <Textarea
          label={"Описание"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label={"Лектор"}
          onChange={(e) => setLecturerName(e.target.value)}
          value={lecturerName}
        />
        <Input
          label={"Информация о лекторе"}
          onChange={(e) => setLecturerInfo(e.target.value)}
          value={lecturerInfo}
        />
        {/* <img src={videoPhoto} /> */}
        <div className="flex flex-col gap-2">
          {lecturerImage ? (
            <img src={URL.createObjectURL(lecturerImage)} alt="Selected" />
          ) : (
            <img src={videoPhoto} />
          )}
          <input
            type="file"
            onChange={handleImageSelect}
            className=""
            accept="image/*"
          />
        </div>
        <div className="flex gap-6">
          <SaveButton onClick={handleSave} text={"Сохранить"} />
          <button
            type="button"
            className="rounded-[8px] bg-[transparent] text-[#9960C3] border border-[#9960C3] p-2"
          >
            Добавить тест
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
