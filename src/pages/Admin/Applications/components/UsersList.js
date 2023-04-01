import React, { useState } from "react";
import User from "./User";
import Modal from "./Modal";

const UsersList = ({ data }) => {
  const [isModal, setIsModal] = useState(false);
  const [userForModal, setUserForModal] = useState({});
  const handleClick = (user) => {
    setIsModal(true);
    setUserForModal(user);
  };
  const handleClose = () => {
    setIsModal(false);
  }
  return (
    <div className="mt-6 max-w-full w-full">
      <div className="flex justify-between">
        <h1 className="text-[#662D91] font-bold text-2xl mb-6">Заявки</h1>
        <div className="text-[#79768D] font-semibold text-[1rem]">
          Всего {data.length}
        </div>
      </div>
      <div className="w-full bg-[#FDFDFD] rounded-[20px] p-4">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 items-center justify-between text-[#28252D] font-bold text-[0.875rem] mb-4">
          <div>Имя и фамилия</div>
          <div>Электронная почта</div>
          <div>Номер телефона</div>
          <div>Результат</div>
          <div className="justify-self-center">Подробная анкета</div>
        </div>
        <div>
          {data.map((user) => {
            return <User {...user} key={user.id} handleClick={handleClick}/>;
          })}
        </div>
        {(isModal && userForModal) && <Modal {...userForModal} handleClose={handleClose}/>}
      </div>
    </div>
  );
};

export default UsersList;
