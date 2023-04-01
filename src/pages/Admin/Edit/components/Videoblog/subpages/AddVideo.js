import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import videoPhoto from "../../../assets/images/video-photo.svg";
import Input from "../../Input";
import axios from "axios";
import SaveButton from "../../../../components/SaveButton";
import Textarea from "../../Textarea";

const AddVideo = () => {
  const [category, setCategory] = useState("Здоровье");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState("");
  const [lecturerName, setLecturerName] = useState("");
  const [lecturerInfo, setLecturerInfo] = useState("");

    const handleSave = () => {
        const newVideoBlog = {
            videoUrl,
            title,
            description,
            lecturerName,
            // category
        }
        axios.post("https://girls4girls.herokuapp.com/api/video-blog/post", newVideoBlog).then(res => console.log(res))
    }

  return (
    <div className="w-[60%]">
      <h2 className="text-[#000000] font-semibold mb-2">Название видеоурока</h2>
      <div className="flex flex-col gap-3">
        <div className="h-[200px]">
          {!videoUrl ? (
            <img src={videoPhoto} alt="video photo" />
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <Input label={"Ссылка"} onChange={(e) => setVideoUrl(e.target.value)} value={videoUrl}/>
        <Input label={"Название"} onChange={(e) => setTitle(e.target.value)} value={title}/>
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
        <Textarea label={'Описание'} value={description} onChange={(e) => setDescription(e.target.value)}/>
        <Input label={"Лектор"} onChange={(e) => setLecturerName(e.target.value)} value={lecturerName}/>
        <Input label={"Информация о лекторе"} onChange={(e) => setLecturerInfo(e.target.value)} value={lecturerInfo}/>
        <div className="flex gap-6">
          <SaveButton onClick={handleSave}/>
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
