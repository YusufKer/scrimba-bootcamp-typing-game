import {useState, useEffect, useRef} from "react"

function useGame(){
    const initialTimeValue = 60
    const [ userText, setUserText ] = useState("")
    const [ timeRemaining, setTimeRemaining ] = useState(initialTimeValue)
    const [ start, setStart ] = useState(false)
    const [ wordCount, setWordCount ] = useState(0)
    const textBoxRef = useRef(null)
  
    const updateUserText = event =>{
      setUserText(event.target.value)
    }
    const calculateWordCount = (words) =>{
      const wordsArray = words.trim().split(" ").filter(word => word!=='')
      const wordCount = wordsArray.length
      return wordCount
    }
    const startTimer = () =>{
      setStart(true)
      console.log("button clicked")
    }
    const startClock = ()=>{
      startTimer()
      setTimeRemaining(initialTimeValue)
      setUserText("")
      textBoxRef.current.disabled=false
      textBoxRef.current.focus()
    }
    const endClock = () =>{
      setStart(false)
      setWordCount(calculateWordCount(userText))
    }
    useEffect(()=>{
      if(timeRemaining > 0 && start){
        setTimeout(()=>{
          setTimeRemaining(time => time - 1)
          console.log("Still running")
        },1000)
      }else if(timeRemaining === 0){
        endClock()
        console.log("Stopped running")
      }
      
    },[timeRemaining, start])

    return ({textBoxRef,start,startClock,updateUserText,userText,timeRemaining,wordCount})
}

export default useGame