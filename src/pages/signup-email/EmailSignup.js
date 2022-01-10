import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../config/firebase";

import Button from "../../ui/button/Button";
import Card from "../../ui/card/Card";
import "../registration/registration.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { UserAction } from "../../redux/user";

export default function EmailSignup() {
  const [singup, setSingup] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const singupChnghndlr = (event) => {
    const { name, value } = event.target;
    setSingup((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, singup.email, singup.password)
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
            onChange={singupChnghndlr}
            value={singup.email}
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
            onChange={singupChnghndlr}
            value={singup.password}
            required=""
          />
        </div>

        <Button onClick={onSubmit}>Submit</Button>
      </form>
    </Card>
  );
}
