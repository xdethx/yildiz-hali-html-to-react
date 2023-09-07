import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <div>
            
            <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 bg-secondary d-none d-lg-block">
                <a href="" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                     <img src="img/yoyo.webp" height="100" width="300" alt=""/>
                </a>
            </div>
            <div className="col-lg-9">
                <div className="row bg-dark d-none d-lg-flex">
                    <div className="col-lg-7 text-left text-white">
                      
                        <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                            <i className="fa fa-phone-alt text-primary mr-2"></i>
                            <small ><a href="tel:+90539 920 53 35">0539 920 53 35</a></small>
                        </div>
                    </div>
                    
                </div>
                <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
                    <a href="" className="navbar-brand d-block d-lg-none">
                        <img src="img/yoyo.webp" height="100" width="300" alt=""/>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                          
                          <Link to="anasayfa"className="nav-item nav-link">Ana Sayfa</Link>
                          <Link to="hakkimizda" className="nav-item nav-link">Hakkimizda</Link>
                          <Link to="blog" className="nav-item nav-link">Blog</Link>
                           
                  
                         
                           
                        </div>
                        <a href="tel:+90539 920 53 35" className="btn btn-primary mr-3 d-none d-lg-block">Bizi Arayın</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    
   
        </div>
     );
}
 
export default Header;