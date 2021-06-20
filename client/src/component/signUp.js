import axios from "axios";
import React, { useState } from "react";
import { actions } from "../redux/stor/action";
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: (user) => { dispatch(actions.saveUser(user)) },
    saveToken: (token) => { dispatch(actions.saveToken(token)) },
    savePicture: (picture) => { dispatch(actions.savePicture(picture)) },
    savePictures: (pictures) => { dispatch(actions.savePictures(pictures)) },
  }
}
export default compose(withRouter, connect(null, mapDispatchToProps))(function SignUp(props) {
  const [fullName, setFullNmae] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { history, saveUser, savePicture,savePictures ,saveToken} = props

  const handlerSubmit = event => {
    event.preventDefault();
    axios.post("http://localhost:4000/setNewEmployed", {fullName, password, email })
      .then(respons => {
        saveUser(respons.data.user);
        saveToken(respons.data.token)
        history.push("/AllUsers");
      }).catch(err => {
        alert("sign up failed")
      })
  }

 
  return (
    <form onSubmit={handlerSubmit} className="auth-inner">
      <h1>Sign In</h1>
      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="Full name" onChange={(e) => { setFullNmae(e.target.value) }} />
      </div>
      <div className="form-group">
        <label>Last name</label>
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => { setPassword(e.target.value) }} />
      </div>

      <button type="submit" className="btn btn-dark btn-block">Sign Up</button>
    </form>

  );
}
)
