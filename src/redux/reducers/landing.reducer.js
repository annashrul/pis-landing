import {LANDING} from '../type'
const initialState = {
    recent: [],
    top:[],
    total_member:0,
    count_wd:0,
    total_wd:0,
    promo:[],
    testi:[{
        caption: "Mantap bonusnya !\nJoooosss Gandoosss",
        created_at: "2022-06-20T01:54:20.177Z",
        id: "3281bb3e-1937-424e-90ff-b85967a9d922",
        photo: "http://ptnetindo.com:6706/images/default.png",
        rating: 5,
        records: "3",
        title: "Agustinus",
        updated_at: "2022-06-20T01:54:20.177Z"
    }],
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
