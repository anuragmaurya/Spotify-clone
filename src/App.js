import './App.css';
import AllCmp from './Components/AllCmp';
import {
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import Navbar from './Components/NavbarLeft';
import Search from './Components/Search';
import Error from './Components/Error';
import Library from './Components/Library';
import YourLibrary from './Components/YourLibrary';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<AllCmp />}>
        </Route>
        <Route path='/Search' element={<Search />} />
        <Route path='/YourLibrary' element={<YourLibrary />} />
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
