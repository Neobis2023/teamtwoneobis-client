import React from "react";
import Button from "../../../UI/Button/Button";
import stars from '../../../assets/images/mentorship/application/stars.svg';
import left from '../../../assets/images/mentorship/application/left.svg';
import right from '../../../assets/images/mentorship/application/right.svg';

const Application = () => {
  return (
    <section className="bg-[radial-gradient(50%_50%_at_50%_50%,_#FAEFFF_0%,_#E8E5FF_100%)] py-20 relative">
      <div className="bg-[#FAFAFA] rounded-[20px] w-[90%] mx-auto py-20">
        <img src={stars} alt="stars" className="min-w-[80px] w-[7%] h-fit absolute left-0 right-0 mx-auto top-[2%]" />
        <div className="w-[60%] mx-auto flex flex-col items-center justify-between gap-8">
            <h2 className="text-[#662D91] font-semibold text-[clamp(2rem,_3.3vw,_3.3rem)] leading-[normal] text-center">Подать заявку на участие в менторской программе</h2>
            <Button text={'Перейти на страницу заявки'} className='text-[clamp(0.8rem,_1.38vw,_1.5rem)] !w-[55%] !p-4 !rounded-[47.2727px] hover:!text-[#662D91] hover:!bg-[#E8E5FF] !bg-[rgba(102,_45,_145,_0.6)]'/>
        </div>
        <img src={left} alt="left" className="absolute -left-12 -bottom-[16%] w-[24%] h-fit"/>
        <img src={right} alt="right" className="absolute -right-12 -top-[16%] w-[24%] h-fit"/>
      </div>
    </section>
  );
};

export default Application;
