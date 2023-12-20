import * as React from 'react';
import { useState, useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
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
import { AuthContext } from '../Context/AuthContext';

export default function Login() {
  const store = useContext(AuthContext)
  console.log(store)
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
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [file,setFile] = useState('');
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  const handleClick = async () => {
    try{
      setError('');
      setLoading(true)
      let res = await login(email,password);
      setLoading(false);
      navigate('/');
    }catch{
      setError("Please upload profile image first");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
      setLoading(false);
    }
  }

  return (
    <div className='loginWrapper'>
      <div className='loginCard'>
      <Card variant='outlined'>
        <div className="insta-logo">
          <img src={Insta} alt="" />
        </div>
      <CardMedia/>
      <CardContent>
       
        {error!=='' && <Alert severity="error">{error}</Alert>}
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin='dense' size='small' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin='dense' size='small' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <Typography className={classes.text2} color = 'primary' variant='subtitle1'>
            Forget Password ?
      </Typography>
      </CardContent>
      <CardActions>
        <Button color='primary' fullWidth={true} variant='contained' size="small" onClick={handleClick} disabled={loading}>Login</Button>
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