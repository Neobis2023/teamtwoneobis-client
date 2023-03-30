import React from "react";
import AddButton from "../../AddButton";
import Videoblog from "../Videoblog";



const Categories = () => {
  const categories = ['Развитие', 'Репродуктивное здоровье', 'Финансы', 'Еда', 'Образование'];
  return (
      <div className="flex flex-col w-full">
        <div className="flex gap-2">
          <AddButton action={'Добавить категорию'} to={'add-category'}/>
        </div>
        <div>
            {categories.map((category, index) => {
                return <div className={`py-2 px-4 rounded-[8px] my-2 ${index % 2 === 0 ? "bg-[#EAF0FF]" : "bg-[#F3F3F3]"}`}>
                    {category}
                </div>
            })}
        </div>
      </div>
  );
};

export default Categories;
