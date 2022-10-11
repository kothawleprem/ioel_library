import { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { ReactComponent as Book} from "../assets/book.svg"


const LibForm = (props) => {
    const [book, setBook] = useState("")
    let navigate = useNavigate()
    const {state} = useLocation();
    const { code, id } = state; // Read values passed on state
    console.log("code",code)
    

    const handleChange = (e) => {
    setBook({
        ...book,
        [e.target.name]: e.target.value.trim(),
    })
    } 

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`http://localhost:5000/create?id=${id}&bookName=${book.bookName}&author=${book.author}`,{
        method: 'POST',} )
        .then(async response => {
        const data = await response.json();
      })
      navigate(
                '/bookDetails',
                {
                  state: {
                    code:1,
                    id:id,
                    bookName:book.bookName,
                    author:book.author
                  }
                }
              )
    }

    return( 
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
         <center style={{paddingTop:"200px"}}>
          <form action="">
            <input 
              type="text" 
              placeholder='book name' 
              id="bookName" 
              name="bookName"
              onChange={handleChange}
              required
            />
            <br /><br />
            <input type="text" 
              placeholder='author name' 
              id="author" 
              name="author"
              onChange={handleChange}
              required
            />
          </form>
              
          <br />
          <button type="submit" onClick={handleSubmit}>Add this Book</button>
          {/* <button type='submit' onClick={handleSubmit}>Add this book</button>
          {isClicked && <LibForm code={1} id={props.id}/>} */}
           </center>
        </div>
        <div className="col-md-6">
            <Book
              height="700"
              width="500"
            />
        </div>
      </div>
    </div>
      
    </>
    )
  }

export default LibForm