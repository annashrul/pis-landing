import {LANDING, AUTH} from '../type';
import axios from 'axios';
import Swal from 'sweetalert2'

export const setMember=(data)=>{
    return {
        type: LANDING.GET_TOPMEMBER,
        data
    }
}

export const getMember = () => {
    return (dispatch) => {
        const headers = {
            headers: {
                'X-Project-ID': AUTH.PID,
                'X-Requested-From': AUTH.SOURCE,
            }
        }
        axios.get(AUTH.URL + "site/top_member", headers)
        .then(function (response) {
            const data = response.data
            dispatch(setMember(data))
        })
        .catch(function (error) {
            console.log(error.response.data);
        })

    }
}