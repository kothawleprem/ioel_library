import React from 'react'
import QRcodegen from "./qrcode"
import { useEffect, useState } from 'react'


const Menu = () => {
    const [data, setData] = useState("");
    const [isClicked, setIsClicked] = useState(false)
    useEffect(() => {
      fetch('https://mocki.io/v1/35c1c9d5-0f13-495b-acee-33d76982980e')
      .then(async response => {
        const data = await response.json();
        console.log(data.rfno)
        setData(data.rfno)
      })
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <button onClick={() => setIsClicked(!isClicked)}>Get QR</button>
            {isClicked && <QRcodegen code={data}/>}
            <button>Done QR</button>
          </div>
          <div className="col-md-6">
         
          </div>
        </div>
      </div>
        
        
    </div>
  )
}

export default Menu

