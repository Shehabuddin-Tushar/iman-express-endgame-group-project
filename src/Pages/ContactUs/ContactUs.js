import { Container,Typography } from '@mui/material';
import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { AiFillMail} from 'react-icons/ai';
import { SiFacebook} from 'react-icons/si';
import { ImTwitter} from 'react-icons/im';
import { FaInstagramSquare} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import Footer from '../../Shared/Footer/Footer';
import './ContactUs.css';
import { Button } from '@mui/material';


const ContactUs = () => {
//   email js 
    function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_be71avo', 'template_bfdzy5a', e.target,'user_JtB1jbXk5tgTsBB6FuwWQ')
        .then(
			(result) => {
				console.log(result.text);
				Swal.fire({
					icon: 'success}',
					title: 'Message Sent Successfully',
				});
			},
			(error) => {
				console.log(error.text);
				Swal.fire({
					icon: 'error',
					title: 'Ooops, something went wrong',
					text: error.text,
				});
			}
            
		);
        e.target.reset();
	}

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text,
      }));

    


    return (
        <div className='font'>
           <Navbar />

           <Container  sx={{mb:3}}>
           <Typography sx={{ textAlign: 'center',m:2,mt:3,fontWeight:'bold' }} variant='h5'>
            Contact Informations
            </Typography>

           <Typography sx={{ textAlign: 'center',width: '50%' }} variant='p'>
            Iman Xpress is always open and We care about our customers, so you will get support 24 hours in a day and 7 days in a week. We help to save customers time.
               </Typography>
               {/* SOcial Links  */}
                <Box sx={{textAlign:'center'}}>
                <Button sx={{fontSize: 'h6.fontSize'}}  >
                  <a target="_blank" href="https://www.facebook.com" rel="noreferrer">
                      <SiFacebook/>
                  </a>
              </Button>
              <Button sx={{fontSize: 'h6.fontSize'}}  >
                  <a target="_blank" href="https://www.twitter.com" rel="noreferrer">
                      <ImTwitter/>
                  </a>
              </Button>
              <Button sx={{fontSize: 'h6.fontSize'}}  >
                  <a target="_blank" href="https://www.instragram.com" rel="noreferrer">
                      <FaInstagramSquare/>
                  </a>
              </Button>
                </Box>
              
            {/* <Button
            variant="outlined"
              sx={{ my: 2, color: "black", display: "block" }}
            >
              <Link to="/">Home</Link>
              
            </Button> */}
            {/* Information container  */}
           <Grid sx={{mt:2}} container spacing={2}>

           <Grid  item xs={12}  lg={6} md={6}>
                    <Item sx={{display:'flex',boxShadow: 5}}>

                    <Typography sx={{  mt: 1, mr: 1}} variant='h5'>
                    <FaMapMarkerAlt/>
                    </Typography>

                    <Typography variant='h6'>
                    Address
                    <Typography variant="subtitle1">
                     35/36, mehedibag,chittagong, <br />
                     Bangladesh
                    </Typography>
                    </Typography>
                    </Item>

                    <Item sx={{display:'flex',boxShadow: 3}}>
                    <Typography sx={{ bgcolor: 'light',borderRadius: '90%', mt: 1, mr: 1}} variant='h5'>
                    <BsFillTelephoneForwardFill/>
                    </Typography>

                    <Typography variant='h6'>
                    Phone
                    <Typography variant="subtitle1">
                     0178-1104445<br />
                     01409-130405
                    </Typography>
                    </Typography>
                    </Item>

                    <Item sx={{display:'flex',boxShadow: 3}}>

                    <Typography sx={{ bgcolor: 'light',borderRadius: '90%', mt: 1, mr: 1}} variant='h5'>
                    <AiFillMail/>
                    </Typography>

                    <Typography variant='h6'>
                    Email
                    <Typography variant="subtitle1">
                    imanxpress247@gmail.com<br />
                     anikbaruaturjoy45@gmail.com<br />
                     freelancerrtushar@gmail.com
                    </Typography>
                    </Typography>
                    
                    </Item>
                </Grid>

                      {/* forms  */}
                <Grid  item xs={12}  lg={6} md={6}>
                    <Item>
                    <Typography sx={{ textAlign: 'left',boxShadow: 3,pb:1}} variant='h5'>
                     Send us Message
               </Typography>
                    <form  onSubmit={sendEmail}>
                    <Box
                   
                    sx={{
                        '& > :not(style)': { m: 1, width: '80%'},
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField  required id="standard-basic" name="name" label="Your Name" variant="standard" />
                    </Box>
                    <Box
                  
                    sx={{
                        '& > :not(style)': { m:1, width: '80%' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField  required id="standard-basic" type="email" name="email" label="Your Email" variant="standard" />
                    </Box>
                    <Box
                 
                    sx={{
                        '& > :not(style)': { m: 1, width: '80%' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField  required id="standard-basic" name="phone" label="Phone No" variant="standard" />
                    </Box>
                    <Box
                 
                    sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField  multiline
                    required id="standard-basic" name="message" label="Your Message" variant="standard" />
                    </Box>
                    <Button type="submit" variant="contained">Send Message</Button>
                    </form>
                    </Item>
                    
                </Grid>
                </Grid>
           </Container>
           {/* <Footer/> */}
        </div>
    );
};

export default ContactUs;