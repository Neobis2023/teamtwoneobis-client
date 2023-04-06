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
          <SaveButton />
        </div>
    </div>
  )
}

export default AddCategory