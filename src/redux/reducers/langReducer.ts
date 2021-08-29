import { Action } from '../../interfaces/redux-interfaces/actionsInterfaces';
import { langEn, langEs } from '../../lang';
import { types } from '../types';

const initialState = langEn;

export const langReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case types.setLangEn:
            return {
                ...langEn,
            };

        case types.setLangEs:
            return {
                ...langEs,
            };

        default:
            return state;
    }
};
