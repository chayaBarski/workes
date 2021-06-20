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
        savePictures: (pictures) => { dispatch(actions.savePictures(pictures)) },
        savePicture: (picture) => { dispatch(actions.savePicture(picture)) }
    }
}

export default compose(withRouter, connect(null, mapDispatchToProps))(function Login(props) {
    const { history, saveUser, saveToken } = props
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlerSubmit = event => {
        event.preventDefault();
        axios.post("http://localhost:4000/checkPermission", { password, email })
            .then(respons => {
                saveUser(respons.data.user);
                saveToken(respons.data.token)
                history.push("/AllUsers");
            }).catch(err => {
                alert("Incorrect username and password")
                history.push("/")
            })
    }
    return (
        <>
            <form onSubmit={handlerSubmit}id="loginForm" className="auth-inner">
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" onChange={(e) => { setEmail(e.target.value) }}  placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control"  placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-dark btn-block">Submit</button>
            </form>
        </>
    );
})

