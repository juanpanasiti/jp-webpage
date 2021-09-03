import { Dispatch } from 'react';

import { types } from '../types';

export const setInitialLang = () => {
    return (dispatch: Dispatch<any>) => {
        const savedLang = localStorage.getItem('lang')
        if (savedLang === 'es') {
            dispatch(setLangEs())
        } else {
            dispatch(setLangEn())
        }
    };
};

export const setLangEs = () => {
    localStorage.setItem('lang','es')
    return {
        type: types.setLangEs,
    };
};

export const setLangEn = () => {
    localStorage.setItem('lang','en')
    return {
        type: types.setLangEn,
    };
};
