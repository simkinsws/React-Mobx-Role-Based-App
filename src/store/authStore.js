import {makeAutoObservable, runInAction} from "mobx";
import api from "../api/api";
import configuration from "../config.json";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

class AuthStore {
  count = 0
  timer = 60
  authenticated = false; 
  name = "";
  role = "";
  isLoggedIn;
  userLoggedInName = "";
  token = "";
  dataArr = []
  latestPostsOfUser = ""
  userAllPosts = []
  showSolutionColumn = false;
  showImageColumn = false;

  constructor() {
    makeAutoObservable(this);
    this.authenticated = !!this.getAccessToken();

    if(this.authenticated) {
      this.setUserName(localStorage.getItem("userName"));
      this.setTokenOfUser(localStorage.getItem("Authorization"));
      this.setRoleOfUser(localStorage.getItem("role"));
      this.logoutAutomatic();
    }
  }

  logoutAutomatic = () => {
    if(this.authenticated) {
      setTimeout(() => {
        localStorage.clear();
        window.location.reload();
      }, 1000 * 60 * 30);
    }
  }

  setAuthenticated = (authenticated) => {
    this.authenticated = authenticated;
  }

  setRoleOfUser = (role) => {
    this.role = role;
  }
  setSolutionColumnDisplay = (showColumn) => {
    this.showSolutionColumn = showColumn;
  }

  setImageColumnDisplay = (showColumn) => {
    this.showImageColumn = showColumn;
  }

  setUserName = (userName) => {
    this.name = userName;
  }

  getAccessToken = () => {
    return localStorage.getItem("Authorization");
  }

  setTokenOfUser = (token) => {
    this.token = token;
  }

  isAuthenticated = () => {
    return this.authenticated;
  }

  changeName(name) {
    this.name = name;
  }

  logOut = () => {
    localStorage.clear();
    window.location.href = "../../login";
  }

  setLatestPostsOfUser = (latestPostsOfUser) => {
    this.latestPostsOfUser = latestPostsOfUser;
  }

  
  setAllPostsOfUser = (userAllPosts) => {
    this.userAllPosts = userAllPosts;
  }

  loginUser = async(user) => {
    try{
        const response = await api.post(`${configuration.ApiUrls.baseUrl}Auth/login`,
        user);
        runInAction(() => {
          console.log(response);
          if(response.token != null) {             
             this.token = response.token;
             this.setAuthenticated(true);
             this.setUserName(response.userName);
             this.setRoleOfUser(response.role);
             localStorage.setItem("Authorization", this.token);
             localStorage.setItem("userName", response.userName);
             localStorage.setItem("role",response.role);
          }
        });
    } catch(error) {
      this.setAuthenticated(false);
      console.log("error occured NOW: " + error);
    }
   }

   register = async (user) => {
      try{
        const response = await api.post(`${configuration.ApiUrls.baseUrl}Auth/register`, user,null);
        runInAction(() => {
          console.log(response);
        })
      } catch(error) {
        console.log("error occured Now: " + error);
      }
   }

     // getData = async () => {
  //   try {
  //     const response = await api.get(`${configuration.ApiUrls.baseUrl}Admin/AllUsers`);
  //     runInAction(() => {
  //       this.dataArr = response;
  //       console.log(response);
        
  //     });
  //   } catch(e) {
  //     console.log(e);
  //   }
  //  }
}


export default new AuthStore()
