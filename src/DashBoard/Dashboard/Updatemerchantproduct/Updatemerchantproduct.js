import { Button, Container, TextareaAutosize, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import './updatemerchantproduct.css'
function Updatemerchantproduct() {
    const [data, setData] = useState({})
    const { id } = useParams();
    const mytoken = (localStorage.getItem("merchant"))
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://iman-xpress-backend-theta.vercel.app/api/merchant/fetchproduct/${id}`, {
            headers: {
                "auth-token": mytoken,
                "Content-Type": "application/json"
            }
        })
            .then((res) => setData(res.data)).catch(err => console.log(err))
    }, [])

    //     const handledatachange = (e) => {
    //         console.log(e.target.value)
    // //         setData({
    // //             ...data, productname: e.target.value,
    // //             productprice: e.target.value,
    // //             productdescription: e.target.value,
    // //             productimage: e.target.files[0]
    // // })
    //      }

    const handlesubmit = async (e) => {
        e.preventDefault();


        let imageURL
        const imageData = new FormData();
        imageData.set("key", "06a916692ea087d185221539196ef3a5");
        imageData.append("image", data.productimage);
        try {
            const res = await axios.post(
                "https://api.imgbb.com/1/upload",
                imageData
            );
            imageURL = res.data.data.display_url;
        } catch (error) {

            return alert("Failed to upload the image!");
        }
        const mydata = {
            productname: data.productname,
            productprice: data.productprice,
            productdescription: data.productdescription,
            productimage: imageURL
        }

        console.log(mydata)
        axios.put(`https://iman-xpress-backend-theta.vercel.app/api/merchant/updateproduct/${id}`, mydata,
            {
                headers: {
                    "auth-token": mytoken,
                    "Content-Type": "application/json"
                }
            }).then(res => {
                console.log(res)
                navigate("/dashboard/marchant/manageproduct")

            })
            .catch(err => console.log(err))

        Swal.fire({
            icon: 'success',
            title: "Product updated successfully",
        });

    }

    return (
        <>
            <Container className="customdesing">
                <Typography variant='h4' style={{ borderRadius: "10px", marginBottom: "10px", textAlign: "center", backgroundColor: "gray", padding: "10px", width: "90%", color: "#fff" }}>Update product</Typography>

                <form onSubmit={handlesubmit}>

                    <TextField required color="secondary" focused value={data.productname} name="productname" onChange={(e) => setData({ ...data, productname: e.target.value })} style={{ width: "90%", marginBottom: "10px" }} id="outlined-basic" label="product name" variant="outlined" />
                    <TextField required color="secondary" focused value={data.productprice} name="productprice" onChange={(e) => setData({ ...data, productprice: e.target.value })} style={{ width: "90%", marginBottom: "10px" }} id="outlined-basic" label="product price" variant="outlined" />
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={10}
                        placeholder="Minimum 3 rows"
                        style={{ width: "90%", marginBottom: "10px" }}
                        color="secondary" focused
                        value={data.productdescription}
                        name="productdescription"
                        onChange={(e) => setData({ ...data, productdescription: e.target.value })}
                        required
                    />
                    <Typography>previous image</Typography>
                    <img src={data.productimage} style={{ width: "300px", marginBottom: "10px", border: "2px solid gray", borderRadius: "5px" }} />
                    <br />
                    <input type="file" name="productimage" onChange={(e) => setData({ ...data, productimage: e.target.files[0] })} />
                    <Button type="submit" variant="outlined" style={{ width: "90%", marginTop: "10px" }}>Update</Button>

                </form>
            </Container>
        </>
    )
}

export default Updatemerchantproduct