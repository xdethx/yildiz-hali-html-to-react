import {React,Component} from 'react';
import BlogCard from './BlogCard';

class BlogPage extends Component  {
     




     
    render() { 
        
       
        return (
     <div>
            <div className="container-fluid py-5">
        <div className="container">
            <div className="row align-items-end mb-4">
                <div className="col-lg-6">
                    <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Blog</h6>
                    <h1 className="section-title mb-3">Son Makaleler</h1>
                </div>
                <div className="col-lg-6">
                    <h4 className="font-weight-normal text-muted mb-3">Temiz,Hijyenik,Antibakteriyel,Hızlı ve Güvenli Halı Yıkama Hizmeti</h4>
                </div>
            </div>
            <div className="row">
             
             {this.props.blogitems.map( props =>{
         return <BlogCard key={props.id} 
         id={props.id}
         imgUrl={props.imgUrl} 
         mainHead={props.mainHead} 
          subHead={props.subHead} 
          day={props.day}
           month={props.month}></BlogCard>  
     })}
                {/* burdan devam aaa*/}
     
            </div>
        </div>
        
    </div>

    
     </div>

        );
    }
}
 
export default BlogPage;