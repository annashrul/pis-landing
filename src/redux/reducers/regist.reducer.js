import {REGIST} from '../type'
const initialState = {
    validate: '',
    step:1,
    datum:[]
};

export const registReducer = (state = initialState, action) => {
    switch(action.type){
        case REGIST.VALIDATE : 
            return {
                ...state,
                validate: action.data.meta.message
            };
        case REGIST.STEP:
            return {
                ...state,
                step: action.data
            };

        case REGIST.SUCCESS:
            return {
                ...state,
                datum: action.data
            };


        default: return state
    }

}
