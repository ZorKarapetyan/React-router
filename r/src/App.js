import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contacts'
import classes from './UI/global.module.css'

const App = () => {
  return (
  <div>
    <header className={classes['header-nav']}>
      <Link className={classes['link']} to='/home'> Home </Link>
      <Link className={classes['link']} to='./about'> About </Link>
      <Link className={classes['link']} to='./contact'> Contact </Link>
    </header>

    <section className={classes['main']}>
        <Routes>
         <Route path='/home' element={ <Home/> } />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
        </Routes>
    </section>
</div>
)
  
}

export default App