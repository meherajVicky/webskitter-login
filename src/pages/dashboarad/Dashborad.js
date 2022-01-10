import { getAuth, signOut } from "firebase/auth";
import app from "../../config/firebase";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { UserAction } from "../../redux/user";
import Button from "../../ui/button/Button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Dashborad() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const user =
      localStorage.getItem("userDetails") === null
        ? ""
        : localStorage.getItem("userDetails");

    dispatch(UserAction.setUser(JSON.parse(user)));
  }, []);

  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        localStorage.clear();
        history.replace("/login");
      })
      .catch((error) => {});
  };
  const userData = useSelector((state) => state.user.user);

  console.log(userData);
  return (
    <div>
      <h1>
        hey <i>{userData?.email}</i>,welcome back
      </h1>

      <Button onClick={handleLogout}> log out </Button>
      <br></br>
      <hr></hr>
      <Link to="/dashboard/todo"><h3>to do </h3></Link>
    </div>

  );
}
