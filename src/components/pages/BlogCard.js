import {React,Component} from 'react';
import {Link} from 'react-router-dom';
import BlogDetailPage from './BlogDetailPage';
import {Route, Routes,BrowserRouter} from 'react-router-dom';
class BlogCard extends Component {
    
    render()
     {  
        console.log(this.props.day)

        const cardProps = this.props;
     
        return (

    
<div className="col-lg-4 col-md-6 mb-5">


                    <div className="position-relative mb-4">
                        <img className="img-fluid rounded w-100" src={this.props.imgUrl} alt=""/>
                        <div className="blog-date">
                            <h4 className="font-weight-bold mb-n1">{this.props.day}</h4>
                            <small className="text-white text-uppercase">{this.props.month}</small>
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <a className="text-secondary text-uppercase font-weight-medium" href="">YILDIZ</a>
                        <span className="text-primary px-2">|</span>
                        <a className="text-secondary text-uppercase font-weight-medium" href="">Halı</a>
                    </div>
                    <h5 className="font-weight-medium mb-2">{this.props.mainHead}</h5>
                    <p className="mb-4">{this.props.subHead}Detaylı bilgi...</p>
                    {/* <a className="btn btn-sm btn-primary py-2" href="dokumaHali.html">{this.props.id}Okumaya devam et...</a> */}
                    <Link to="/blog/blog-detay" state={cardProps} className="btn btn-sm btn-primary py-2">{this.props.id}Okumaya devam et...</Link>
             

                </div>



    










       

        );
    }
}
 
export default BlogCard;