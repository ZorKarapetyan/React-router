import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'


const App = () => {
  return (
    <div>

  
  <header>
  {/* just backslash for home page */}
  <Link to='/'> Home </Link>
  {/* to is equal to about page to be able to path on it later */}
  <Link to='./about'> About </Link>
  {/* to is equal to News page to be able to path on it later */}
</header>

<section>
 <Routes>
  <Route path='/' element={ <Home/> } />
  <Route path='/about' element={<About />} />
 </Routes>
</section>
</div>
    )
  
}

export default App