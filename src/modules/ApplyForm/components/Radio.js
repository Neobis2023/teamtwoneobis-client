import React, { useState } from 'react'

const Radio = ({ id, question, options, sublabel, setData }) => {
  const [selectedOption, setSelectedOption] = useState(""); 
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  function handleRadioChange(event, index) {
    setSelectedOption(event.target.value);
    setSelectedOptionIndex(index);

    const questionData = {
      questionId: id,
      type: "VARIANTS",
      answerIndex: index,
      multipleChoices: [
        0,
        1
      ],
      text: "Text",
    };

    console.log(questionData)

    setData((curr) => ({
      ...curr,
      answers: [
        ...curr.answers.filter((ans) => ans.questionId !== id),
        questionData,
      ],
    }));
  }
  return (
    <div className='my-6'>
        <div className='text-[#662D91] font-semibold text-[clamp(0.8rem,_1.1vw,_1.3rem)] mb-1 flex flex-col'>
          {question}
          {sublabel && <label htmlFor='answer' className='text-[#662D91] font-medium text-[clamp(0.5rem,_0.83vw,_1.05rem)]'>{sublabel}</label>}
          </div> 
        <div className='flex flex-col gap-1'>
            {options.map((option, index) => {
                return <label className='flex gap-2 items-center hover:cursor-pointer text-[#403A64] font-medium text-[clamp(0.8rem,_1.1vw,_1.3rem)]' key={index} >
                    <input type='radio' value={option.text} checked={selectedOption === option.text} onChange={(e) => handleRadioChange(e, index)} className='hover:cursor-pointer '/>
                    {option.text}
                </label>
            })}
        </div>
    </div>
  )
}

export default Radio