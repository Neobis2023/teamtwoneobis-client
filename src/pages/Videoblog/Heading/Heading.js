import React, { useEffect, useState } from "react";
import computer from './assets/images/comp-stars.svg';
import searchIcon from '../assets/images/search-normal.svg';
import arrowDown from '../assets/images/arrow-down.svg';
import { useDispatch, useSelector } from "react-redux";
import { setCategoryRdx, setSearchValue } from "../../../helpers/reduxToolkit/searchSlice";
import axios from "../api/axios";

const Heading = () => {
  const searchValue = useSelector(state => state.searchValues.searchValue);
  const [category, setCategory] = useState("Все");
  const [chooseCategory, setChooseCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategoryRdx('Все'))
    try {
      axios.get("/categories").then(res =>  { 
        setCategories([{name: 'Все'}, ...res.data.data]);
        // console.log(res.data.data)
        
      }).catch(err => console.log(err));
      // const deleteCat = axios.delete(`/categories/1`).then(del => console.log(del.data));
    } catch (e) {
      console.log(e);
    }
  }, [])

  const handleChooseCategory = (category) => {
    setCategory(category);
    dispatch(setCategoryRdx(category));
  }

  return (
    <section className="pt-10 relative">
      <div className="myWrapper flex gap-4">
        <div className="flex flex-col gap-4 w-[60%]">
          <h1 className="text-[#662D91] font-bold text-[clamp(2rem,_2.5vw,_2.5rem)]">
            Видеоблог
          </h1>
          <p className="text-[#4E477A] font-medium text-[clamp(1.2rem,_1.11vw,_1.8rem)]">
            Наш видеоблог - это сборник лекций от наших менторов на самые
            различные темы: от ментального здоровья до личной гигиены.
          </p>
          <div className="flex gap-4 w-[fit] text-[#B3ABE3] font-semibold text-[clamp(0.8rem,_1.1vw,_1.rem)]">
            <div className="w-fit basis-1/3 flex gap-2 border border-[#B3ABE3] rounded-[12px] p-2">
              <img src={searchIcon} alt="search-icon"/>
              <input placeholder="Поиск" className="outline-none" value={searchValue} onChange={(e) => dispatch(setSearchValue(e.target.value))}/>
            </div>
            <div className="relative basis-1/3 w-fit flex justify-between items-center border border-[#B3ABE3] rounded-[12px] p-2 gap-4 hover:cursor-pointer" onClick={() => setChooseCategory(curr => !curr)}>
              <p>{category}</p>
              <img src={arrowDown} alt="arrow-down"/>
              {chooseCategory ? <div className="absolute left-0 top-11 z-15 bg-[#fff] border rounded-[8px] px-2 py-1">
                {categories && categories.map(category => <p key={category.id} onClick={() => handleChooseCategory(category.name)}>{category.name}</p>)}
            </div> : null}
            </div>
          </div>
        </div>
        <div className="w-[40%] absolute right-0 top-0">
            <img src={computer} alt='computer and stars' className="mx-auto w-[70%]" />
        </div>
      </div>
    </section>
  );
};

export default Heading;
