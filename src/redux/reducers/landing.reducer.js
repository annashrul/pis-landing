import {LANDING} from '../type'
const initialState = {
    recent: [],
    top:[],
    total_member:0,
    count_wd:0,
    total_wd:0,
    promo:[],
    testi:[],
};

export const landingReducer = (state = initialState, action) => {
    switch(action.type){
        case LANDING.GET_TOPMEMBER : 
            return {
                ...state,
                recent: action.data.data.recent,
                top: action.data.data.top_sponsor,
                total_member: action.data.data.total_member,
                count_wd: action.data.data.count_wd,
                total_wd: action.data.data.total_wd,
                promo: action.data.data.promo,
                testi: action.data.data.testi,
            };

        default: return state
    }

}
