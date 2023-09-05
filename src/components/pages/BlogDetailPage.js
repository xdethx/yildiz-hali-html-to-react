import {React} from 'react';
import {  useParams } from 'react-router-dom';

function BlogDetailPage(props)  {
  
    let { id } = useParams();
    parseInt(id)
    let detail
    if(id<=6) detail=props.blogDetails[0]
    if(id==7) detail=props.blogDetails[3]
    if(id==8) detail=props.blogDetails[2]
    if(id==9)  detail=props.blogDetails[1]
    console.log(detail);
        return (

<div>
<div className="container-fluid py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="mb-5">
                        <div className="d-flex mb-2">
                            <a className="text-secondary text-uppercase font-weight-medium" href="">YILDIZ</a>
                            <span className="text-primary px-2">|</span>
                            <a className="text-secondary text-uppercase font-weight-medium"Y href="">Halı</a>
                            <span className="text-primary px-2">|</span>
                            <a className="text-secondary text-uppercase font-weight-medium" href="">Mart 01, 2023</a>
                        </div>
                        <h1 className="section-title mb-3">Makine Halı Yıkama </h1>
                    </div>

                    <div className="mb-5">
                        <img className="img-fluid rounded w-100 mb-4" src="../img/makine.jpg" alt="Image"/>
                        <h2>{detail.h1}</h2>
                        <p>{detail.dec1}
                        </p>
                        
                        <h2 className="mb-4">{detail.h2}</h2>
                    
                        <p>{detail.dec2}
                        </p>
                        <h3 className="mb-4">{detail.h3}</h3>
                     
                        <p>{detail.dec3}
                        </p>
                    </div>


                    
                </div>

                
            </div>
        </div>
    </div>

</div>



        );
    
}
 
export default BlogDetailPage;