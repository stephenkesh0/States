import React, { useState } from 'react'

const State = () => {
  const [nameState, setNameState] = useState("Bambo")
  const [jobTitleState, setJobTitleState] = useState("Cocoa farm")
  const [familyState, setFamilyState] = useState("1 wife and 2 kids")

  const coronation = () => {
    setNameState("Prince Bambo the first")
    setJobTitleState("city")
    setFamilyState("4 wives and 23 kids")
  }
  return (
    <>
    <div>
      I am Mr {nameState}, I run a {jobTitleState}, I have {familyState}.
    </div>
    <button onClick={coronation} className='border p-1 rounded ring'>Coronation</button>
    </>
  )
}

export default State