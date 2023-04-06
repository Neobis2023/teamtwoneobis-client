import React, { useRef, useState } from "react";

const Textarea = ({ question, sublabel = null, className, value, ...props }) => {
    const [textareaHeight, setTextareaHeight] = useState("30px"); 
    const textareaRef = useRef();

    const handleChange = (e) => {
        if (!e.target.value) {
            setTextareaHeight("30px");
        }
        if (e.target.value) {
            setTextareaHeight("40px"); // Reset height to default
            const scHeight = e.target.scrollHeight;
            setTextareaHeight(`${scHeight}px`);
        } 
      };
  return (
    <div className={`w-full ${className} flex flex-col gap-2 my-6`}>
      <div className="flex flex-col gap">
        <label
          htmlFor="apply-textarea"
          className="text-[#662D91] font-semibold text-[clamp(0.8rem,_1.1vw,_1.3rem)]"
        >
          {question}
        </label>
        {sublabel && (
          <label
            htmlFor="apply-textarea"
            className="text-[#662D91] font-medium text-[clamp(0.5rem,_0.83vw,_1.05rem)]"
          >
            {sublabel}
          </label>
        )}
      </div>
      <textarea
        style={{ height: textareaHeight }}
        ref={textareaRef}
        className={`border-b border-[#e5e7eb] w-full resize-none outline-none`}
        value={value}
        placeholder="Мой ответ"
        id="apply-textarea"
        spellcheck="false" 
        onChange={handleChange}
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;
