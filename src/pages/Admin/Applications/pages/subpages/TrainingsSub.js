import React, { useEffect, useState } from "react";
import UsersList from "../../components/UsersList";
import userPhoto from "../../assets/images/userPhoto.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const TrainingsSub = () => {
  const trainingId = useSelector((state) => state.admin.currentTrainingIdApplications);
  const [users, setUsers] = useState([]);
  console.log(trainingId, 'current training')
  useEffect(() => {
    axios.get(`https://girls4girls.herokuapp.com/api/training/apply/${trainingId}`).then(res => setUsers(res.data))
  }, [trainingId])
  console.log(users)
  return (
    <div className="mt-6">
      <NavLink
        to={"/"}
        className="w-fit text-[#9960C3] font-bold text-[0.875rem] bg-transparent border border-[#9960C3] px-3 py-2 rounded-[10px]"
      >
        Посмотреть анкету
      </NavLink>
      <UsersList key={trainingId} data={users && users} />
    </div>
  );
};

export default TrainingsSub;
