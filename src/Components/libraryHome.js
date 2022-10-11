import React from 'react'
import {useNavigate} from "react-router-dom"
import { ReactComponent as BookShelf} from '../assets/bookshelf.svg'

export default function LibraryHome() {
    let navigate = useNavigate()
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <center style={{paddingTop:"200px"}}>
           <button onClick={() => navigate('/dash')}>Scan a Book</button>
            <br /><br />
            <button>View Issued Books</button>
            <br /><br />
            <button>View all Books</button>
            <br />
          </center>
        </div>
        <div className="col-md-6">
            <BookShelf
               height="700"
               width="500"
            />
        </div>
      </div>
    </div>
   
    </>
    
  )
}
