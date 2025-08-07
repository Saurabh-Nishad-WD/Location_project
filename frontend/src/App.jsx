import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home_page from "./Pages/Home_page"


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home_page/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
