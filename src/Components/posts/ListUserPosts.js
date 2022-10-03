import React, { useEffect, useState } from "react";
import UserPost from "./UserPost";
import configuration from "../../config.json";
import authStore from "../../store/authStore";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Button } from "@mui/material";
import '../../App.css';
 const ListUserPosts = () => {
  const getMuiTheme = () =>
    createTheme({
      components: {

        MuiPaper: {
          styleOverrides:
          { root: 
            {
            // maxWidth: '930px',
            margin: 'auto',
            marginTop: '10px',
            marginBottom: '20px'
            }}
        }
      }
    });


  const [posts, setAllPosts] = useState(null);
  const [token, setToken] = useState();
  const columns = [
    {
      name: "id",
      label: "id",
      options: {
        display: 'false'
      }
    },
    {
      name: "name",
      label: "Contact Name",
    },
    {
      name: "phone",
      label: "phone",
    },
    {
      name: "solution",
      label: "solution",
      options: {
        display: authStore.showSolutionColumn ? 'true' : 'excluded'
      }
    },
    {
      name: "imageUrl",
      label: "Solution Image",
      options: {
        display: authStore.showImageColumn   ? 'true' : 'excluded',
        customBodyRender: () => {
          return (
              <a href="https://cloudclinicdevapi.azurewebsites.net/Profile/3704545668418.PNG">
                <Avatar variant="rounded" src="https://cloudclinicdevapi.azurewebsites.net/Profile/3704545668418.PNG"/>
              </a>
          );
        }
      }
    },
    {
      name: "branch",
      label: "branch",
    },
    {
      name: "description",
      label: "description",
    },
    {
      name: "dateCreated",
      label: "Date Open",
    },
    {
      name: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (dataIndex, rowIndex) => {
          return (
            <Button aria-label="edit" onClick={() => {
              console.log(authStore.userAllPosts[dataIndex].id);
            }}>Edit</Button>
          );
        }
      }
    },
  ];
  const data = [
    {id: 1, branch: "Netanya", description: "Comp not working"},
    {id: 2, branch: "Haifa", description: "Comp not working"},
    {id: 3, branch: "Haifa", description: "Comp not working"},
  ];

  const options = {
    filterType: 'checkbox',
    selectableRows: 'none',
  };
  useEffect(() => {
    const userFromLS = localStorage.getItem("userName");
    authStore.setUserName(userFromLS);
    const userTokenFromLS = localStorage.getItem("Authorization");
    authStore.setTokenOfUser(userTokenFromLS);
    if(userTokenFromLS) {
      setToken(userTokenFromLS);
    }

    const getAllUserPosts = async () => {
      // console.log(token);
      console.log(userTokenFromLS);
      await axios
        .get(
          `${configuration.ApiUrls.baseUrl}Post/GetAllPostsByUserName/${authStore.name}`,
          {headers: {'Authorization': 'Bearer ' + userTokenFromLS}}
        )
        .then((response) => {
          console.log(response.data);
          setAllPosts(response.data);
          authStore.setAllPostsOfUser(response.data);
          console.log("After axios Request");
        })
        .catch((error) => {
          console.log(error);
        });
    };
      getAllUserPosts();
  }, []);

  return (
    <ThemeProvider theme={getMuiTheme()}>
  <div style={{display: 'table', tableLayout:'fixed', width:'100%'}}>
    { authStore.userAllPosts &&
    <MUIDataTable
    title={`Posts of ${authStore.name}`}
    data={authStore.userAllPosts}
    columns={columns}
    options={options}/> }
  </div>
  </ThemeProvider>);
}

export default ListUserPosts;