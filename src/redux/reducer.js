import {combineReducers} from 'redux';

const initLogin = {};
const initHome = {};

const initAbsensi = {
  title: 'Absensi Sistem Informasi',
  form: {
    npm: '',
    nama: '',
    kelas: '',
    matakuliah: '',
    keterangan: '',
  },
};

const loginReduser = (state = initLogin, action) => {
  return state;
};

const absensiReduser = (state = initAbsensi, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const homeReduser = (state = initHome, action) => {
  return state;
};

const reducer = combineReducers({
  absensiReduser,
  loginReduser,
  homeReduser,
});
export default reducer;
