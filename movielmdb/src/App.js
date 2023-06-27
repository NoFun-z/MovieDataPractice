import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/header/Header'
import Home from './pages/home/home'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<h1>Movie Details</h1>}></Route>
          <Route path="movies/:type" element={<h1>Movies List</h1>}></Route>
          <Route path="/*" element={<h1>Error, Page not found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
