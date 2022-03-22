import { Button } from '@mui/material'
import React from 'react'
import './Gallery.css'
function Gallery() {
  return (
      <div class="container">
          <header class="main-header clearfix">
             
                  <h1 class="name">Our 3D <span style={{marginLeft:"5px"}}> Account information</span></h1>
          </header>

          <div class="content clearfix">

              <div class="cube-container">
                  <div class="photo-cube">

                      <img class="front" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""/>
                          <div class="back photo-desc">
                              <h3>User account</h3>
                              <p>User can open his account from this site and take the various facilities</p>
                              <Button variant="outlined" style={{color:"#000",border:"2px solid white"}}>All information</Button>
                          </div>
                      <img class="left" src="https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp" alt=""/>
                      <img class="right" src="https://i.postimg.cc/Wz3xxggH/tushar.jpg" alt=""/>

                              </div>
                          </div>

                          <div class="cube-container">
                              <div class="photo-cube">

                      <img class="front" src="https://media-eng.dhakatribune.com/uploads/2018/09/mehedi-hasan00012-1537974130676.jpg" alt=""/>
                                      <div class="back photo-desc">
                                          <h3>Merchant Account</h3>
                                          <p>Merchant can open his account from this site and he can sell his product by this site</p>
                                          <Button variant="outlined" style={{ color: "#000", border: "2px solid white" }}>All information</Button>
                                      </div>
                                          <img class="left" src="https://media-eng.dhakatribune.com/uploads/2020/08/mehedi-hasan00049-1-1598871273216.jpg" alt=""/>
                                          <img class="right" src="https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944__480.jpg" alt=""/>

                                          </div>
                                      </div>

                                      <div class="cube-container">
                                          <div class="photo-cube">

                                                 <img class="front" src="https://www.netsolutions.com/insights/wp-content/uploads/2019/07/essential-features-for-building-a-ride-sharing-app.jpg" alt=""/>
                                                  <div class="back photo-desc">
                                                      <h3>Rider Account</h3>
                                                      <p>Riders can open his account and he provide ride sharing and delivery services from this site</p>
                                                      <Button variant="outlined" style={{ color: "#000", border: "2px solid white" }}>All information</Button>
                                                  </div>
                                                     <img class="left" src="https://i.postimg.cc/zGmk5V2X/firstimageimanslider.jpg" alt=""/>
                                                     <img class="right" src="https://www.netsolutions.com/insights/wp-content/uploads/2021/11/essential-features-of-building-an-on-demand-food-ordering-app.jpg" alt=""/>

                                                      </div>
                                                  </div>

                                          </div>
                                      </div>
  )
}

export default Gallery