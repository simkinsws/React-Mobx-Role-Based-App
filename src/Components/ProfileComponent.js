import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react'
import authStore from '../store/authStore';
import configuration from '../config.json';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import LatestPostsOfUser from './posts/LatestPostsOfUser';
const ProfileComponent = observer(() => {

  const [userNameLocal, setUserNameLocal] = useState();
  useEffect(() => {
        const userFromLogin = localStorage.getItem("userName");
        setUserNameLocal(userFromLogin);
        authStore.logoutAutomatic();
        authStore.setUserName(userFromLogin);
      },[]);
 

      // const checkUserName = async (token) => {
      //   await axios({method: 'get', 
      //   url: `${configuration.ApiUrls.baseUrl}Auth/GetUserName`,
      //   headers: {
      //     'authorization' : "bearer " + token
      //    }})
      //   .then(response => {
      //     setName(response.data);
      //     setToken(token);
      //   })
      //   .catch(error => {
      //     console.log("Error with getting userName" + error);
      //   })
      // }

  return (
    <div className="page-heading">
      {/* <h1>Welcome {userNameLocal}</h1> */}
      <LatestPostsOfUser></LatestPostsOfUser>
      </div>
  )
});


export default ProfileComponent;