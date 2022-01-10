import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "../../ui/card/Card";
import Button from "../../ui/button/Button";
import { UserAction } from "../../redux/user";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../config/firebase";

export default function LoginEmail() {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const loginChnghndlr = (event) => {
    const { name, value } = event.target;
    setloginData((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        localStorage.setItem("token", user?.accessToken);

        const userDetails = {
          email: user?.email,
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        dispatch(UserAction.setUser(user));
        history.push("/dashboard");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(error);
        alert(error)
      });
  };

  return (
    <Card>
      <form>
        <div className="control">
          <label className="label" htmlFor="name">
            Email
          </label>
          <input
            className="control-input"
            type="email"
            name="email"
            placeholder="Enter your email."
            onChange={loginChnghndlr}
            value={loginData.email}
            required=""
          />
        </div>
        <div className="control">
          <label className="label" htmlFor="name">
            password
          </label>
          <input
            className="control-input"
            type="password"
            name="password"
            placeholder="Enter your E-mail."
            onChange={loginChnghndlr}
            value={loginData.password}
            required=""
          />
        </div>

        <Button onClick={onSubmit}>Submit</Button>
      </form>
    </Card>
  );
}
