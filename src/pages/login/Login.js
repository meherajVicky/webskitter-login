import { React, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/button/Button";
import Card from "../../ui/card/Card";
import "./login.css";
import { useDispatch } from "react-redux";
import { UserAction } from "../../redux/user";
import { useHistory } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../config/firebase";

export default function Login() {
  const [loginData, setloginData] = useState({
    name: "",
    email: "",
    password: "",
    confipass: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin = (event) => {
    const { name, value } = event.target;
    setloginData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://webskitters-database-8cdee-default-rtdb.asia-southeast1.firebasedatabase.app/user.json"
    );
    const data = await response.json();
    console.log(data);

    if (
      data?.email === loginData.email &&
      data?.password === loginData.password
    ) {
      localStorage.setItem("token", "5");
      dispatch(UserAction.setUser(data));

      localStorage.setItem("userDetails", JSON.stringify(data));
      //   alert("everything ok");
      history.replace("/dashboard");
    } else {
      alert("wrong password and Name");
    }
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
        alert(error);
        console.log(error);
        alert(error);
      });
  };
  return (
    <Card>
      <h3 className="text-center">WebSkitters</h3>
      <form className="login">
        <div className="control">
          <label className="label" htmlFor="email">
            E-Mail
          </label>
          <input
            className="control-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleLogin}
            value={loginData.email}
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
            onChange={handleLogin}
            value={loginData.password}
          />
        </div>
        <Button onClick={onLogin}>Login</Button>
        <br></br>
        <br></br>
        <Button onClick={onSubmit}>login with gmail</Button>
      </form>
      <h6 style={{ textAlign: "center" }}> or</h6>
     
      <br></br>
      <Link to="/registration">
        <p>new in WebSkitters?</p>
      </Link>
    </Card>
  );
}
