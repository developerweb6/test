import React from 'react'; 
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Work from './pages/work';
import Blogs from './pages/blog';
import Contact from './pages/contact'; 
import SlickDemo from './component/SlickDemo';

function App() {
  
  return (
    
    <Router>
      
      <Navbar />
     
      <div className="slick-sldier">  
      <SlickDemo/> 
    </div> 
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/work' component={Work} />
        <Route path='/blog' component={Blogs} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
} 
  
export default App;
