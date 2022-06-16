import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Form from "./components/forms/regist";
import Paket from "./components/forms/paket";
import {useSelector} from 'react-redux'
import { withRouter } from "react-router-dom";

const Regist = (props) => {
  const {id}=props.match.params;
  const step = useSelector(state => state.registReducer.step)
  const datum = useSelector(state => state.registReducer.datum)
  console.log(datum);

  return (
    <AnimationRevealPage>
      {
        step===0?
          <Form/>
        :
          <Paket referral={id}/>
      }
    </AnimationRevealPage>
  );
};

export default withRouter(Regist)