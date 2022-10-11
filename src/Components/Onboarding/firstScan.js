import React from 'react'
import {ReactComponent as Card} from '../../assets/card.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FirstScan = () => {
    const navigate = useNavigate()

    const Clicked = () => {
        navigate(
                '/secondemail',
        )
    }
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <center style={{paddingTop:"200px"}}>

                            <h1>
                            Onboard New Members with RFID.
                            <br /><br /><br />
                            Scan and Click the below button.
                        </h1>
                        <br />
                        <buttton className='btn btn-primary' onClick={() => navigate(
                            '/secondemail',
                        )}>Click Here</buttton>
                        </center>
                        
                    </div>
                    <div className="col-md-6">
                        <Card
                            height="700"
                            width="500"
                        />
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default FirstScan