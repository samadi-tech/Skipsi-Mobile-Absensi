import {combineReducers} from 'redux';

const initProfil = {
  isLogin: true,
};

const initHome = {
  posting: [],
};

const initAbsensi = {
  title: 'Absensi Sistem Informasi',
  form: {
    npm: '',
    nama: '',
    kelas: '',
    matakuliah: '',
    keterangan: '',
  },
  history: [],
};

const profilReduser = (state = initProfil, action) => {
  if (action.type === 'SET_TOMBOL') {
    return {
      ...state,
      [action.inputType]: action.inputValue,
    };
  }
  return state;
};

const homeReduser = (state = initHome, action) => {
  if (action.type === 'SET_POSTING') {
    return {
      ...state,
      posting: action.data,
    };
  }
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
  if (action.type === 'SET_HISTORY') {
    return {
      ...state,
      history: action.data,
    };
  }
  return state;
};

const reducer = combineReducers({
  absensiReduser,
  profilReduser,
  homeReduser,
});
export default reducer;
