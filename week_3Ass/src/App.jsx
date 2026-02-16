import { useState } from 'react'
import UserSearchApp from "./Pages/UserSearchApp";
import CharacterCounterApp from "./Pages/CharacterCounterApp";
import TemperatureApp from "./Pages/TemperatureApp";
import FocusTrackerApp from "./Pages/FocusTrackerApp";

function App() {
  const [activeTab, setActiveTab] = useState('search');

  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setActiveTab('search')}>User Search</button>
        <button onClick={() => setActiveTab('counter')}>Character Counter</button>
        <button onClick={() => setActiveTab('temp')}>Temperature</button>
        <button onClick={() => setActiveTab('focus')}>Focus Tracker</button>
      </nav>

      {activeTab === 'search' && <UserSearchApp />}
      {activeTab === 'counter' && <CharacterCounterApp />}
      {activeTab === 'temp' && <TemperatureApp />}
      {activeTab === 'focus' && <FocusTrackerApp />}
    </div>
  )
}

export default App
