import React, { useState } from "react";
import ContractForm from "../components/contract/contractForm";
import SuccessContract from "../components/contract/successContract";
import { useNavigate } from "react-router-dom";

const Contract = () => {
  const [numberStep, setNumberStep] = useState(1);
  const navigate = useNavigate();

  function handleSubmitForm() {
    setNumberStep(2);
  }

  function handleClickTop() {
    navigate("/");
  }

  const listStep = {
    1: <ContractForm onSubmit={handleSubmitForm} />,
    2: <SuccessContract handleTop={handleClickTop} />,
  };

  return (
    <>
      <div className="contract-container">{listStep[numberStep]}</div>
    </>
  );
};

export default Contract;
