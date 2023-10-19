import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");

  useEffect(() => {
    if (password !== confirmPassword) setPassError("password doesnt match");
    else setPassError("");
  }, [confirmPassword]);
  return (
    <div className="h-full min-h-screen w-full flex bg-gradient-to-r from-teal-500 via-yellow-300 to-teal-500 justify-center items-center">
      <div className="min-w-[480px] h-auto w-auto p-8 rounded-lg flex flex-col gap-8">
        <h1 className="text-4xl ">Signup</h1>
        <div className="justify-center items-center flex flex-col">
          <TextField
            className=""
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            variant="outlined"
            size="small"
            fullWidth
          />
        </div>
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
        <div className="justify-center items-center flex flex-col">
          <TextField
            className=""
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {passError && <div>{passError}</div>}
        <div className="flex flex-col">
          <Button variant="contained" color="primary">
            Create Account
          </Button>
          <p className="p-2">
            Alreday have an account?{" "}
            <span>
              <Link to="/login">login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
