import { useState } from 'react'


function App() {
 const [firstName,setFirstName] = useState("");
 const [lastName,setLastName] = useState("");
 const [fullName,setFullName] = useState("");
 const submitForm=(e)=>{
  e.preventDefault();
  let fName = firstName[0].toUpperCase()+firstName.slice(1);
  let lName = lastName[0].toUpperCase()+lastName.slice(1);
  setFullName(`${fName} ${lName}`);
 }
  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={submitForm}>
        <label htmlFor='firstName'>First Name:</label>
        <input id='firstName' required value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/><br></br>
        <label htmlFor='lastName'>Last Name:</label>
        <input id='lastName' required value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/><br></br>
        <button type='submit'>Submit</button>
      </form>
      {fullName!="" && <p>Full Name: {fullName}</p>}
    </>
  )
}

export default App
