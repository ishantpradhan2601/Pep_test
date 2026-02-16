import { useState, useEffect } from "react";

const useCharacterCount = (limit = 50) => {
  const [text, setText] = useState("");
  const [remaining, setRemaining] = useState(limit);

  useEffect(() => {
    setRemaining(limit - text.length);
  }, [text, limit]);

  const handleChange = (e) => {
    if (e.target.value.length <= limit) {
      setText(e.target.value);
    }
  };

  return { text, remaining, handleChange };
};

export default useCharacterCount;
