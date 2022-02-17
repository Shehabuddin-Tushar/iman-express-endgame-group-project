import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails = () => {
    const {id} = useParams()

    return (
        <div>
            <Container className='blogDetailsContainer'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sm={6} >
                        <div className='blogsHomeTitle-PartOne'>
                            <div>
                                <h1>Iman Xpress Blog</h1>
                                <p>Announcements, updates, releases, and more</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} sm={6}>
                        <div className='blogsHomeTitle-PartTwo'>
                            <img src='https://i.ibb.co/tcNrn3c/blog-Home-Pic-One-1.png' alt='Empty!' style={{width:"300px", height: "200px"}}/>
                        </div>
                    </Grid>
                </Grid>
                <div>
                    <Paper elevation={4}>
                        <div className='blogBoxThree'>
                            <div>
                                <img src='https://i.ibb.co/G5PwPQ8/blog-Home-Pic-Two.jpg' alt="Empty!" style={{width:"100%", height: "400px", borderRadius: "5px"}}/>
                            </div>
                            <div className='blogBoxContent'>
                                <div className='blogTitle'>
                                    <span>Promotion</span>
                                    <li>Feb 12, 2020</li>
                                </div>
                                <p>What are the things that you need on a daily basis but often miss out on? If you’re a working professional or a student there are certain daily essentials that you need to carry which makes your day in life a lot smoother. To prepare you for the surprises life throws at you, we have made a list of things to carry. </p>
                                <ol>
                                    <li>Earphones
                                        <p>
                                            Whether you are moving on a bus or have taken a ride to get to your destination, it’s always a good idea to carry a pair of earphones. Listening to some of your favourite tracks or even listening to audiobooks can make your time on the road enjoyable. Not to mention, you’ll be protecting your ears from the over-bearing noise of the traffic! Pathao shop has a variety of earphones for you to choose from. Order today.
                                        </p>
                                    </li>
                                    <li>Bluetooth Speakers
                                        <p>
                                            Smart watches save you time from always having the need to look at and open your phone. This is extremely useful when you are on the go. You can receive your calls, check your phone’s notifications and even make phone calls and basic commands through your smart watch. MI Lite watch is a pretty good recommended smartwatch, you can find it on Pathao Shop!
                                        </p>
                                    </li>
                                    <li>Powerbank
                                        <p>                                       
                                            Our phones don’t always have enough juice to function throughout the entire day. Power banks are a great source of backup in this case! Keeping a charged power bank with you can give your phone’s battery that extra boost that it needs to last through the day. Did you know some of these will actually fast-charge your phone? Check them out at Pathao Shop!
                                        </p>
                                    </li>
                                    <li>Headset
                                        <p>
                                            Headsets are all about quality and amplifying your sounds. They are one of the most durable devices you will come across and are a great electronic accessory to carry throughout the day. Not to mention they are stylish and come in many colors! Choose your favourite kind of headset from Pathao Shop!
                                        </p>
                                    </li>
                                    <li>Smart Watch
                                        <p>
                                            Smart watch are all about quality and amplifying your sounds. They are one of the most durable devices you will come across and are a great electronic accessory to carry throughout the day. Not to mention they are stylish and come in many colors! Choose your favourite kind of headset from Pathao Shop!
                                        </p>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </Paper>
                </div>
            </Container>
        </div>
    );
};

export default BlogDetails;