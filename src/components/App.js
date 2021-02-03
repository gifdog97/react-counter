import React, { useState } from 'react'

// state: 実体+関数
const App = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('hello')
  return (
    <>
      { message}: { count}
      <div>
        <button onClick={() => setCount(cnt => ++cnt)}>+</button>
        <button onClick={() => setCount(cnt => --cnt)}>-</button>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
    </>
  )
}

export default App;
