import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardScan() {
  const navigate = useNavigate()
  const [data, setData] = useState("")
  const [user, setUser] = useState("")
  useEffect(() => {
    fetch("https://mocki.io/v1/5d563673-6c00-473c-bcd9-0a7096869ecc")
    .then(async response => {
      data = await response.json();
      setData(data)
      fetch(`http://localhost:5000/checkUser?id=${data}`)
      .then(async response => {
        const val = await response.json();
        setUser(val.response)
      })

    })
  })
  return (
    <>
      <div>{user}</div>
    </>

  )
}
