import React from "react";
import Videoblog from "../components/Videoblog";
import VideoblogNav from "../components/VideoblogNav";

const List = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-2">
        <Videoblog action={'Добавить видео'}/>
      </div>
    </div>
  );
};

export default List;
