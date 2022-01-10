import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "../../ui/card/Card";
import Button from "../../ui/button/Button";
import { sendData } from "../../redux/auth-action";

export default function Registration() {
  const [registerData, setregisterData] = useState({
    name: "",
    email: "",
    password: "",
    confipass: "",
    phone: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const registerHandler = (event) => {
    const { name, value } = event.target;
    setregisterData((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(sendData(registerData));
    history.push("/login");
  };

  return (
    <>
      <Card>
        <h3>signup with email</h3>
        <Link to="/email-signup">
          <Button>sing up via Email</Button>
        </Link>
        <h6 style={{ textAlign: "center" }}> or</h6>
        <h3 className="text-center">welcome to WebSkitters</h3>
        <form className="login">
          <div className="control">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              className="control-input"
              type="name"
              name="name"
              placeholder="Enter your Name"
              onChange={registerHandler}
              value={registerData.name}
              required
            />
          </div>
          <div className="control">
            <label className="label" htmlFor="email">
              E-Mail
            </label>
            <input
              className="control-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={registerHandler}
              value={registerData.email}
              required
            />
          </div>
          <div className="control">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="control-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={registerHandler}
              value={registerData.password}
              required=""
            />
          </div>
          <div className="control">
            <label className="label" htmlFor="password">
              Confirm Password
            </label>
            <input
              className="control-input"
              type="password"
              name="confipass"
              placeholder="Enter your password"
              onChange={registerHandler}
              value={registerData.confipass}
              required=""
            />
          </div>
          <div className="control">
            <label className="label" htmlFor="name">
              phone number
            </label>
            <input
              className="control-input"
              type="name"
              name="phone"
              placeholder="Enter your phone no."
              onChange={registerHandler}
              value={registerData.phone}
              required=""
            />
          </div>

          <Button onClick={onSubmit}>Submit</Button>
        </form>
      </Card>
    </>
  );
}
