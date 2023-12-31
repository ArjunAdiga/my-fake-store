import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {signInWithEmailAndPassword,} from 'firebase/auth'
import {auth} from '../../firebase'
import Alert from '@mui/material/Alert';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");

  const navigate=useNavigate()

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email,password).then(async(res) => {
      setEmail('')
      setPassword('')
      navigate('/home')
    }).catch((err) => {setPassError(err.message)  
      console.log("Error",err)})
  }
  return (
    <div className=" flex  bg-gradient-to-r from-teal-500 via-yellow-300 to-teal-500 justify-center items-center content-center min-h-screen">
    <div className="  min-w-[480px]   p-6 rounded-lg flex flex-col gap-8 ">
      <h1 className="text-4xl ">Login</h1>
      
      <div className="justify-center items-center flex flex-col">
        <TextField
          className=""
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="justify-center items-center flex flex-col">
        <TextField
          className=""
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          variant="outlined"
          size="small"
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Login
        </Button>
        {passError && <Alert severity="error" className="my-2">{passError}</Alert>}
        <p className="p-2">
          Don't' have an account?{" "}
          <span>
            <Link to="/">register</Link>
          </span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Login