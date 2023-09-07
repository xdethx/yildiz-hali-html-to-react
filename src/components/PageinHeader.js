import React from 'react';
import {Link} from 'react-router-dom';


class PageinHeader extends React.Component {
    
    render() { 
        return (
<div className="container-fluid bg-primary py-5 mb-5">
        <div className="container py-5">
            <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                    <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">{this.props.header}</h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                    <div className="d-inline-flex align-items-center">
                       
                        <Link to="/" className="btn btn-sm btn-outline-light" >Ana Sayfa</Link>
                        <i className="fas fa-angle-double-right text-light mx-2"></i>
                        <a className="btn btn-sm btn-outline-light disabled" href="">{this.props.name}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


        );
    }
}
 
export default PageinHeader;