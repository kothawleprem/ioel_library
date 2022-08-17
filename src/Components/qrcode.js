import QRCode from 'qrcode'
import { useEffect, useState } from 'react'

const QRcodegen = ({code}) => {
  const [src,setSrc] = useState("")
  useEffect(() => {
    let key = code.toString()
    if(code){
    QRCode.toDataURL(key).then((data) => {
        console.log(data);
        setSrc(data);
    })
    }
    else{

        console.log("No data found",code)
    }

  },[])
  return <div>
    <img src={src}/>
  </div>
}

export default QRcodegen