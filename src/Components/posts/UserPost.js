import * as React from 'react';
import { Card,Typography, CardContent, CardActions, Button } from '@mui/material';

const UserPost = (props) => {
  return (
    <div dir='rtl' style={{textAlign: 'right'}}>
      <h2>שם הסניף : {props.branch}</h2>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
          <h4> שם איש הקשר : {props.name}</h4>
          <h4>טלפון ליצירת קשר : {props.phone}</h4>
          <h4>מידע נוסף :</h4>
      </div>
      <div style={{marginTop: 2}}>
        <span>פירוט התקלה :</span>
        <div>
          <span>המחשב לא נטען מכיוון שנשרף ההארדיסק{props.description}</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: 15  }}>
          <Button size="small" color="info" variant='outlined'>צפה בקריאה</Button>
          <Button size="small" color="inherit" variant='outlined'>ערוך קריאה</Button>
          <Button size="small" color="error" variant='outlined'>מחק קריאה</Button>
      </div>
    </div>
  );
}

export default UserPost;