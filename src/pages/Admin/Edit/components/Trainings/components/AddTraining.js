import React, { useState } from "react";
import trainingPhoto from "../assets/images/training-photo.svg";
import uploadDocument from "../assets/images/document-upload.svg";
import Input from "../../Input";
import Textarea from "../../Textarea";
import AddButton from "../../AddButton";
import { useDispatch, useSelector } from "react-redux";
import { setTrainingAddQuestionnaire } from "../../../../../../helpers/reduxToolkit/toolkitSlice";
import { useNavigate } from "react-router-dom";
import InputDate from "../../InputDate";
import {
  setTraining,
} from "../../../../../../helpers/reduxToolkit/adminSlice.";

const AddTraining = () => {
  const trainingRedux = useSelector((state) => state.admin.training);
  const trainingImageSrc = trainingRedux.trainingImage || null;

  const [trainingImage, setTrainingImage] = useState(null);

  const [title, setTitle] = useState("");
  const [titleKG, setTitleKG] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionKG, setDescriptionKG] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNameChange = (name) => {
    setTitle(name);
    dispatch(setTrainingAddQuestionnaire(name));
  };

  const handleTrainingImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setTrainingImage(reader.result);
    };
  };

  const handleTrainingImageClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", handleTrainingImageChange);
    input.click();
  };

  const handleAddQuest = () => {
    const trainingData = {
      title,
      titleKG,
      trainingImage, // store the base64-encoded string
      eventDate,
      time,
      location,
      description,
      descriptionKG,
    };
    dispatch(setTraining(trainingData));
    navigate("add-questionnaire");
  };

  const handleEventDateChange = (date) => {
    setEventDate(date);
  };
  return (
    <div>
      <p className="mb-2 text-[#000000] font-semibold text-[0.875rem]">
        Тренинг
      </p>
      <div className="flex flex-col gap-4">
        <div className="h-[300px]">
          <img
            src={trainingImageSrc || trainingImage || trainingPhoto}
            alt="training-photo"
            className="object-cover w-full h-full rounded-[10px]"
          />
        </div>

        <div
          className="training-image flex gap-2 items-center border w-fit hover:cursor-pointer p-2 rounded-[10px] border-[#662D91]"
          onClick={handleTrainingImageClick}
        >
          <img src={uploadDocument} alt="upload-file" />
          <p>Загрузить фото</p>
        </div>
        <Input
          label={"Название"}
          value={trainingRedux.title || title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label={"Название на кыргызском языке"}
          value={trainingRedux.titleKG || titleKG}
          onChange={(e) => setTitleKG(e.target.value)}
        />
        <div className="flex gap-2">
          <InputDate
            label={"Дата"}
            selected={trainingRedux.eventDate || eventDate}
            onChange={handleEventDateChange}
          />
          <Input
            label={"Время"}
            value={trainingRedux.time || time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <Input
          label={"Локация"}
          value={trainingRedux.location || location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Textarea
          label={"Описание"}
          value={trainingRedux.description || description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Textarea
          label={"Описание на кыргызском"}
          value={trainingRedux.descriptionKG || descriptionKG}
          onChange={(e) => setDescriptionKG(e.target.value)}
        />
        <AddButton text={"Добавить анкету"} onClick={handleAddQuest} />
      </div>
    </div>
  );
};

export default AddTraining;
