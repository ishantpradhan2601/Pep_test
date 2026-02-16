import { useState, useRef, useEffect } from "react";

function FocusTrackerApp() {
  const [messages, setMessages] = useState([]);
  const [focusCount, setFocusCount] = useState(0);

  const inputRef = useRef(null);
  const valueRef = useRef("");

  const handleFocus = () => {
    setFocusCount((prev) => prev + 1);
  };

  const handleChange = (e) => {
    valueRef.current = e.target.value;
  };

  const saveMessage = () => {
    if (valueRef.current.trim()) {
      setMessages([...messages, valueRef.current]);
      inputRef.current.value = "";
      valueRef.current = "";
    }
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log("Messages updated");
  }, [messages]);

  return (
    <div>
      <h2>Focus Tracker</h2>

      <input
        ref={inputRef}
        onFocus={handleFocus}
        onChange={handleChange}
        placeholder="Type message"
      />

      <button onClick={saveMessage}>Save</button>
      <button onClick={focusInput}>Focus Input</button>

      <h3>Focus Count: {focusCount}</h3>

      {messages.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
    </div>
  );
}

export default FocusTrackerApp;
