import React, { useEffect, useState } from 'react';
import authStore from '../store/authStore';
import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';
import { Typography,Button, Box, TextField } from "@mui/material";

const RegisterComponent = observer(() => {
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const authenticated = authStore.isAuthenticated();
    const navigate = useNavigate();
    const handleRegister = async () => {
      await authStore.register({userName, password});
      navigate("/login");
    }

  return (
      <div>
      {!authenticated && <form>
      <Box display="flex" 
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
      }, backgroundColor: 'whitesmoke'}}
      >
        <Typography variant="h5" padding={2} textAlign="center" dir="rtl">לא רשום? הרשם עכשיו!</Typography>
            <TextField margin="normal" 
            size="small" type="text" 
            variant="outlined" placeholder="שם משתמש" 
            dir="rtl"
            onChange={(e) => setUserName(e.target.value)}>
            </TextField>
            
            <TextField margin="normal" 
            size="small" type="text" 
            variant="outlined" placeholder="סיסמא" 
            dir="rtl"
            onChange={(e) => setPassword(e.target.value)}>
            </TextField>

            <Button sx={{margin: 1}}
            variant="contained"
            dir="rtl"
            onClick={handleRegister}>הרשמה</Button>
        </Box>
        </form>}
    </div>
  );
});

export default RegisterComponent;
