import {REGIST, AUTH} from '../type';
import axios from 'axios';
import Swal from 'sweetalert2'

export const setValidate=(data)=>{
    return {
        type: REGIST.VALIDATE,
        data
    }
}

export const setStep = (data) => {
    return {
        type: REGIST.STEP,
        data
    }
}

export const setSuccess = (data) => {
    return {
        type: REGIST.SUCCESS,
        data
    }
}
export const validateUsername = (data) => {
    return (dispatch) => {
        const headers = {
            headers: {
                'X-Project-ID': AUTH.PID,
                'X-Requested-From': AUTH.SOURCE,
            }
        }
        axios.post(AUTH.URL + "auth/validate/username", data, headers)
        .then(function (response) {
            const data = response.data
            dispatch(setValidate(data))
        })
        .catch(function (error) {
            console.log(error.response.data);
            dispatch(setValidate(error.response.data))
        })

    }
}

export const goRegister = (data) => {
    return (dispatch) => {
        const headers = {
            headers: {
                'X-Project-ID': AUTH.PID,
                'X-Requested-From': AUTH.SOURCE,
            }
        }
        axios.post(AUTH.URL + "auth/signup", data, headers)
            .then(function (response) {
                const data = response.data
                dispatch(setSuccess(data))
            })
            .catch(function (error) {
                console.log(error.response.data);
                Swal.fire(
                    'Gagal.',
                    error.response.data.meta.message,
                    'error'
                )
            })

    }
}