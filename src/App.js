import Footer from './components/Footer';
import './App.css';

import Header from './components/Header';

import AboutPage from './components/pages/AboutPage';
import {Route, Routes,BrowserRouter} from 'react-router-dom';


import HomePage from './components/pages/HomePage';
import BlogPage from './components/pages/BlogPage';
import BlogDetailPage from './components/pages/BlogDetailPage';

function App() {


  
  return (
   <div>

  <BrowserRouter>
  <Header/>
  
      <Routes>
      <Route path='/' element={<HomePage />} ></Route>
      <Route path='/anasayfa' element={<HomePage />} ></Route>
      <Route path='/hakkimizda' element={<AboutPage />} ></Route>
      <Route path='/blog' element={<BlogPage />} ></Route>
      <Route path='/blog/blog-detay' element={<BlogDetailPage/>} ></Route>
      </Routes>
                            
  
     
 
  <Footer/>
  </BrowserRouter>
  </div>
    


   
    
   

   
/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

    
    <script src="mail/jqBootstrapValidation.min.js"></script>
    <script src="mail/contact.js"></script>

    
    <script src="js/main.js"></script> */

  );
}

export default App;
