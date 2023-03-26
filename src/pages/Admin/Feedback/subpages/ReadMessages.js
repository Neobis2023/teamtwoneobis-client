import React from "react";
import User from "../components/User";
import userImg from "../assets/images/user-img.svg";
import { useSelector } from "react-redux";

const ReadMessages = () => {
  const readMessages = useSelector(
    (state) => state.toolkit.feedbackReadMessages
  );
  const feedbackSearchValue = useSelector((state) => state.toolkit.feedbackSearchValue);
  return (
    <div className="overflow-auto max-h-[600px]">
      {!feedbackSearchValue
        ? readMessages.map((user) => {
            return <User {...user} key={user.id} />;
          })
        : readMessages
            .filter((user) => {
              return (
                user.fullName
                  .toLowerCase()
                  .includes(feedbackSearchValue.toLocaleLowerCase()) ||
                user.email
                  .toLowerCase()
                  .includes(feedbackSearchValue.toLocaleLowerCase())
              );
            })
            .map((user) => {
              return <User {...user} key={user.id} />;
            })}
    </div>
  );
};

export default ReadMessages;
