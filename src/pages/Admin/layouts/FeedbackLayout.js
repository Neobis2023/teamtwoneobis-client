import { Outlet } from "react-router-dom";
import Chat from "../Feedback/components/Chat";
import LeftTop from "../Feedback/components/LeftTop";
import userImg from '../Feedback/assets/images/user-img.svg'
import { useState } from "react";
import useLocalStorage from "../../../helpers/hooks/useLocalStorage";
import { useSelector } from "react-redux";

const FeedbackLayout = () => {

  const feedbackCurrentUser = useSelector(state => state.toolkit.feedbackCurrentUser);
  return (
    <section className="bg-[#EAF0FF] w-full flex flex-col justify-end">
      <div className="mx-6 pb-6 pt-4 pr-4 overflow-hidden rounded-[10px] min-h-[85%] mt-[15vh] bg-[#fff] grid grid-cols-[30%_70%] gap-4">
          <div className="h-full">
            <LeftTop />
            <Outlet />
          </div>
          <Chat user={feedbackCurrentUser}/>
      </div>
    </section>
  );
};

export default FeedbackLayout;
