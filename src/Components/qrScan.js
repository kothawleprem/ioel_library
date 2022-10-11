import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import {useNavigate} from "react-router-dom"

export default function QrScan() {
    const [data, setData] = useState('No result');
    let navigate = useNavigate()
  return (
    <>
    <div className='qrscanner' style={{ width:'400px' }}>
    <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      <p>{data}</p>
      { data !== "No result" ?
      <button onClick={() => navigate(
        '/cardScan'
      )}>Proceed</button>:
      <div>Please Scan Properly, No data received yet.</div>
      }
      
    </div>
      
    </>
  );
}
