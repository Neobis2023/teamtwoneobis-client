import React from 'react'

const Criteria = () => {
  return (
    <section className='py-20 bg-[#F8F9FA]'>
        <div className="myWrapper text-[#662D91]">
            <h2 className='text-[clamp(1.2rem,_2.5vw,_2.5rem)] pb-10 text-center font-bold'>Критерии участия</h2>
            <div className='text-2xl flex justify-between gap-16 text-[clamp(1rem,_1.6vw,_1.7rem)] leading-normal'>
                <div className='flex flex-col justify-between gap-6'>
                    <div className='bg-[#FAFAFA] border border-solid border-[#E8E5FF] rounded-[32px] h-60 flex items-center justify-center text-center px-8'>Девочки со всех регионов Кыргызстана в возрасте 14 - 19 лет</div>
                    <div className='bg-[#FAFAFA] border border-solid border-[#E8E5FF] rounded-[32px] h-60 flex items-center justify-center text-center px-8'>Быть заинтересованным в саморазвитии и получении новых знаний</div>
                </div>
                <div className='flex flex-col justify-between gap-6'>
                    <div className='bg-[#FAFAFA] border border-solid border-[#E8E5FF] rounded-[32px] h-60 flex items-center justify-center text-center px-8'>Принимать активное участие во всех мероприятиях программы</div>
                    <div className='bg-[#FAFAFA] border border-solid border-[#E8E5FF] rounded-[32px] h-60 flex items-center justify-center text-center px-8'>Быть открытым и готовым к тесной работе с ментором</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Criteria