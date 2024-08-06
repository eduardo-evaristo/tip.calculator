//Importing components
import BillInput from "./BillInput";
import FriendServiceInput from "./FriendServiceInput";
import ResetButton from "./ResetButton";
import ResultText from "./ResultText";
import ServiceInput from "./ServiceInput";

import { useState } from "react";

//Possible values for option html tags
const possibleValues = [
  { text: "Dissatisfied (0%)", value: 0 },
  { text: "It was okay (5%)", value: 5 },
  { text: "It was good (10%)", value: 10 },
  { text: "Absolutely amazing! (20%)", value: 20 },
];

export default function App() {
  //Lifted-up state from BillInput
  const [inputBill, setInputBill] = useState("");
  //Lifted-up state from ServiceInput
  const [selectedValueService, setSelectedValueService] = useState(0);
  //Lifted-up state from FriendServiceInput
  const [selectedValueFriend, setSelectedValueFriend] = useState(0);

  //Derived state
  const tipPercentage = (selectedValueService + selectedValueFriend) / 2;
  const tipValue = (inputBill * tipPercentage) / 100;
  const finalValue = inputBill + tipValue;

  return (
    <div>
      <BillInput inputBill={inputBill} onSetInputBill={setInputBill}>
        How much was the bill?
      </BillInput>
      <ServiceInput
        selectedValue={selectedValueService}
        onSetSelectedValue={setSelectedValueService}
        values={possibleValues}
      >
        How did you like the service
      </ServiceInput>
      <FriendServiceInput
        selectedValue={selectedValueFriend}
        onSetSelectedValue={setSelectedValueFriend}
        values={possibleValues}
      >
        How did your friend like the service?
      </FriendServiceInput>
      <ResultText>
        {inputBill > 0
          ? `You pay $${finalValue.toFixed(2)} ($${inputBill.toFixed(
              2
            )} + $${tipValue.toFixed(2)})`
          : ""}
      </ResultText>
      <ResetButton
        onSetInputBill={setInputBill}
        onSetSelectedValueService={setSelectedValueService}
        onSetSelectedValueFriend={setSelectedValueFriend}
      >
        Reset
      </ResetButton>
    </div>
  );
}
