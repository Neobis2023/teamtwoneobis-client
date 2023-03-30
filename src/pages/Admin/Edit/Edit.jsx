import React from 'react'
import EditNavbar from './components/EditNavbar'
import Videoblog from './components/Videoblog/Videoblog'
import VideoblogNav from './components/Videoblog/VideoblogNav'

const Edit = () => {
  return (
    <section className='bg-[#EAF0FF] w-full flex flex-col justify-end'>
      <div className='px-6 min-h-[85%] mt-[15vh]'>
        <h1 className="text-[#662D91] font-bold text-2xl mb-6">Редактировать контент</h1>
        <div className='rounded-[10px] bg-[#fff] grid grid-cols-[25%_75%] gap-4 pr-6'>
            <EditNavbar />
            <div className='flex flex-col'>
              <h2 className="text-[#662D91] font-bold text-[1.5rem] pt-6">Видеоблог</h2>
              <div className='flex gap-2'>
                <VideoblogNav />
                <Videoblog />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Edit