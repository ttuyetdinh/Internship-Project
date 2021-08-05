import React, {useState} from 'react';
import {Avatar, Grid, Paper, TextField, Box, Button, Typography, Link} from '@material-ui/core';
//import { alpha, styled } from '@material-ui/core/styles';
import './login.css';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import InputBase from '@material-ui/core/InputBase';
//import InputLabel from '@material-ui/core/InputLabel';
//import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { Container } from '@material-ui/core';
import { InputRounded } from '@material-ui/icons';
import intro from './intro.jpg';
const Login =()=>{
    //const paperStyle={padding:30, height:30, width: 100, margin:'20px auto'};
    //const avatarStyle={backgroundColor:'rgb(16, 76, 206)'};
    //const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    //const cssSignup = {margin: '20px' !important }
    
    // const validPhone = new RegExp('(84|0[3|5|7|8|9])+([0-9]{8})');
    // const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState(false);
    const [passError, setPassError] = useState(false);
    // const handleClick = () =>{
    //   window.alert('Submitting......');
    // }
    const handleSubmit = (e) =>{
      e.preventDefault();
      setUserError(false);
      setPassError(false);
      if(username === ''){
        setUserError(true);
      }
      if(password === ''){
        setPassError(true);
      }
      if(username && password){
        console.log(username, password);
      }
    }
    return (
       <Container>
        <Grid container >
          <Grid xs={12} sm={6} md={6} item >
            <Grid xs={12} sm={12} md={12}  >
              <h1 className='title'>Digital Healthcare <br/> Record</h1>
              <p className='content'><b>Electronic health record</b>(<b>EHR</b>) is the systematized collection of patient
                            and population electronically stored health information in a digital format </p>
                            <img src={intro} alt="Logo" className='cssimage' 
               
               />;  
            </Grid>
            <Grid xs={12} sm={12} md={12}  >
             
            </Grid>              
                          
          </Grid>
          <Grid align='center' xs={12} sm={6} md={6} item >
            <Paper elevation={15} className='login'>
                   <Avatar  className='avatarStyle'>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <h2>Sign in</h2>
                    {/* <loginErrors formErrors={this.state.formErrors} /> */}
              
                    <form noValidate onSubmit={handleSubmit}>
                      <TextField
                        onChange={(e) => setUsername(e.target.value)}
                        id="outlined-phone-input"
                        label="Phone number"
                        type="text"
                        autoComplete="Username"
                        variant= "outlined"
                        margin= 'normal'
                        size='normal'
                        required
                        fullWidth
                        error={userError}
                      
                      /> 
                      <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="password"
                        variant= "outlined"
                        margin= 'normal'
                        required
                        fullWidth
                        error={passError}
                      />
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked name='checkA' color='primary' />} label="Remember me" />
                      </FormGroup>
                    
                      <Button 
                        type='submit' 
                        variant='contained' 
                        color='primary' 
                        fullWidth 
                      >
                        Sign in
                      </Button>
                    </form>   
                    <Typography className='cssForgotPass' >
                      <Link href= './Website/Home.html'>
                         Forgot password ?
                      </Link>
                    </Typography>
                    <Typography className='cssSignUp' >
                      Don't have an account ?
                      <Link href= './Website/Home.html'>
                           Sign up
                      </Link>
                    </Typography>
            </Paper>
          </Grid>
        </Grid>
        </Container> 
    )
}
export default Login