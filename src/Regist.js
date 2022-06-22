import React, { useState, useEffect } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Form from "./components/forms/regist";
import Paket from "./components/forms/paket";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Regist = (props) => {
  const { id } = props.match.params;
  const step = useSelector((state) => state.registReducer.step);
  const datum = useSelector((state) => state.registReducer.datum);
  const history = useHistory();

  if (datum.length === undefined) {
    const kdtrx = datum.data.kd_trx;
    if (kdtrx !== undefined) {
      localStorage.clear();
      history.push("/invoice/" + btoa(kdtrx));
    }
  }

  return (
    <AnimationRevealPage>
      {step === 0 ? <Form uid={id} /> : <Paket referral={id} />}
    </AnimationRevealPage>
  );
};

export default withRouter(Regist);
