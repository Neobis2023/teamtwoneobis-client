import React, { useState } from "react";
import trainingPhoto from "../assets/images/training-photo.svg";
import uploadDocument from "../assets/images/document-upload.svg";
import Input from "../../Input";
import Textarea from "../../Textarea";
import AddButton from "../../AddButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';

import {
  setLecturer, setLecturerId,
} from "../../../../../../helpers/reduxToolkit/adminSlice.";
import axios from "../api/axios";


const AddLecturer = ({ addLecturer, numberOfLecturer }) => {
//   const lecturerRedux = useSelector((state) => state.admin.lecturer);
//   const lecturerImageSrc = lecturerRedux.lecturerImage || null;
  const [isSaved, setIsSaved] = useState(false);
  const [lecturerImage, setLecturerImage] = useState(null);

  const [lecturerFullName, setLecturerFullName] = useState("");
  const [lecturerPosition, setLecturerPosition] = useState("");
  const [lecturerInfo, setLecturerInfo] = useState("");
  const [lecturerInfoKG, setLecturerInfoKG] = useState("");
  const [created, setCreated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLecturerImageChange = (event) => {
    // const file = event.target.files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onloadend = () => {
    //   setLecturerImage(reader.result);
    // };
    const file = event.target.files[0];
    setLecturerImage(file);
  };

  const handleLecturerImageClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", handleLecturerImageChange);
    input.click();
  };

//   const handleSaveLecturer = () => {
//     const formData = new FormData();
//     formData.append("image", lecturerImage);
//     const lecturerData = {
//       lecturerFullName,
//       image: formData, // store the base64-encoded string
//       jobTitle: lecturerPosition,
//       lecturerInfo,
//       lecturerInfoKG,
//     };
//     console.log(lecturerData, 'sss')
//     dispatch(setLecturer(lecturerData));
//     axios.post("/lecturer", lecturerData, {
//             headers: {
//               "Content-Type": "multipart/form-data",
              
//             }
//     }).then(res => console.log(res)).catch(err => console.log(err))
//   };
const handleSaveLecturer = () => {
    const formData = new FormData();
    formData.append("image", lecturerImage);
    formData.append("lecturerFullName", lecturerFullName);
    formData.append("jobTitle", lecturerPosition);
    formData.append("lecturerInfo", lecturerInfo);
    formData.append("lecturerInfoKG", lecturerInfoKG);
  
    axios.post("/lecturer", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(res => {console.log(res); dispatch(setLecturerId(res.data.id));setCreated(true)}).catch(err => console.log(err))
  };
  return (
    <div className="mt-6">
      <p className="mb-2 text-[#000000] font-semibold text-[0.875rem]">
        Спикер {numberOfLecturer || null}
      </p>
      <div className="flex flex-col gap-4">
        <div className="h-[300px]">
          <img
            src={lecturerImage ? URL.createObjectURL(lecturerImage) : trainingPhoto}
            alt="lecturer-photo"
            className="object-cover w-full h-full rounded-[10px]"
          />
        </div>
        <div
          className="flex gap-2 items-center border w-fit p-2 rounded-[10px] border-[#662D91] hover:cursor-pointer"
          onClick={handleLecturerImageClick}
        >
          <img src={uploadDocument} alt="upload-file" />
          <p>Загрузить фото</p>
        </div>
        <Input
          label={"Фамилия и Имя"}
          value={lecturerFullName}
          onChange={(e) => setLecturerFullName(e.target.value)}
        />
        <Input
          label={"Кем является"}
          value={lecturerPosition}
          onChange={(e) => setLecturerPosition(e.target.value)}
        />
        <Textarea
          label={"Информация"}
          value={lecturerInfo}
          onChange={(e) => setLecturerInfo(e.target.value)}
        />
        <Textarea
          label={"Информация на кыргызском языке"}
          value={lecturerInfoKG}
          onChange={(e) => setLecturerInfoKG(e.target.value)}
        />
        <div className="flex gap-2 items-center hover:cursor-pointer relative p-2">
            <input
              type="checkbox"
              id="isRequired"
              required
              checked={isSaved}
              onClick={() => { setIsSaved(curr => !curr); handleSaveLecturer()}}
            />
            <label htmlFor="isRequired" className="hover:cursor-pointer">
              Сохранить спикера
            </label>
            {!isSaved && <div className="absolute top-0 m-auto bottom-0 right-0 border p-2 text-[0.8rem] flex gap-2 items-center rounded-md">
              <InfoIcon />
              Обязательно сохраните спикера
            </div>}
          </div>
        <AddButton text={"Добавить спикера"} onClick={isSaved && addLecturer} />
      </div>
    </div>
  );
};

export default AddLecturer;
