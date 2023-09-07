import React from 'react';
import {Link} from 'react-router-dom';
class SideNavitems extends React.Component {
   
    render() { 
        
        return (

            <div className="d-flex align-items-center border-bottom mb-3 pb-3">
            <img className="img-fluid rounded sideNav width: 80px; height: 80px; object-fit: cover;" src={`/${this.props.imgUrl}`}  alt=""/>
            <div className="d-flex flex-column pl-3">
              <Link to={`/blog/blog-detay/${this.props.id}`} className="text-dark mb-2" >{this.props.subHead}Detaylı bilgi...</Link>
               
                <div className="d-flex">
                    <small><a className="text-secondary text-uppercase font-weight-medium" href="">yıldız</a></small>
                    <small className="text-primary px-2">|</small>
                    <small><a className="text-secondary text-uppercase font-weight-medium" href="">Halı</a></small>
                </div>
            </div>
        </div>
        



        );
    }
}
 
export default SideNavitems;