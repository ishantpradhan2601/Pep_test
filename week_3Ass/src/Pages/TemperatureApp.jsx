import useTemperature from "../Hooks/UseTemperature";
import TemperatureInput from "../components/TemperatureInput";

function TemperatureApp() {
  const { celsius, setCelsius, fahrenheit, setFahrenheit } = useTemperature();

  return (
    <div>
      <h2>Temperature Converter</h2>

      <TemperatureInput
        label="Celsius"
        value={celsius}
        onChange={setCelsius}
      />

      <TemperatureInput
        label="Fahrenheit"
        value={fahrenheit}
        onChange={setFahrenheit}
      />
    </div>
  );
}

export default TemperatureApp;
