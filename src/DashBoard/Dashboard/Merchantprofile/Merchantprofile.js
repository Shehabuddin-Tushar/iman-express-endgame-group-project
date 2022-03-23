import { Button, Checkbox, Container, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Merchantprofile() {
    const profile = JSON.parse(localStorage.getItem("merchantInfo"))
    const mytoken = (localStorage.getItem("merchant"))
    const [data, setData] = useState(profile)
    const [update, setupdate] = useState(true)


    const handleprofileupdate = async (e) => {
        e.preventDefault();


        let imageURL
        const imageData = new FormData();
        imageData.set("key", "06a916692ea087d185221539196ef3a5");
        imageData.append("image", data.image);
        try {
            const res = await axios.post(
                "https://api.imgbb.com/1/upload",
                imageData
            );
            imageURL = res.data.data.display_url;
        } catch (error) {

            return alert("Failed to upload the image!");
        }

        let mydata = data
        mydata.image = imageURL


        console.log(mydata)
        // https://iman-xpress.herokuapp.com 
        axios.put(`https://iman-xpress.herokuapp.com/api/auth/updateprofile/${data._id}`, mydata
        ).then(res => {
            const updatedata = JSON.stringify(res.data.updateprofile)
            localStorage.setItem("merchantInfo", updatedata)

        })
            .catch(err => console.log(err))

        Swal.fire({
            icon: 'success',
            title: "profile updated successfully",
        });

    }
    return (
        <>
            <Container style={{ padding: "30px", marginTop: "40px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
                <Typography variant="h4" style={{ textAlign: "center", marginBottom: "10px" }}>Merchant profile details</Typography>
                <form onSubmit={handleprofileupdate}>
                    <TextField disabled={update} style={{ color: "green", width: "100%", marginBottom: "20px" }} name="name" onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} id="outlined-basic" label="Merchant business name" variant="outlined" />
                    <TextField disabled={update} style={{ color: "green", width: "100%", marginBottom: "20px" }} name="storeAddress" onChange={(e) => setData({ ...data, storeAddress: e.target.value })} value={data.storeAddress} id="outlined-basic" label="Address" variant="outlined" />
                    <TextField disabled={update} style={{ color: "green", width: "100%", marginBottom: "20px" }} name="faceBookLink" onChange={(e) => setData({ ...data, faceBookLink: e.target.value })} value={data.faceBookLink} id="outlined-basic" label="Facebookpage" variant="outlined" />
                    <TextField disabled={update} style={{ color: "green", width: "100%", marginBottom: "20px" }} name="mobileNumber" onChange={(e) => setData({ ...data, mobileNumber: e.target.value })} value={data.mobileNumber} id="outlined-basic" label="Mobile number" variant="outlined" />
                    <Typography>previous banner image</Typography>
                    <img src={data.image} width="300px" />
                    <br />
                    <input disabled={update} type="file" name="image" onChange={(e) => setData({ ...data, image: e.target.files[0] })} />
                    <br />
                    <Checkbox onChange={() => setupdate(!update)} />update enabled

                    <Button disabled={update} type="submit" variant="outlined" style={{ width: "100%", marginTop: "20px" }}>Update profile</Button>

                </form>

            </Container>
        </>
    )
}

export default Merchantprofile