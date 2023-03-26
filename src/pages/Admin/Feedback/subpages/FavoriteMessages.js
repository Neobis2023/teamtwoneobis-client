import React from "react";
import User from "../components/User";
import { useSelector } from "react-redux";

const FavoriteMessages = () => {
  const favoriteMessages = useSelector((state) => state.toolkit.feedbackFavoriteMessages);
  const feedbackSearchValue = useSelector(
    (state) => state.toolkit.feedbackSearchValue
  );

  return (
    <div className="overflow-y-scroll max-h-[600px]">
      {!feedbackSearchValue
        ? favoriteMessages.map((user) => {
            return <User {...user} key={user.id} />;
          })
        : favoriteMessages
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

export default FavoriteMessages;
