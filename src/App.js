import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [rate, setRate] = useState(0);
  const [friendrate, setFriendRate] = useState(0);

  const tip = Math.round(bill * ((rate + friendrate) / 2 / 100));

  function Cost(e) {
    const value = e.target.value;
    setBill(Number(value)); // converts and sets the number
  }

  function onReset() {
    return setBill(""), setRate(0), setFriendRate(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} onCost={Cost} />
      <Rating
        rate={rate}
        friendrate={friendrate}
        setRate={setRate}
        setFriendRate={setFriendRate}
      />
      <Total bill={bill} tip={tip} />
      <Reset onReset={onReset} />
    </div>
  );

  function Bill({ bill, onCost }) {
    return (
      <div>
        <span>How Much was the Bill?</span>
        <input
          type="text"
          placeholder="Enter bill"
          onChange={onCost}
          value={bill}
        />
      </div>
    );
  }
}

function Rating({ rate, friendrate, setRate, setFriendRate }) {
  return (
    <div>
      <span>How did you like the service?</span>
      <select value={rate} onChange={(e) => setRate(Number(e.target.value))}>
        <option value="0">bad 0%</option>
        <option value="10">Good 10%</option>
        <option value="20">Great 20%</option>
      </select>

      <br />

      <span>How did your friend the like the service?</span>
      <select
        value={friendrate}
        onChange={(e) => setFriendRate(Number(e.target.value))}
      >
        <option value="0">bad 0%</option>
        <option value="10">Good 10%</option>
        <option value="20">Great 20%</option>
      </select>
    </div>
  );
}

function Total({ bill, tip }) {
  return (
    <h2 className="text">
      You Pay ${bill + tip} (${bill} + ${tip} tip)
    </h2>
  );
}

function Reset({ onReset }) {
  return (
    <button className="button" onClick={onReset}>
      Reset
    </button>
  );
}
