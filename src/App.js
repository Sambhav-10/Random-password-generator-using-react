
import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  useEffect(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&&*()_+=~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
    // passwordGenetor()
  }, [length, numberAllowed, charAllowed, setPassword])

  const passwordref = useRef(null)
  const copypassword = () => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div className='maindiv'>
        <div className='container'>
          <div className='heading'>

          <h1>Random Password Genetor</h1>
          </div>
          <div className='inputSection'>
            <input type="text" placeholder="copy the password"  value={password} ref={passwordref} /><br />
            <button className='' onClick={copypassword}>copy</button>

          </div>
          <div className='rangeSection'>
            <input type="range" value={length} min={6} max={50} readOnly onChange={(e) => { setLength(e.target.value) }} />
            <p>{length}</p>
          </div>

          <div className='moreFuncnality'>
            <h1> Charecter: <input type="checkbox"
              id='chareterInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }} /></h1>
              
              <h1>Numbers:<input type="checkbox" defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }} /></h1>
          

          </div>


        </div>
      </div>
    </>
  );
}

export default App;
