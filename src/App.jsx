import React, { useEffect, useState } from 'react'

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [show, setShow] = useState();
  useEffect(() => {
    if (!show)
      return;
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000)
    return () => {
      clearInterval(intervalId);
    }

  }, [show])
  return (
    <>
      <div>
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        {show && <h1>Current Time : {time}</h1>}

      </div>
    </>
  )
}
export default App