import React from "react"
import useGame from "./GameLogic/useGame"

function App(){
  const {textBoxRef,start,startClock,updateUserText,userText,timeRemaining,wordCount} = useGame()

  return(
      <div className="App">
          <h1>How fast do you type</h1>
          <textarea 
            ref={textBoxRef}
            disabled={!start}
            onChange={ updateUserText }
            value={userText}
          />
          <h4>Time remaining: {timeRemaining}</h4>
          <button disabled={start} onClick={()=>startClock()}>Start</button>
          <h1>Word Count: {wordCount}</h1>
      </div>
  )
}

export default App