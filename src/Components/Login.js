import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Login.css'
import Insta from '../Assets/Insta.png';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import {Link} from 'react-router-dom';


export default function Login() {
  const useStyles = makeStyles({
       text1:{
        color:'grey',
        textAlign:'center'
       },
       text2:{
            textAlign:'center'
       },
       card2:{
        height:'6vh',
        marginTop:'2%'
       }
  })

  const classes = useStyles();
  return (
    <div className='loginWrapper'>
      <div className='loginCard'>
      <Card variant='outlined'>
        <div className="insta-logo">
          <img src={Insta} alt="" />
        </div>
      <CardMedia/>
      <CardContent>
       
        {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small' />
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense' size='small' />
        <Typography className={classes.text2} color = 'primary' variant='subtitle1'>
            Forget Password ?
      </Typography>
      </CardContent>
      <CardActions>
        <Button color='primary' fullWidth={true} variant='contained' size="small">Login</Button>
      </CardActions>
      
    </Card>
    <Card variant="outlined" className={classes.card2}>
    <CardContent>
      <Typography className={classes.text1} variant='subtitle1'>
        Don't have an account ? <Link to='/signup' style={{textDecoration:'none'}}>Signup</Link>
      </Typography>
      </CardContent>
    </Card>
      </div>
    </div>

    
    
  );
}