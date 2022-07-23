import {configureStore} from '@reduxjs/toolkit';
import {useStore} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';

const store = configureStore({reducer});
export default store;
