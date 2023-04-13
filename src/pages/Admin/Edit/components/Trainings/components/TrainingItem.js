import React, { useState } from "react";
import AddTraining from "./AddTraining";
import AddLecturer from "./AddLecturer";

const TrainingItem = () => {
  const [countLecturers, setCountLecturers] = useState(1);


  const handleLecturers = () => {
    const count = [];
    for (let i = 0; i < countLecturers; i++) {
      count.push(i);
    }

    return count.map((number, index) => <AddLecturer addLecturer={addLecturer} numberOfLecturer={index+1} />) 
  }

  const addLecturer = () => {
    setCountLecturers(curr => curr + 1);
  }

  return (
    <div className="w-[70%] mb-6">
      <AddTraining />
      {handleLecturers()}
    </div>
  );
};

export default TrainingItem;
