import useCharacterCount from "../Hooks/UseCharacterCount";
import Display from "../components/Display";

function CharacterCounterApp() {
  const { text, remaining, handleChange } = useCharacterCount(50);

  return (
    <div>
      <h2>Live Character Counter</h2>

      <textarea value={text} onChange={handleChange} />

      <Display text={text} remaining={remaining} />
    </div>
  );
}

export default CharacterCounterApp;
