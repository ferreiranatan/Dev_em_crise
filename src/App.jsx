
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div style={{paddingTop:"80px"}}>
        <Home/>
      </div>
      <Footer />
    </>
  )
}

export default App
