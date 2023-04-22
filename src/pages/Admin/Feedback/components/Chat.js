import React from "react";
import MessageActions from "./MessageActions";
import TextMessage from "./TextMessage";
import defaultAvatar from '../../../../assets/images/auth/default-avatar.jpeg';

const Chat = ({ user = {} }) => {
  return (
    <section className="pr-4 min-h-[700px] max-h-[700px]">
      <div className="flex flex-col justify-between min-h-full max-h-full">
        <div className="h-inherit">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex gap-2">
                <div style={{ width: '35px', height: '35px', borderRadius: '50%', overflow: 'hidden'}}>
                  <img style={{ width: '100%', height: '100%'}} src={user.imgUrl || defaultAvatar} alt="user" />
                </div>
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
          <div className="p-4 text-[#303030] text-[0.75rem]">{user.message}</div>
        </div>
        <TextMessage />
      </div>
    </section>
  );
};

export default Chat;
