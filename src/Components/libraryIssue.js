import { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { ReactComponent as ScanCard} from "../assets/scancard.svg"

import React from 'react'

export default function LibIssue() {
  let navigate = useNavigate()
  console.log("in libissue")
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <center style={{paddingTop:"200px"}}>
          First Scan the Card, then click the Below Button
          <br />
          <button className="btn btn-primary" onClick={() => navigate(
              "/cardscan"
          )}>Scan Card</button> <br /><br />
          <button  className="btn btn-primary"  onClick={() => navigate(
              "/qrscan"
          )}>Scan QR</button>
        </center>
          
        </div>
        <div className="col-md-6">
            <ScanCard
              height="700"
              width="500"
            />
        </div>
      </div>
    </div>
    
    </>
  )
}
