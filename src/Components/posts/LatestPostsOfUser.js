import axios from "axios";
import React, { useEffect, useState } from "react";
import UserPost from "./UserPost";
import configuration from "../../config.json";
import authStore from "../../store/authStore";
import {Card, Box} from '@mui/material';
const LatestPostsOfUser = () => {
  const [latestPosts, setLatestPosts] = useState(null);

  useEffect(() => {
    console.log(latestPosts);
    console.log("Before Axios Request");
      const userFromLS = localStorage.getItem("userName");
      authStore.setUserName(userFromLS);
      const getLatestOfUser = async () => {
        await axios
          .get(
            `${configuration.ApiUrls.baseUrl}Post/GetLatestPostsByUserName/${authStore.name}`
          )
          .then((response) => {
            console.log(response.data);
            setLatestPosts(response.data);
            authStore.setLatestPostsOfUser(response.data);
            console.log("After axios Request");
          })
          .catch((error) => {
            console.log(error);
          });
      };
      if(latestPosts == null) {
      getLatestOfUser();
      }
  },[]);

  return (
    <div>
      {/* {authStore.latestPostsOfUser.length > 0 && <h3 className="userName-posts">Last Issues {authStore.name} Opened</h3>}
      {authStore.latestPostsOfUser.length > 0 && authStore.latestPostsOfUser.map(item => (
        <li className="list-posts" style={{listStyleType: 'none', margin: 10, display: 'flex', flexDirection: 'column'}}
         key={item.id}><UserPost name={item.name} phone={item.phone} branch={item.branch}
         description={item.description}></UserPost></li>
      ))} */}

      {/* <Box display="flex" 
      flexDirection={"column"} 
      maxWidth={400}
      alignItems="center" 
      justifyContent={"center"}
      margin= "auto"
      marginTop={25}
      borderRadius={4}
      boxShadow={"0px 0px 7px 0px #c2c2c2"}

      sx={{":hover": {
        boxShadow:'0px 0px 10px 2px #c2c2c2'
      }, backgroundColor: 'whitesmoke'}}> */}
        <Card sx={{margin: 3, backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white", height: "22vh"}}>
          SADASDASd , SADASDASd, SADASDASd ,SADASDASd ,SADASDASd
        </Card>

        <Card sx={{margin: 3}}>
          SADASDASd
        </Card>

        <Card sx={{margin: 3}}>
          SADASDASd
        </Card>

      {/* </Box> */}

    </div>
  );
};

export default LatestPostsOfUser;
