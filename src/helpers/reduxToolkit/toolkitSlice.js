import { createSlice } from "@reduxjs/toolkit";
import userImg from "../../pages/Admin/Feedback/assets/images/user-img.svg";
import u1 from './images/1.jpg';
import u2 from './images/2.jpg';
import u3 from './images/3.jpg';
import u4 from './images/4.jpg';
import u5 from './images/5.jpg';
import u6 from './images/6.jpg';
import u7 from './images/7.jpg';
import u8 from './images/8.jpg';
import u9 from './images/9.jpg';
import u10 from './images/10.jpg';
import u11 from './images/11.jpg';
import u13 from './images/13.jpg';
import u14 from './images/14.jpg';
import u15 from './images/15.jpg';
import u16 from './images/16.jpg';
import u17 from './images/17.jpg';
import u18 from './images/18.jpg';
import u19 from './images/19.jpg';
import u20 from './images/19.jpg';
import u21 from './images/19.jpg';
import u22 from './images/19.jpg';
import u23 from './images/19.jpg';
import u30 from './images/30.jpg';
import u31 from './images/31.jpg';
import u32 from './images/32.jpg';
import u33 from './images/33.jpg';



const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    feedbackAllMessages: [
      {
        id: 1,
        imgUrl: userImg,
        fullName: "Ажар ....",
        date: "02.03.2023",
        time: "9:38",
        email: "azhar@gmail.com",
        message: `Спасибо за вашу программу, она действительно помогла мне улучшить мои навыки общения.`,
      },
      {
        id: 2,
        imgUrl: u1,
        fullName: "Диана Диана",
        date: "02.03.2023",
        time: "9:38",
        email: "daiana123@gmail.com",
        message: "Я очень понравилась ваша новая функция, которую вы добавили в приложение. Она действительно упрощает использование приложения.",
      },
      {
        id: 3,
        imgUrl: u8,
        fullName: "Софья Невская",
        date: "02.03.2023",
        time: "9:38",
        email: "a2001@gmail.com",
        message: "У меня были проблемы с использованием вашего продукта, но ваша служба поддержки была быстрой и эффективной в решении моих проблем.",
      },
      {
        id: 4,
        imgUrl: u3,
        fullName: "Юлия Сергеевна",
        date: "02.03.2023",
        time: "9:38",
        email: "us1997@gmail.com",
        message: "Я не смог бы доделать мой проект без вашего инструмента. Он сэкономил мне много времени и усилий.",
      },
      {
        id: 5,
        imgUrl: u4,
        fullName: "Алина Урмат кызы",
        date: "02.03.2023",
        time: "9:38",
        email: "example@gmail.com",
        message: "Я очень ценю вашу продукцию. Она всегда работает так, как я ожидаю.",
      },
      {
        id: 6,
        imgUrl: u5,
        fullName: "Диля Эргешова",
        date: "02.03.2023",
        time: "9:38",
        email: "dilyaergsh100@gmail.com",
        message: "Я хотел бы предложить улучшения в вашей программе. Я думаю, что это сделало бы ее еще лучше.",
      },
      {
        id: 7,
        imgUrl: u6,
        fullName: "Дарья Должикова",
        date: "02.03.2023",
        time: "9:38",
        email: "darya@gmail.com",
        message: "Я бы хотел, чтобы ваше приложение было доступно на других платформах. Это было бы очень удобно для меня.",
      },
      {
        id: 8,
        imgUrl: u7,
        fullName: "Аселя Бактыбек",
        date: "02.03.2023",
        time: "9:38",
        email: "sofiadmirte@gmail.com",
        message: "Я хотел бы поблагодарить вашу команду за быстрое решение проблемы, с которой я столкнулся.",
      },
      {
        id: 9,
        imgUrl: u8,
        fullName: "Ажар Асылбаева",
        date: "02.03.2023",
        time: "9:38",
        email: "azharasylbaeva402@gmail.com",
        message: "Ваша программа очень легкая в использовании. Я смог начать работу с ней сразу же.",
      },
    ],
    feedbackReadMessages: [
      {
        id: 1,
        imgUrl: u9,
        fullName: "Ажар Асылбаева",
        date: "02.03.2023",
        time: "9:38",
        email: "asylbaevaaaa@gmail.com",
        message: "Я бы хотел, чтобы ваше приложение имело больше функций. Я думаю, что это привлечет больше пользователей.",
      },
      {
        id: 2,
        imgUrl: u15,
        fullName: "Бегимай Жанибековна",
        date: "02.03.2023",
        time: "9:38",
        email: "begimay@gmail.com",
        message: "Ваше приложение очень надежно. Я никогда не сталкивался с проблемами или ошибками в его работе.",
      },
      {
        id: 3,
        imgUrl: u7,
        fullName: "Айдана Нуртилековна",
        date: "02.03.2023",
        time: "9:38",
        email: "aidananur01@gmail.com",
        message: "Я очень доволен вашим продуктом. Он позволяет мне сделать то, что я хочу, без каких-либо проблем.",
      },
      {
        id: 4,
        imgUrl: u13,
        fullName: "Рушана Халбатырова",
        date: "02.03.2023",
        time: "9:38",
        email: "rkha2002@gmail.com",
        message: "Я нашел ваше приложение очень полезным для моей работы. Спасибо за такой хороший инструмент!",
      },
      {
        id: 5,
        imgUrl: u14,
        fullName: "Динара Абдулмутталибова",
        date: "02.03.2023",
        time: "9:38",
        email: "diankaa22@gmail.com",
        message: "Я бы хотел предложить добавить функцию, которая позволила бы мне легче организовывать мои файлы и проекты в приложении.",
      },
      {
        id: 6,
        imgUrl: u15,
        fullName: "Чолпонай Каныбековна",
        date: "02.03.2023",
        time: "9:38",
        email: "cholpon_20@gmail.com",
        message: "Я не знал, что ваше приложение может делать все, что я нуждаюсь в нем. Это было приятным сюрпризом!",
      },
      {
        id: 7,
        imgUrl: u16,
        fullName: "Аселя Дастановна",
        date: "02.03.2023",
        time: "9:38",
        email: "aselya@gmail.com",
        message: "Я очень доволен вашим приложением. Я рекомендую его всем моим коллегам и друзьям.",
      },
    ],
    feedbackFavoriteMessages: [
      {
        id: 1,
        imgUrl: u17,
        fullName: "Аселя Урматова",
        date: "02.03.2023",
        time: "9:38",
        email: "askk@gmail.com",
        message: "Я думаю, что ваше приложение очень удобно для использования. Я не могу представить свою работу без него.",
      },
      {
        id: 2,
        imgUrl: u18,
        fullName: "Жибек Султановна",
        date: "02.03.2023",
        time: "9:38",
        email: "jibekkk@gmail.com",
        message: "Я бы хотел, чтобы ваше приложение позволяло покупать ваши продукты",
      },
      {
        id: 3,
        imgUrl: u30,
        fullName: "Айнура Айнура",
        date: "02.03.2023",
        time: "9:38",
        email: "aynuuur@gmail.com",
        message: "Спасибо за вашу продукцию. Она помогла мне сэкономить много времени и усилий при выполнении моих задач.",
      },
      {
        id: 4,
        imgUrl: u31,
        fullName: "Аида Арстановна",
        date: "02.03.2023",
        time: "9:38",
        email: "aarstan@gmail.com",
        message: "Я бы хотел, чтобы ваше приложение было более интуитивно понятным. Иногда я чувствую, что мне нужно потратить время на изучение его использования.",
      },
      {
        id: 5,
        imgUrl: u32,
        fullName: "Назира Саматовна",
        date: "02.03.2023",
        time: "9:38",
        email: "nazirall@gmail.com",
        message: "Ваша программа очень удобна для использования на моем мобильном устройстве. Я могу выполнять свою работу в любом месте.",
      },
      {
        id: 6,
        imgUrl: u33,
        fullName: "Мээрим Жигиталиева",
        date: "02.03.2023",
        time: "9:38",
        email: "meerim@gmail.com",
        message: "Я очень доволен поддержкой, которую я получил от вашей команды. Они были очень дружелюбны и эффективны в решении моих проблем.",
      },
      {
        id: 7,
        imgUrl: u23,
        fullName: "Асель Исмаилова",
        date: "02.03.2023",
        time: "9:38",
        email: "exaselya@gmail.com",
        message: "Я хотел бы предложить добавить функцию, которая позволила бы мне более точно настраивать настройки в приложении.",
      },
    ],
    feedbackCurrentUser: {
      id: 1,
      imgUrl: userImg,
      fullName: "Ажар ....",
      date: "02.03.2023",
      time: "9:38",
      email: "azhar@gmail.com",
      message: `Спасибо за вашу программу, она действительно помогла мне улучшить мои навыки общения.`,
    },
    feedbackSearchValue: "",
    trainingAddQuestionnaire: "",
  },
  reducers: {
    setFeedbackCurrentUser(state, action) {
      state.feedbackCurrentUser = action.payload;
    },
    setFeedbackSearchValue(state, action) {
      state.feedbackSearchValue = action.payload;
    },
    setTrainingAddQuestionnaire(state, action) {
      state.trainingAddQuestionnaire = action.payload;
    }
  },
});

export default toolkitSlice.reducer;
export const { setFeedbackCurrentUser, setFeedbackSearchValue, setTrainingAddQuestionnaire } =
  toolkitSlice.actions;
