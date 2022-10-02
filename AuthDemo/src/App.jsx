import { useState } from 'react'
import { useEffect } from 'react'
import { auth } from './firebase-config'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth'
import './App.css'

function App() {
  const [user, setUser] = useState();

useEffect(() => {
  const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(currentUser);
  });
  return ()=>{
    unSubscribe()
  };
},[])

  console.log(user);

  const handleGoogleLogin=(e)=>{
    e.preventDefault();
    const provider=new GoogleAuthProvider();
    signInWithPopup(auth,provider);
  }

  const handleGoogleLogout=(e)=>{
    e.preventDefault();
    signOut(auth);
  }

  return (
    <div className="App">

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleGoogleLogin}>
          Google Login
        </button>
        <button onClick={handleGoogleLogout}>
          Google Logout
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {user?`Welcome ${user.displayName}`:"Login kar pehle"}
      </p>
    </div>
  )
}

export default App
