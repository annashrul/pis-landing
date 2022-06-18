import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Invoice from "./components/forms/invoice";
import {useDispatch,useSelector} from 'react-redux'
import { withRouter } from "react-router-dom";
import {getInv} from './redux/actions/bank.action'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

const Regist = (props) => {
  const {id}=props.match.params;
  const datum = useSelector(state => state.bankReducer.inv)
  const checkInv = useSelector(state => state.bankReducer.inv_notfound)
  const dispatch = useDispatch();
  const history = useHistory()
  useEffect(() => {
    dispatch(getInv(id));
    document.title = `Invoice PROWARA`;
  }, []);
  if (checkInv === 400){
    Swal.fire({
      title: 'Transaksi telah selesai/tidak ditemukan.',
      showCancelButton: false,
      confirmButtonText: 'OKE',
    }).then((result) => {
      if (result.isConfirmed) {
         history.push('/')
      }
    })
  }

  return (
    <AnimationRevealPage>
      <Invoice
        datum={datum.data}
      />
    </AnimationRevealPage>
  );
};

export default withRouter(Regist)