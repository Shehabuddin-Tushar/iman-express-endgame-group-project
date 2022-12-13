import { Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React,{useState,useEffect} from "react";
import useAuth from '../../Hooks/useAuth'
import { useForm } from "react-hook-form";
import { db } from '../../Pages/Login/firebase.init'
import firebase from 'firebase/compat/app'
import './Userchatmodal.css'
import { ResetTvTwoTone } from "@mui/icons-material";
import ScrollableFeed from 'react-scrollable-feed'
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "3px",
};

export default function Userchatmodal({ openModal, handleClose, riderallinfo }) {
  const [messages, setMessages] = useState([])
  const [filterdatas, setFilterdatas] = useState([])
  const {user}=useAuth()

  const [userdata, setUserdata] = useState({});
  const { register, handleSubmit, watch, formState: { errors } ,reset} = useForm();
  const onSubmit = data => {

        data.userid = userdata?._id
        data.riderid = riderallinfo?._id
        data.status="user"
        
        db.collection("messages").add({
            message:data,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })

    
    
    reset()
    
  };

  

  useEffect(() => {
    axios.get(`https://iman-xpress-backend-theta.vercel.app/api/authgeneral/getuserdata/${user?.email}`)
      .then(res => setUserdata(res.data)).catch(err => console.log(err))
    
    
        
  }, [])


  useEffect(() => {
    
    db.collection('messages')
      
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => (
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, allmessage: doc.data() })))
      ))
   
    
    
  }, [])
  
 
  
  
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
      
        <Fade in={openModal}>
          <Box sx={style}>
            <div class="chatbox-holder" style={{marginTop:"50px"}}>
              <div class="chatbox">
                <div class="chatbox-top">
                  <div class="chatbox-avatar">
                    <a target="_blank" href="https://i.postimg.cc/Wz3xxggH/tushar.jpg"><img src="https://i.postimg.cc/Wz3xxggH/tushar.jpg" /></a>
                  </div>
                  <div class="chat-partner-name">
                    <span class="status online"></span>
                    <a target="_blank" href="https://www.facebook.com/mfreak">{riderallinfo.fname}</a>
                  </div>
                  <div class="chatbox-icons">
                    
                    <a onClick={handleClose}><i class="fa fa-close"></i></a>
                  </div>  
                  
                </div>
                <div className="chat-messages">
                <ScrollableFeed>
                {messages?.filter(data=>data.allmessage.message.userid===userdata?._id && data.allmessage.message.riderid===riderallinfo?._id ).map((el)=>{
                    
                      return(
                        <>
                          <div className="message-box-holder">
                             <div className="message-sender">
                               {el.allmessage.message.status=="user"?"me":riderallinfo.fname}
                            </div>
                            <div className="message-box message-partner">
                              {el.allmessage.message.textmessage}
                            </div>
                          </div>
                       
                       </>
                     )
                  })
              }
                  </ScrollableFeed>
                </div>


                <form onSubmit={handleSubmit(onSubmit)}>
                <div class="chat-input-holder">
                 
                    <textarea className="chat-input" {...register("textmessage", { required: true })}></textarea>
                    <input type="submit" value="Send" class="message-send" />
                    
                
               
                  </div>
                  <Typography style={{color:"red",fontSize:"15px"}}> {errors.textmessage && <span>This field is required</span>}</Typography>
                </form>
              </div>

             
            </div>
           
            
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
