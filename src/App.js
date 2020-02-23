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
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { SnackbarProvider } from 'notistack';
import MuiAlert from '@material-ui/lab/Alert';

import './App.css';

const useStyles = makeStyles(theme => ({
   div1: {
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {

  const [headline, setHeadline] = React.useState("Headline not set");
  const [url, setUrl] = React.useState("url not sent")
  const [sendSucess, setSendSuccess] = React.useState(-1)

  const sendTweet = () => {
    console.log("Headline: ", headline)
    console.log("url: ", url) 
  }

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
      <div id="div1">
        <form 
        className={classes.root} noValidate autoComplete="off" 
        style = {{ width : 700, height : 150, marginLeft : 550, marginTop : 150 }}>
          <div id={classes.root}>
            <TextField id="headlline" label="headline" variant="outlined" multiline onChange={e => setHeadline(e.target.value)}/>
            <TextField id="url" label="url" variant="outlined" multiline onChange={e => setUrl(e.target.value)}/>
            <div style = {{ marginLeft : 150, width : 100 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={sendTweet}>
                  Send
              </Button>
            </div>
          </div>
        </form>
      </div>
      
      <div id="div1" className={classes.root} style = {{ marginLeft : 200 }}>
      </div>

    </div>
  );
}

export default App;
