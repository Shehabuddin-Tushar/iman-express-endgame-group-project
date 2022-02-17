import  React,{useState} from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, ButtonGroup, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Navbar from '../../Shared/Navbar/Navbar'
import Footer from '../../Shared/Footer/Footer'
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import './merchantproduct.css'

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}
const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));
function ProductPage() {
   
    const theme = useTheme();

    
  return (
      <>
          <Navbar />
          <Grid container spacing={2}>
              <Grid item lg={9} md={9} sm={12} xs={12} className='bannerwithproduct'>
                  <Box style={{ overflow: "scroll", maxHeight: '100vh',}}>
                      <img src='https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg' width="100%" height="300px" /> 
                      <Container>
                         <div className='nameandinfo' style={{display:"flex",justifyContent:"space-between",paddingTop:"10px",paddingBottom:"10px"}}>
                             <div style={{display:"flex"}}>
                              <Typography variant="h5" style={{paddingRight:"15px"}}>Biryani house</Typography>
                              <div class="wrap">
                                  <div class="search">
                                      <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                                      <button type="submit" class="searchButton">
                                              <i class="fa fa-search" style={{ color:"#3781CB"}}></i>
                                      </button>
                                  </div>
                                  </div>
                              </div>
                              <Button variant="h5" variant="outlined" className='inform'>Resturent information</Button>
                              <Button className='inform2'><InfoIcon/></Button>
                          </div>

                          
                          
                      </Container>
                      <hr style={{ border: "1px solid #E5E7E9" }} />
                      <Container>
                          <Grid container spacing={2}>
                              {
                                  [...Array(10).keys()].map(() => {
                                      return (
                                          <Grid item lg={6} md={12} sm={12}xs={12}>
                                             

                                              <div class="product-container">
                                                  <div class="product">
                                                      <div class="product-info">
                                                          <h5>Product name</h5>
                                                          <h2>1000 tk</h2>
                                                          
                                                          <ButtonGroup variant="outlined" aria-label="outlined button group">
                                                              <Button><ShoppingCartIcon/></Button>
                                                              <Button><RemoveRedEyeIcon/></Button>
                                                              <Button><FavoriteIcon/></Button>
                                                          </ButtonGroup>
                                                      </div>
                                                      <div class="product-preview">
                                                          <img src="https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg" width="200px" style={{borderRadius:"5px"}}/>
                                                    
                                                          
                                                      </div>
                                                      
                                                  </div>
                                              </div>
                                       </Grid>  
                                      )
                                  })
                              }
                            
                          </Grid>
                       
                    </Container>
                  </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={12}xs={12} style={{paddingLeft:"0px"}} className='merchantcart'>
                  <Typography sx={{ mb: 2, textAlign: "center", backgroundColor:"#1f97e7",padding:"5px",color:"#fff"}} variant="h4">
                      Your cart(3)
                  </Typography>
                  <Demo>
                      <List>
                         <ListItem
                                  secondaryAction={
                                      <IconButton edge="end" aria-label="delete">
                                          <DeleteIcon />
                                      </IconButton>
                                  }
                              >
                                  <ListItemAvatar>
                                      
                                      <img src="https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg" width="100px" height="80px" style={{ borderRadius: "5px", border:"2px solid #1f97e7",marginRight:"5px" }} />
                                      
                                  </ListItemAvatar>
                              <div style={{ marginTop: "-5px" }}>
                                  <ListItemText>product name</ListItemText>
                                  <ListItemText>product price</ListItemText>
                                  <ListItemText>
                                      <div class="quantity buttons_added">
                                          <input type="button" value="-" class="minus" />
                                          <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                                          <input type="button" value="+" class="plus"/>
                                        </div>
                                  </ListItemText>
                              </div>
                          </ListItem>,
                          <ListItem
                              secondaryAction={
                                  <IconButton edge="end" aria-label="delete">
                                      <DeleteIcon />
                                  </IconButton>
                              }
                          >
                              <ListItemAvatar>

                                  <img src="https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg" width="100px" height="80px" style={{ borderRadius: "5px", border: "2px solid #1f97e7", marginRight: "5px" }} />

                              </ListItemAvatar>
                              <div style={{ marginTop: "-5px" }}>
                                  <ListItemText>product name</ListItemText>
                                  <ListItemText>product price</ListItemText>
                                  <ListItemText>
                                      <div class="quantity buttons_added">
                                          <input type="button" value="-" class="minus" />
                                          <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                                          <input type="button" value="+" class="plus" />
                                      </div>
                                  </ListItemText>
                              </div>
                          </ListItem>,

                          <ListItem
                              secondaryAction={
                                  <IconButton edge="end" aria-label="delete">
                                      <DeleteIcon />
                                  </IconButton>
                              }
                          >
                              <ListItemAvatar>

                                  <img src="https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg" width="100px" height="80px" style={{ borderRadius: "5px", border: "2px solid #1f97e7", marginRight: "5px" }} />

                              </ListItemAvatar>
                              <div style={{marginTop:"-5px"}}>
                                  <ListItemText>product name</ListItemText>
                                  <ListItemText>product price</ListItemText>
                                  <ListItemText>
                                      <div class="quantity buttons_added">
                                          <input type="button" value="-" class="minus" />
                                          <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="" />
                                          <input type="button" value="+" class="plus" />
                                      </div>
                                  </ListItemText>
                              </div>
                          </ListItem>,
                         
                      </List>
                  </Demo>
                  
              </Grid>
              
          </Grid>
       <Footer/>   
     </>
  )
}

export default ProductPage