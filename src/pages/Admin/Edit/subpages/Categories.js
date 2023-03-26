import React from "react";
import AddButton from "../components/AddButton";
import Videoblog from "../components/Videoblog";



const Categories = () => {
  const categories = ['Развитие', 'Репродуктивное здоровье', 'Финансы', 'Еда', 'Образование'];
  return (
      <div className="flex flex-col w-full">
        <div className="flex gap-2">
          <AddButton action={'Добавить категорию'}/>
        </div>
        <div>
            {categories.map((category) => {
                return <div className="py-2 px-4 bg-[#F3F3F3] rounded-[8px] my-2">
                    {category}
                </div>
            })}
        </div>
      </div>
  );
};

export default Categories;
