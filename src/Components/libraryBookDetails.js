import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import { ReactComponent as OpenBook } from '../assets/openbook.svg'

export default function LibraryBookDetails() {
    let navigate = useNavigate()
    const {state} = useLocation();
    const { id, bookName, author } = state; // Read values passed on state
    console.log("code",id, bookName, author)

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <center style={{paddingTop:"100px"}}>
                        <h3>Id No:- {id}</h3>
                        <h3>Book Name:- {bookName}</h3>
                        <h3>Author:- {author}</h3>
                        <button onClick={() => navigate(
                            "/issue",
                            {
                                state:{
                                    id:id
                                }
                            }
                        )}>Issue this book</button>
                        {/* 
                        <button onClick={() => setIssueClicked(!issueClicked)}>Issue this book</button>
                        {issueClicked && <LibIssue id={props.id}/>} */}
                    </center>
                </div>
                <div className="col-md-6">
                    <OpenBook
                        height="700"
                        width="500"
                    />
                </div>
            </div>
        </div>
            
        </>
  )
}
