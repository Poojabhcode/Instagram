import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Signup.css'
import Insta from '../Assets/Insta.png'
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import {Link, useNavigate} from 'react-router-dom';


export default function Signup() {
  const useStyles = makeStyles({
       text1:{
        color:'grey',
        textAlign:'center'
       },
       card2:{
        height:'6vh',
        marginTop:'2%'
       }
  })

  const classes = useStyles();
  return (
    <div className='SignupWrapper'>
      <div className='SignupCard'>
      <Card variant='outlined'>
        <div className="insta-logo">
          <img src={Insta} alt="" />
        </div>
      <CardMedia/>
      <CardContent>
        <Typography className={classes.text1} variant='subtitle1'>
          Sign up to see photos and videos from your friends
        </Typography>
        {true && <Alert severity="error">This is an error alert - check it out! </Alert>}
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small'/>
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense' size='small' />
        <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin='dense' size='small'/>
        <Button size="small" color='secondary' fullWidth='true' variant='outlined' margin='dense' startIcon={<CloudUploadIcon/>} component='label'>
          Upload Profile Image
          <input type="file" accept='image/' hidden />
          </Button>
      </CardContent>
      <CardActions>
        <Button color='primary' fullWidth={true} variant='contained' size="small" disabled>SIGN UP</Button>
      </CardActions>
      <CardContent>
      <Typography className={classes.text1} variant='subtitle1'>
        By signing up, you agree to the terms and conditions
      </Typography>
      </CardContent>
    </Card>
    <Card variant="outlined" className={classes.card2}>
    <CardContent>
      <Typography className={classes.text1} variant='subtitle1'>
        Having an account ? <Link to='/login' style={{textDecoration:'none'}}>Login</Link>
      </Typography>
      </CardContent>
    </Card>
      </div>
    </div>
    
  );
}