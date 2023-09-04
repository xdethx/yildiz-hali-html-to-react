import {React,Component} from 'react';
import BlogCard from './BlogCard';

class BlogPage extends Component {
     
    

     
    render() { 
        const   blogitems= [
           

            {id: 1,imgUrl: "img/makine.jpg", mainHead: "Makine Halı Yıkama",subHead: "Makine halılar nasıl yıkanır?",day: "01",month: "Mart"},

             {id: 2,imgUrl: "img/el-dokuma.jpg", mainHead: "El Dokuma Halı Yıkama",subHead: "El dokuma halılar nasıl yıkanır?",day: "21",month: "şubat"},
             {id: 3,imgUrl: "img/bambu.jpg", mainHead: "Bambu Halı Yıkama",subHead: "Bambu halılar nasıl yıkanır?",day: "04",month: "şubat" },
             {id: 4,imgUrl: "img/ladik.jpg", mainHead: "Ladik Halı Yıkama",subHead: "Ladik halılar nasıl yıkanır?",day: "04",month: "şubat" },
             {id: 5,imgUrl: "img/yun.jpg", mainHead: "Yün Halı Yıkama",subHead: "Yün halılar nasıl yıkanır?",day: "28",month: "ocak" },
             {id: 6,imgUrl: "img/step.jpg", mainHead: "Step Halı Yıkama",subHead: "Step halılar nasıl yıkanır?",day: "25",month: "ocak" },
             {id: 7,imgUrl: "img/koltuk.jpg", mainHead: "Koltuk Yıkama",subHead: "Koltuk nasıl yıkanır?",day: "20",month: "ocak" },
             {id: 8,imgUrl: "img/perde.jpg", mainHead: "Mekanik Perde Yıkama",subHead: "Perde nasıl yıkanır?",day: "18",month: "ocak"},
             {id: 9,imgUrl: "img/yorgan.jpg", mainHead: "Yorgan ve Battaniye Yıkama",subHead: "Yorgan ve battaniye nasıl yıkanır?",day: "11",month: "ocak"},
          ]
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
             
            {blogitems.map((props)=>{
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