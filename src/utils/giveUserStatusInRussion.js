export const giveUserStatus = (status) => {
  let result = 'Пользователь';
  if (status === 'MENTOR') {
    result = 'Ментор';
  } else if (status === 'Mentee') {
    result = 'Менти'
  } else if (status === 'GRADUATE') {
    result = 'Выпускник'
  }
  return result;
}
