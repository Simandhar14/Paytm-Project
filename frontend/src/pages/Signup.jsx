import React, { useState } from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import Inputbox from "../components/Inputbox";
import { Button } from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      const navigate = useNavigate();
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          username,
          password,
          firstName,
          lastName,
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      setMessage("Signup Successful!");
      useNavigate("/dashboard");
      console.log("Signup Successful:", response.data);
    } catch (error) {
      setMessage(
        "Signup Failed! " +
          (error.response ? error.response.data.message : error.message)
      );
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
          <Subheading label={"Enter your information to create an account"} />
          <Inputbox
            placeholder={"Enter your First Name"}
            label={"First Name"}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Inputbox
            placeholder={"Enter your Last Name"}
            label={"Last Name"}
            onChange={(e) => setLastname(e.target.value)}
          />
          <Inputbox
            placeholder={"Enter your Email"}
            label={"Email"}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Inputbox
            placeholder={"Enter your Password"}
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="pt-4">
            <Button label={"Sign Up"} onClick={handleSignup} />
          </div>
          {message && <p className="text-red-500 mt-2">{message}</p>}{" "}
          {/* Show message */}
          <BottomWarning
            label={"Already have an account?"}
            buttontext={"Sign In"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
