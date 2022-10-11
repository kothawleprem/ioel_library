import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Done} from "../assets/done.svg"

import LibForm from './libraryForm'
import LibraryBookDetails from './libraryBookDetails'

const LibDash = () => {
  const navigate = useNavigate()
    const [data, setData] = useState("")
    const [value, setValue] = useState("")
    const [available, setAvailable] = useState("")
    useEffect(() => {
      let data="123"
      fetch('https://blynk.cloud/external/api/get?token=MU0Cw-3RDeVyru4GBXcTlezXFrFyz0YC&pin=v1')
      .then(async response => {
        data = await response.json();
        setData(data)
        fetch(`http://localhost:5000/check?id=${data}`)
      .then(async response => {
        const val = await response.json();
        console.log("val",val)
        setAvailable(val.response)
      })

      
        fetch(`http://localhost:5000/read?id=${data}`)
      .then(async response => {
        const res = await response.json();
        console.log(res[0])
        setValue(res[0])
      })
      
      })

      
      
      
  }, []);
  console.log("available",available, value)
  
  return (
    available === 1 ?
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
         <center style={{paddingTop:"200px"}}>
           <button onClick={() => navigate(
          '/bookDetails',
          {
            state: {
              id:data,
              bookName:value.bookName,
              author:value.author
            }
          }
        )}>I have Scanned the book</button>
        </center>
        </div>
        <div className="col-md-6">
          <Done/>
        </div>
      </div>
    </div>
       
    </>
    :
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <center style={{paddingTop:"200px"}}>
            <button onClick={() => navigate(
          '/form',
          {
            state: {
              code:available,
              id:data
            }
          }
        )}>I have Scanned the book</button>
        </center>
        </div>
        <div className="col-md-6">
          <Done
            height="700"
            width="500"
          />
        </div>
      </div>
    </div>
      
    </>
    // <div>
    // <div>
    //     {/* <button onClick={() => setIsClicked(!isClicked)}>I have Scanned the book</button>
    //     {isClicked && <LibForm code={available} id={data}/>} */}
        
    //     <button onClick={() => navigate(
    //       '/form',
    //       {
    //         state: {
    //           code:available,
    //           id:data
    //         }
    //       }
    //     )}>I have Scanned the book</button>
    // </div>
        
    // </div>
  )
}

export default LibDash