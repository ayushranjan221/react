import React,{useState,useContext} from "react";
import UserContext from "../Context/userContext";

function Profile(){
    const {user}=useContext(UserContext);
    if(!user) {
        return <div>pls login</div>
    }
    <div>welcome {user.username}</div>

}

export default Profile;