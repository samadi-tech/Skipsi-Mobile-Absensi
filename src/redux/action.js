export const setForm = (type, value) => {
  return {type: 'SET_FORM', inputType: type, inputValue: value};
};
export const setTombol = (type, value) => {
  return {type: 'SET_TOMBOL', inputType: type, inputValue: value};
};
export const setPosting = data => {
  return {type: 'SET_POSTING', data};
};
export const setHistory = data => {
  return {type: 'SET_HISTORY', data};
};
