import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Slack Alert Notification POC</h1>
      <div className="card">
        <h2>GitHub Actions Demo</h2>
        <p>This is a demonstration of Slack notifications triggered by GitHub Actions</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Trigger count: {count}
        </button>
      </div>
    </>
  )
}

export default App


