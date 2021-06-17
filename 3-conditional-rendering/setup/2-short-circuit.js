import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || 'Hello World'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError ? (
        <h2>Error</h2>
      ) : (
        <div>
          <h1>There is No Error</h1>
        </div>
      )}
      {/* Using the button to change toggle with false or true values */}
      {/* <h2>{isError && <h1>Error ...</h1>}</h2> */}
      {/* Checking state with and operator */}
      {/* <h2>{!text && 'john doe'}</h2> */}
    </>
  )
}

export default ShortCircuit
