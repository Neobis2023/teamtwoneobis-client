import React, { useState } from "react";
import User from "../components/User";
import { useSelector } from "react-redux";

const AllMessages = () => {
  const allMessages = useSelector((state) => state.toolkit.feedbackAllMessages);
  const feedbackSearchValue = useSelector(
    (state) => state.toolkit.feedbackSearchValue
  );

  return (
    <div className="overflow-y-scroll max-h-[600px]">
      {!feedbackSearchValue
        ? allMessages.map((user) => {
            return <User {...user} key={user.id} />;
          })
        : allMessages
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

export default AllMessages;
