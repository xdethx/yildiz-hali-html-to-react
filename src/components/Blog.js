import React from 'react';
import {Link} from 'react-router-dom';
const Blog = () => {
    return ( 
        <div>
<div className="container-fluid pt-5">
        <div className="container pt-5">
            <div className="row align-items-end mb-4">
                <div className="col-lg-6">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Blog</h6>
                    <h1 className="section-title mb-3">Son Paylaşımlar</h1>
                </div>
                <div className="col-lg-6">
                    <h4 className="font-weight-normal text-muted mb-3">Halı,koltuk,perde,yorgan yıkama hakkında detaylı bilgi edinmek için blog sayfamızı ziyaret edebilirsiniz.</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-5">
                    <div className="position-relative mb-4">
                        <img className="img-fluid rounded w-100" src="img/makine.jpg" alt=""/>
                        <div className="blog-date">
                            <h4 className="font-weight-bold mb-n1">01</h4>
                            <small className="text-white text-uppercase">Mart</small>
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <a className="text-secondary text-uppercase font-weight-medium" >Yıldız</a>
                        <span className="text-primary px-2">|</span>
                        <a className="text-secondary text-uppercase font-weight-medium" >Halı</a>
                    </div>
                    <h5 className="font-weight-medium mb-2">Makine Halı Yıkama</h5>
                    <p className="mb-4">Makine halılar nasıl yıkanır?Detaylı bilgi...</p>
                 
                    <Link to="/blog/blog-detay/1" className="btn btn-sm btn-primary py-2">Okumaya Devam et</Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <div className="position-relative mb-4">
                        <img className="img-fluid rounded w-100" src="img/el-dokuma.jpg" alt=""/>
                        <div className="blog-date">
                            <h4 className="font-weight-bold mb-n1">21</h4>
                            <small className="text-white text-uppercase">Şubat</small>
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <a className="text-secondary text-uppercase font-weight-medium" href="">Yıldız</a>
                        <span className="text-primary px-2">|</span>
                        <a className="text-secondary text-uppercase font-weight-medium" href="">Halı</a>
                    </div>
                    <h5 className="font-weight-medium mb-2">El Dokuma Halı Yıkama</h5>
                    <p className="mb-4">El dokuma halılar nasıl yıkanır?Detaylı bilgi...</p>
                    
                    <Link to="/blog/blog-detay/2" className="btn btn-sm btn-primary py-2">Okumaya Devam et</Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <div className="position-relative mb-4">
                        <img className="img-fluid rounded w-100" src="img/bambu.jpg" alt=""/>
                        <div className="blog-date">
                            <h4 className="font-weight-bold mb-n1">04</h4>
                            <small className="text-white text-uppercase">Şubat</small>
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <a className="text-secondary text-uppercase font-weight-medium" href="">Yıldız</a>
                        <span className="text-primary px-2">|</span>
                        <a className="text-secondary text-uppercase font-weight-medium" href="">Halı</a>
                    </div>
                    <h5 className="font-weight-medium mb-2">Bambu Halı Yıkama</h5>
                    <p className="mb-4">Bambu halılar nasıl yıkanır?Detaylı bilgi...</p>
                   
                    <Link to="/blog/blog-detay/3" className="btn btn-sm btn-primary py-2">Okumaya Devam et</Link>
                </div>
            </div>
        </div>
    </div>

        </div>
     );
}
 
export default Blog;