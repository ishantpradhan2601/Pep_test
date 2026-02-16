import { useState } from "react";

const useTemperature = () => {
  const [temperature, setTemperature] = useState({ value: "", scale: "c" });

  const celsius =
    temperature.scale === "c"
      ? temperature.value
      : temperature.value
        ? (((parseFloat(temperature.value) - 32) * 5) / 9).toFixed(2)
        : "";

  const fahrenheit =
    temperature.scale === "f"
      ? temperature.value
      : temperature.value
        ? ((parseFloat(temperature.value) * 9) / 5 + 32).toFixed(2)
        : "";

  const setCelsius = (value) => setTemperature({ value, scale: "c" });
  const setFahrenheit = (value) => setTemperature({ value, scale: "f" });

  return { celsius, setCelsius, fahrenheit, setFahrenheit };
};

export default useTemperature;
