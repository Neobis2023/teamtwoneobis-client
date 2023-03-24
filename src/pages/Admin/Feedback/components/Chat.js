import React from "react";
import MessageActions from "./MessageActions";
import TextMessage from "./TextMessage";

const Chat = ({ user }) => {
  return (
    <section className="pr-4 min-h-[700px] max-h-[700px]">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex gap-2">
                <img src={user.imgUrl} alt="user" />
                <div>
                  <p className="text-[#303030] font-semibold">{user.fullName}</p>
                  <p className="text-[0.7rem] text-[#AEAEAE]">
                    От: <span className="text-[#303030]">{user.email}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-[#000] text-[0.7rem]">{user.time}</div>
          </div>
          <MessageActions />
          <div className="p-4">{user.message}</div>
        </div>
        <TextMessage />
      </div>
    </section>
  );
};

export default Chat;
