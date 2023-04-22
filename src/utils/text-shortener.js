export function textShortener(text, numberOfCharacterToLeave = 20) {
  if (typeof text != 'string') {
    return 'Not a string';
  }
  
  if (typeof numberOfCharacterToLeave != 'number') {
    numberOfCharacterToLeave = 20;
  }
  
  if (text.length > numberOfCharacterToLeave) {
    const short = text.split('').slice(0, numberOfCharacterToLeave).join('') + '...';
    return short;
  }
  return text;
}
