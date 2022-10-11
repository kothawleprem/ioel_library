import Menu from "./Components/menu"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import LibDash from "./Components/libraryDash"
import LibraryHome from "./Components/libraryHome"
import LibForm from "./Components/libraryForm"
import LibraryBookDetails from "./Components/libraryBookDetails"
import LibIssue from "./Components/libraryIssue"
import QrScan from "./Components/qrScan"
import CardScan from "./Components/cardScan"
import FirstScan from "./Components/Onboarding/firstScan"
import SecondEmail from "./Components/Onboarding/secondEmail"
import ThirdProfile from "./Components/Onboarding/thirdProfile"
import NotFound from "./Components/Onboarding/notFound"

const App = () => {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LibraryHome/>}/>
        <Route exact path="/dash" element={<LibDash/>}/>
        <Route exact path="/form" element={<LibForm/>}/>
        <Route exact path="/bookDetails" element={<LibraryBookDetails/>}/>
        <Route exact path="/issue" element={<LibIssue/>}/>
        <Route exact path="/qrscan" element={<QrScan/>}/>
        <Route exact path="/cardscan" element={<CardScan/>}/>
        <Route exact path="/firstscan" element={<FirstScan/>}/>
        <Route exact path="/secondemail" element={<SecondEmail/>}/>
        <Route exact path="/thirdprofile" element={<ThirdProfile/>}/>
        <Route exact path="/notfound" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
  
}

export default App