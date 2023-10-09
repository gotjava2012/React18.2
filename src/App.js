import Navbar from './nav/Navbar';
import Home from './home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './blogs/Create';
import BlogDetails from './blogs/BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/create" element={ <Create />} />
            <Route path="/blogs/:id" element={ <BlogDetails />} />
            <Route path="*" element={ <NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
