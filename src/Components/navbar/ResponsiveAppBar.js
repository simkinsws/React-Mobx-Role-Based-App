import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';
import authStore from '../../store/authStore';
import "./Navbar.css";
// import useStyles from "../../themes/useStyles";
const Navbar = () => {

        // const classes = useStyles();
        const [user,setUser] = useState();
        useEffect(() => {
            const userFromLS = localStorage.getItem("userName");
            setUser(userFromLS);
            authStore.setUserName(userFromLS);
        },[])   

        const MenuArray = [
            {
              title: "All My Issues",
              url: `/profile/${authStore.name}/posts`,
            },
            {
              title: "Profile Page",
              url: `/profile/${authStore.name}`,
            },
          ];

        const [clicked, setClicked] = useState(false);

        const menuList = MenuArray.map(({ url, title }, index) => {
          return (
            <li key={index}>
              <NavLink to={url}>
                {title}
              </NavLink>
            </li>
          );
        });
      
        const handleClick = () => {
          setClicked(!clicked);
        };
      
        return (
            // <div>{menuList}</div>
          <nav>
            <div className="logo">
              MUnique<font> Client Issues System</font>
            </div>
            <div className="menu-icon" onClick={handleClick}>
              <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}
            <Button variant="text" sx={{
              marginLeft: 2,
              color: "white",
              backgroundColor: "red"
            }} onClick={authStore.logOut}>Logout</Button></ul>
          </nav>
        );
      };
      
export default Navbar;