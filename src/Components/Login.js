import * as React from 'react';
import { useState, useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Typography from '@mui/material/Typography';
import './Login.css'
import Insta from '../Assets/Insta.png';
import bg from '../Assets/home-phones.png';
import img1 from '../Assets/screenshot1.png';
import img2 from '../Assets/screenshot2.png';
import img3 from '../Assets/screenshot3.png';
import img4 from '../Assets/screenshot4.png';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
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
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

  const handleClick = async () => {
    try{
      setError('');
      setLoading(true)
      await login(email,password);
      setLoading(false);
      navigate('/');
    }catch{
      setError("Please enter correct Email id and Password or signup");
      setTimeout(() => {
        setError("");
      }, 2000);
      setLoading(false);
    }
  }

  return (
    <div className='loginWrapper'>
      <div className="imgcar" style={{backgroundImage:'url('+bg+')',backgroundSize:'cover' }}>
        <div className="car">
        <CarouselProvider
        visibleSlides={1}
        totalSlides={4}
        naturalSlideWidth={208}
        naturalSlideHeight={433}
        hasMasterSpinner
        isPlaying={true}
        infinite={true}
        dragEnabled={false}
        touchEnabled={false}
      >
        <Slider>
          <Slide index={0}><Image src={img1}/></Slide>
          <Slide index={1}><Image src={img2}/></Slide>
          <Slide index={2}><Image src={img3}/></Slide>
          <Slide index={3}><Image src={img4}/></Slide>
        </Slider>
      </CarouselProvider>
        </div>
      </div>
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
        <Link to='/forgetpass' style={{textDecoration:'none'}}>Forget Password ?</Link>
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