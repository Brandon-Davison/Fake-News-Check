import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';import logo from './fake2.jpg';
import {Route} from "react-router-dom";
import './App.css';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(20),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar alignItems="center" display="flex">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Fake News Checker
          </Typography>
          <Button onClick={
             <Route
             path="/example"
             component={() => {
             global.window && (global.window.location.href = 'https://example.com');
             return null;
             }}
         />
          }>Go to Twitter Bot</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
