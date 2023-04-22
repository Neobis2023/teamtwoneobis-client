import React from 'react'

const Achievement = ({imgUrl, name, amount, achievement}) => {
  
  const titleColor = {
    background: achievement.type === 'VIDEO' ? '#00B4DF' : '#50D100',
  }
  
  if (achievement.type === 'CARD') {
    return (
      <div className='flex flex-col gap-2 justify-center items-center border border-[#E6E0FF] rounded-[12px] p-3'
           style={{width: '172px', height: '242px'}}
      >
        <div style={{
          width: '120px',
          height: '120px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: '50%',
          marginBottom: '10px'
        }}>
          <img src={achievement?.image?.url} alt='achievement' style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}} />
        </div>
        <div style={{ width: '80%', height: '70px', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
          <p className='text-[clamp(0.675rem,_0.972vw,_1.175rem)] text-white font-bold px-2 py-1 bg-[#F5E3FF] rounded-[8px]'
             style={{width: '100%', textAlign: 'center', color: '#403A64', marginBottom: '5px'}}
          >{achievement?.title}</p>
          <p className='text-[#403A64] text-[clamp(0.55rem,_0.83vw,_1.05rem)]' style={{ textAlign: 'center' }}>{achievement?.description}</p>
        </div>
        </div>
    )
  }
  
  return (
    
    <div className='flex flex-col gap-2 justify-center items-center border border-[#E6E0FF] rounded-[12px] p-3'
         style={{width: '172px', height: '198px'}}
    >
      <div style={{
        width: '120px',
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <img src={achievement?.image?.url} alt='achievement'/>
      </div>
      <p className='text-[clamp(0.675rem,_0.972vw,_1.175rem)] text-white font-bold px-2 py-1 bg-[#00CEFF] rounded-[8px]'
         style={{width: '80%', textAlign: 'center', ...titleColor}}
      >{achievement?.title}</p>
      <p className='text-[#403A64] text-[clamp(0.55rem,_0.83vw,_1.05rem)]'>{achievement?.description}</p>
    </div>
  )
}

export default Achievement
