import React, { useState } from "react";
import bold from "../assets/images/bold.svg";
import type from "../assets/images/type.svg";
import alignCenter from "../assets/images/align-center.svg";
import alignJustify from "../assets/images/align-justify.svg";
import alignLeft from "../assets/images/align-left.svg";
import alignRight from "../assets/images/align-right.svg";

const TextMessage = () => {
  const [message, setMessage] = useState("");
  
  console.log(message);
  return (
    <section>
      <div className="relative">
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          type={"text"}
          placeholder={"Написать сообщение..."}
          className="min-h-[300px] border rounded-[8px] border-[#AEAEAE] w-full p-4"
        />
        <div className="bg-[#F9F9F9] flex rounded-[8px] justify-between absolute left-0 right-0 bottom-3 w-[98%] mx-auto">
          <div className="flex p-3 gap-4">
            <img src={bold} alt="bold" className="h-fit hover:cursor-pointer"/>
            <img src={alignCenter} alt="bold" className="h-fit hover:cursor-pointer"/>
            <img src={alignJustify} alt="bold" className="h-fit hover:cursor-pointer"/>
            <img src={alignLeft} alt="bold" className="h-fit hover:cursor-pointer"/>
            <img src={alignRight} alt="bold" className="h-fit hover:cursor-pointer"/>
          </div>
          <button type="button" className="text-[#fff] bg-[#9960C3] rounded-[8px] px-4 py-2">Отправить</button>
        </div>
      </div>
    </section>
  );
};

export default TextMessage;
