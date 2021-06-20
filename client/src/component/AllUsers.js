import React, { useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { compose } from "redux";
import { connect } from "react-redux";
import singUp from "./signUp"
import axios from "axios";
function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
    }
}


export default compose(withRouter, connect(mapStateToProps))(function Hello(props) {
function useEffect(){
    axios.get("http://localhost:4000/getAllEmployed")
    .then(respons => {
       const users=respons.users;
    }).catch(err => {
        console.log(err);
        
    })

}
    const { user } = props
    return (
        <>
          {user.statuse==='admin'?<singUp></singUp>:""}
        </>
    );
}
)
