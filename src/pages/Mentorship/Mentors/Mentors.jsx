import React from 'react'
import MySlider from '../../../helpers/swiper/MySlider';
import aykanysh from './assets/images/aykanysh.png';
import salkynay from './assets/images/salkynay.png';
import aysezim from './assets/images/aysezim.png';
import nurayim from './assets/images/nurayim.png';
import { useTranslation } from 'react-i18next';

const Mentors = () => {
  const data = [
    {
      id: 1,
      img: aykanysh,
      fullName: 'Айканыш Сыдыкова',
      desc: '🇺🇸 Выпускница программ FLEX ‘13 и 🌎 Global Village ‘22\n' +
        '\n' +
        '👩🏻‍💻Программный координатор в Американских Советах по международному образованию\n' +
        '\n' +
        '💻Проектный менеджер в Neobis\n' +
        '\n' +
        '💜Со-основательница Girls for Girls',
    },
    {
      id: 2,
      img: salkynay,
      fullName: 'Салкынай Эмилбекова',
      desc: '👩‍🎓студентка 4 курса в АУЦА по направлению Бизнес Администрация\n' +
        '🇺🇸 является координатором выпускников программы ФЛЕКC 👩🏻‍💻работает проектным координатором в исследовательской компании Эмпирика',
    },
    {
      id: 4,
      img: nurayim,
      fullName: 'Нурайым Нургазиева',
      desc: '👩🏻‍🎓 Студентка 4-курса в Международном Университете в Центральной Азии (МУЦА) Управление Бизнесом\n' +
        '💼 Экс-капитан команды Enactus МУЦА\n' +
        '✈️ Выпускница FLEX ‘19\n' +
        '🇺🇸 Представитель пр. FLEX в МУЦА и города Токмок\n' +
        '🇺🇳 Волонтер UNICEF',
    },
    {
      id: 5,
      img: aysezim,
      fullName: 'Айсезим Арымбаева',
      desc: '🗺️ Соосновательца проекта по борьбе со школьным насилием "Саякат". Проект выиграл грант от программы Justice Accelerator, спонсируемой Управлением Организации Объединенных Наций по наркотикам и преступности (УНП ООН)\n' +
        '📚Соорганизаторка тренинга профессионального развития Аксесс для преподавателей английского языка со всего Кыргызстана\n' +
        '🚀 Менторка Leadership Academy 2020',
    },
  ];
  
  const mentors = [...data, ...data];
  const { t } = useTranslation();
  return (
    <section className='pb-20 bg-[#F8F9FA] mentors'>
        <h2 className='text-[#662D91] font-semibold text-[clamp(1.2rem,_2.5vw,_2.5rem)] text-center pb-10'>{t('Mentorship.fourthSection.title')}</h2>
        <MySlider mentors={mentors}/>
    </section>
  )
}

export default Mentors
