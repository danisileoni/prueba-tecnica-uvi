import { useState } from "react"

/**
 * 
 * @param {Number} initialValue ej. 10
 *  
 * @returns {{counter: value, increment: addition, decrement: subtraction, reset: resetValue}}increment, decrement and reset are functions 
 */
export const useCounter = (initialValue = 10) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () => {
    if(counter <= 0) return setCounter(0);
    setCounter(counter - 1);
  }
  
  const reset = () => {
    setCounter(initialValue);
  }



  return {
    counter,
    increment,
    decrement,
    reset,
  }
}


