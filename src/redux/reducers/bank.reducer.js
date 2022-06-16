import {BANK} from '../type'
const initialState = {
    data_bank: [],
    channel: [],
    paket: [],
    fee_aktivasi:0
};

export const bankReducer = (state = initialState, action) => {
    switch(action.type){
        case BANK.GET : 
            return {
                ...state,
                data_bank: action.data.data
            };
        case BANK.CHANNEL:
            return {
                ...state,
                channel: action.data.data
            };
        case BANK.PAKET:
            return {
                ...state,
                paket: action.data.data
            };
        case BANK.CONFIG:
            return {
                ...state,
                fee_aktivasi: action.data.data.fee_aktivasi
            };

        default: return state
    }

}
