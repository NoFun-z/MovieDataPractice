import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element ={<h1>Okay</h1>}></Route>
          <Route path="movie/:id" element={<h1>Movie Details</h1>}></Route>
          <Route path="movies/:type" element={<h1>Movie list page</h1>}></Route>
          <Route path="/*" element={<h1>Error, Page not found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
