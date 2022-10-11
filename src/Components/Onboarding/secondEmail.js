import React from "react"
import {ReactComponent as Email} from "../../assets/email.svg"
import { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const SecondEmail = () => {
    const [email, setEmail] = useState("")
    const [data, setData] = useState("")
    let navigate = useNavigate()
    const handleChange = (e) => {
    setEmail({
        ...email,
        [e.target.name]: e.target.value.trim(),
    })
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/updateRFID?email=${email.userEmail}&rfid=${data}`)
        .then(async response => {
            const res = await response.json()
            console.log(res)
        })
        console.log(email.userEmail)
        navigate(
        '/thirdprofile'
    )
    }
    
    useEffect(() => {
    fetch("https://blynk.cloud/external/api/get?token=MU0Cw-3RDeVyru4GBXcTlezXFrFyz0YC&pin=v1")
    .then(async response => {
      const res = await response.json();
      setData(res)
      console.log(res)
    })
  })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Email
                            height="700"
                            width="500"
                        />
                    </div>
                    <div className="col-md-6">
                    <center style={{paddingTop:"200px"}}>
                        <h1>
                            Enter Email Address {data}
                            <br /><br /><br />
                        </h1>
                        <form action="">
                            <input type="email"
                            placeholder='example@mail.com' 
                            id="userEmail" 
                            name="userEmail"
                            onChange={handleChange}
                            required />
                        </form>
                        <br />
                        <br />
                        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Add Email</button>

                    </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondEmail