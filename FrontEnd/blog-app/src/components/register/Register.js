import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from '@material-ui/core/Avatar';
import CardContent from "@material-ui/core/CardContent";
import IconButton from '@material-ui/core/IconButton';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Blog
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register(props) {

  async function handleUploadImage(input){
    
    if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            props.setUrl(e.target.result);
            props.inputImageRef.current = input;
        };

        reader.readAsDataURL(input.target.files[0]); 
    }

  }

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "6em" }}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <CardContent style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
          <b>Profile pic</b>
          <IconButton
            size = 'small'
          >
           <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              type="file"
              style={{display:'none'}}
              onInput = {handleUploadImage}
            />
            <label htmlFor="contained-button-file">
            <Avatar
              src={`${props.url}`}
              style = {{height:'100px',width:'100px'}}
            />
           </label>

           
          </IconButton>
        
        </CardContent>
        <form
          className={classes.form}
          method="post"
          onSubmit={props.handleSubmit}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                value={props.firstName}
                onInput={(e) => props.setFirstName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={props.lastName}
                onInput={(e) => props.setLastName(e.target.value)}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="text"
                id="name"
                label="user name"
                name="userName"
                value={props.userName}
                onInput={(e) => props.setUserName(e.target.value)}
                autoComplete="text"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={props.password}
                onInput={(e) => props.setPassword(e.target.value)}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            <div style={{ width: "100%" }}>
              <TextareaAutosize
                style={{
                  display: "block",
                  width: "100%",
                  height: "10vh",
                  marginTop: "1em",
                }}
                aria-label="maximum height"
                placeholder="description"
                name="description"
                value={props.description}
                onInput={(e) => props.setDescription(e.target.value)}
              />
            </div>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Login in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
