import React from "react"
import { ReactComponent as Profile} from "../../assets/profile.svg"

const ThirdProfile = () => {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <center style={{paddingTop:"200px"}}>
                        <h1>User added successfully</h1>
                            <h1>Name: Prem Kothawle</h1>
                            <h1>Email: kothawleprem@gmail.com</h1>
                            <h1>RFID: 12234555</h1>
                        </center>
                    </div>
                    <div className="col-md-6">
                        <Profile
                            height="700"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdProfile