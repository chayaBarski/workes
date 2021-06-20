import produce from 'immer'
import createReducer from "./ReducerUtil";

const initialState={
    user:{
        _id:"",
        fullName:"",
        email:"",
        password:"",
        statuse:""
    },
    token:"",
 
}
const user={
    saveUser(state,action){
        state.user=action.payload
    },
    saveToken(state,action){
        
        state.token=action.payload
    }
  
}

export default produce((state, action) => createReducer(state, action, user), initialState);
