import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("0");
  const [tipFriend, setTipFriend] = useState("0");

  function handleBillValue(value) {
    setBill(value);
  }

  function handleTipValue(value) {
    setTip(value);
  }

  function handleTipFriendValue(value) {
    setTipFriend(value);
  }

  function reset() {
    setBill("");
    setTip("0");
    setTipFriend("0");
  }

  return (
    <>
      <Bill bill={bill} onBillValue={handleBillValue}></Bill>
      <Tip tip={tip} onTipValue={handleTipValue}>
        How did you like the service?
      </Tip>
      <Tip tip={tipFriend} onTipValue={handleTipFriendValue}>
        How did your friend like the service?
      </Tip>
      <Total bill={bill} tip={tip} friendTip={tipFriend}></Total>
      <Button onclick={reset}>Reset</Button>
    </>
  );
}

function Bill({ bill, onBillValue }) {
  return (
    <div>
      <p>How much was the bill ?</p>
      <input
        value={bill}
        onChange={(e) => onBillValue(e.target.value)}
        type="number"
      ></input>
    </div>
  );
}

function Tip({ children, tip, onTipValue }) {
  return (
    <div>
      <p>{children}</p>
      <select value={tip} onChange={(e) => onTipValue(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, tip, friendTip }) {
  const billAmount = Number(bill);

  if (!billAmount) return null;

  const tipAmount = Number(tip);
  const tipFriendAmount = Number(friendTip);

  const averageTip = (tipAmount + tipFriendAmount) / 2;
  const tipTotal = billAmount * (averageTip / 100);
  const billAmountTotal = billAmount + tipTotal;

  return (
    <h2>
      You pay ${billAmountTotal} (${billAmount} + ${tipTotal} tip)
    </h2>
  );
}

function Button({ children, onclick }) {
  return <button onClick={onclick}>{children}</button>;
}
