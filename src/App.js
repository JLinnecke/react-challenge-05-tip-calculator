import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [tipFriend, setTipFriend] = useState(0);

  const tipTotal = bill * ((tip + tipFriend) / 2 / 100);

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

      {bill > 0 && (
        <>
          <Total bill={bill} tip={tipTotal}></Total>
          <Button onclick={reset}>Reset</Button>
        </>
      )}
    </>
  );
}

function Bill({ bill, onBillValue }) {
  return (
    <div>
      <label>How much was the bill ?</label>
      <input
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onBillValue(Number(e.target.value))}
        type="number"
      ></input>
    </div>
  );
}

function Tip({ children, tip, onTipValue }) {
  return (
    <div>
      <p>{children}</p>
      <select value={tip} onChange={(e) => onTipValue(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Button({ children, onclick }) {
  return <button onClick={onclick}>{children}</button>;
}
