import React, { useState } from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Button, Input } from "@material-ui/core"

// state: 実体+関数
const App = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('hello')
  return (
    <>
      <Header count={count} />
      {message}: { count}
      <div>
        <Button onClick={() => setCount(cnt => ++cnt)}>+</Button>
        <Button onClick={() => setCount(cnt => --cnt)}>-</Button>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)} />
      </div>
      <Footer />
    </>
  )
}

export default App;
