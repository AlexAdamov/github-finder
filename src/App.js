import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/notfound' element={<NotFound />}></Route>
          <Route path='/*' element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
