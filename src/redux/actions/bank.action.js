import {BANK, AUTH} from '../type';
import axios from 'axios';

export const setBank=(data)=>{
    return {
        type: BANK.GET,
        data
    }
}

export const setInv = (data) => {
    return {
        type: BANK.INV,
        data
    }
}


export const setInvNF = (data) => {
    return {
        type: BANK.INVNF,
        data
    }
}

export const setPaket = (data) => {
    return {
        type: BANK.PAKET,
        data
    }
}

export const setChannel = (data) => {
    return {
        type: BANK.CHANNEL,
        data
    }
}

export const setConfig = (data) => {
    return {
        type: BANK.CONFIG,
        data
    }
}

export const getBank = () => {
    return (dispatch) => {
        const headers = {
            headers: {
                'X-Project-ID': AUTH.PID,
                'X-Requested-From': AUTH.SOURCE,
            }
        }
        axios.get(AUTH.URL + "transaction/data_bank", headers)
        .then(function (response) {
            const data = response.data
            dispatch(setBank(data))
        })
        .catch(function (error) {
            // handle error
        })
    }
}

export const getPayment = () => {
    return (dispatch) => {
        const headers = {
            headers: {
                'X-Project-ID': AUTH.PID,
                'X-Requested-From': AUTH.SOURCE,
            }
        }
        axios.get(AUTH.URL + "transaction/channel", headers)
        .then(function (response) {
            const data = response.data
            dispatch(setChannel(data))
        })
        .catch(function (error) {
            // handle error
        })
    }
}


export const getPaket = () => {
    return (dispatch) => {
        const headers = {
            headers: {
                'X-Project-ID': AUTH.PID,
                'X-Requested-From': AUTH.SOURCE,
            }
        }
        axios.get(AUTH.URL + "paket?category=5d96d9f0-49bd-49e2-895f-f8171ba3a9ea", headers)
        .then(function (response) {
            const data = response.data
            dispatch(setPaket(data))
        })
        .catch(function (error) {
            // handle error
        })
    }
}

export const getAlokasi = () => {
    return (dispatch) => {
        const headers = {
            headers: {
                'X-Project-ID': AUTH.PID,
                'X-Requested-From': AUTH.SOURCE,
            }
        }
        axios.get(AUTH.URL + "site/noinfo", headers)
        .then(function (response) {
            const data = response.data
            dispatch(setConfig(data))
        })
        .catch(function (error) {
            // handle error
        })
    }
}


export const getInv = (data) => {
    return (dispatch) => {
        const headers = {
            headers: {
                'X-Project-ID': AUTH.PID,
                'X-Requested-From': AUTH.SOURCE,
            }
        }
        axios.get(AUTH.URL + `transaction/deposit/${data}/invoice`, headers)
            .then(function (response) {
                const data = response.data
                dispatch(setInv(data))
            })
            .catch(function (error) {
                // handle error
                dispatch(setInvNF(error.response.data.meta.code))
            })
    }
}