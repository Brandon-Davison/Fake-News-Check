import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './fake2.jpg';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import FormHelperText from '@material-ui/core/FormHelperText';
import './App.css';

const useStyles = makeStyles(theme => ({
   div1: {
    float: "left"
  },
  div2: {
    float: "left"
  },
  TwitterTimelineEmbed: {
    marginLeft: 50
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* AppBar component */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Fake News Checker   
          </Typography>
          <Typography variant="h4">.     @FakeNewsCheck2</Typography>
          </Toolbar>
      </AppBar>

      {/* Twitter timeline */}  
      <div style={{ display: "flex", float:"left"}}>
        <TwitterTimelineEmbed 
          style={{ marginLeft: "auto" }}
          sourceType="profile"
          screenName="FakeNewsCheck2"
          width="125"
          />
      </div>

      {/* Form inputs */}
      <div id="div2">
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <TextFieldsIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TextFieldsIcon/>
            </InputAdornment>
          ),
        }}
      />
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextFieldsIcon/>
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>
      </div>

    </div>
  );
}

export default App;
