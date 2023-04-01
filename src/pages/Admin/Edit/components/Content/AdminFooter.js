import React, { useState } from 'react'
import SaveButton from '../../../components/SaveButton'
import Input from '../Input'

const AdminFooter = () => {
  const [email, setEmail] = useState("girlsforgirls@gmail.com");
  const [linkedin, setLinkedin] = useState("girlsforgirls@gmail.com");
  const [youtube, setYoutube] = useState("girlsforgirls");
  const [instagram, setInstagram] = useState("@girlsforgirls");
  return (
    <div>
      <h2 className="text-[#662D91] font-bold text-[1.5rem] pt-6 mb-6">Футер</h2> 
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <p className='text-[#000000] font-semibold text-base'>Email</p>
          <Input label={'Email'} className='!w-[60%]' onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[#000000] font-semibold text-base'>LinkedIn</p>
          <Input label={'LinkedIn'} className='!w-[60%]' onChange={(e) => setLinkedin(e.target.value)} value={linkedin}/>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[#000000] font-semibold text-base'>YouTube</p>
          <Input label={'YouTube'} className='!w-[60%]' onChange={(e) => setYoutube(e.target.value)} value={youtube}/>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-[#000000] font-semibold text-base'>Instagram</p>
          <Input label={'Instagram'} className='!w-[60%]' onChange={(e) => setInstagram(e.target.value)} value={instagram}/>
        </div>
        <SaveButton />
      </div>
    </div>
  )
}

export default AdminFooter