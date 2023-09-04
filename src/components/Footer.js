import React from 'react';

const Footer = () => {
    return ( 

<div>
<div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <a href="index.html" className="navbar-brand">
                    <img src="img/yoyo.webp" height="100" width="300" alt=""/>
                </a>
                <p>Sizlere en iyi,hijyenik,ilk günkü gibi temiz halıları sunmak için 25 yıllık tecrübemizle burdayız  </p>
                <h5 className="font-weight-semi-bold text-white mb-2">Çalışma Saatleri:</h5>
                <p className="mb-1">Pazartesi-Cumartesi, 08:00-17:00</p>
                <p className="mb-0">Pazar: Kapalı</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="font-weight-semi-bold text-primary mb-4">İletişime Geçin</h4>
                <p><i className="fa fa-map-marker-alt text-primary mr-2"></i>İstanbul/Türkiye</p>
                <p><i className="fa fa-phone-alt text-primary mr-2"></i><a href="tel:+90539 920 53 35">0539 920 53 35</a></p>
               
                
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="font-weight-semi-bold text-primary mb-4">Bağlantılar</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="index.html"><i className="fa fa-angle-right mr-2"></i>Ana Sayfa</a>
                    <a className="text-white mb-2" href="about.html"><i className="fa fa-angle-right mr-2"></i>Hakkımızda</a>
           
                    <a className="text-white" href="blog.html"><i className="fa fa-angle-right mr-2"></i>Blog</a>
                </div>
            </div>
           
        </div>
    </div>
    <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" >
        <div className="row">
            <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white">&copy; <a href="index.html">Yildiz Hali Yikama</a> Hizmetleri</p>
                
            </div>
            
        </div>
    </div>

    <p><a href="https://api.whatsapp.com/send?phone=905399205335">
        <img src="/img/wp.png" className="floating-parent"/>
        </a></p>
        <a href="#" className="btn btn-primary px-3 back-to-top"><i className="fa fa-angle-double-up"></i></a>


</div>


     );
}
 
export default Footer;