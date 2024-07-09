import React from 'react'
import { useState } from 'react'

const Apostle = () => {
  // Step 2: Create state variables and a function
  const [nameState, setNameState] = useState("Bolu") 
  const [jobTitleState, setJobTitleState] = useState("upcoming artiste")
  const [locationState, setLocationState] = useState("I came from the Gutters")

  const meetApostle = () => {
    setNameState("BoluCello")
    setJobTitleState("Supper Star")
    setLocationState("I now live in London")
  }
  return (
      <>
     <div>
       Hello, My name is {nameState}, I am an {jobTitleState} and I play the Cello and {locationState}
     </div>
     <button onClick={meetApostle} className='border p-1 rounded ring'>Meet Apostle</button>
    
     </>
  )
}

export default Apostle