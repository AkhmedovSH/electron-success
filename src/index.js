import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/* REDUX AND STORE IT TO LOCALSTORAGE */
import { store } from './store'
import { Provider }  from 'react-redux'
import { saveState } from './store/localStorage'
import { throttle } from 'lodash';
import './locales/i18n';
/* YUP Validation */
import * as yup from 'yup';
import { yup_en } from './locales/yup/yup_en';
import { yup_ru } from './locales/yup/yup_ru';

if(localStorage.getItem('lang') === 'en') {
	yup.setLocale(yup_en);
} else {
	yup.setLocale(yup_ru);
}

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);