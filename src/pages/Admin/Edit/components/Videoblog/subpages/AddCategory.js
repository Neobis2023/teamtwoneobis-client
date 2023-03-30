import React, { useState } from 'react';
import SaveButton from '../../../../components/SaveButton';
import Input from '../../Input';

const AddCategory = () => {
  const [category, setCategory] = useState("");  
  const handleSave = () => {

  }
  return (
    <div className='w-full'>
        <h2 className="text-[#000000] font-semibold mb-2">Категория</h2>
        <div className='flex flex-col gap-4 w-full'>
            <Input label={'Название'} value={category} onChange={(e) => setCategory(e.target.value)} className={'!w-1/2'}/>
            {/* <button
            type="button"
            className="rounded-[8px] bg-[#9960C3] text-white p-2 w-[40%]" onClick={handleSave}
          >
            Добавить категорию
          </button> */}
          <SaveButton />
        </div>
    </div>
  )
}

export default AddCategory