import React from 'react';
import SideNavitems from './SideNavitems';


class SideNav extends React.Component {
    
    render() { 
        return (
            <div className='col-lg-4 mt-5 mt-lg-0'>

            <div className="mb-5">
                        <h3 className="mb-4 section-title">Son Paylaşımlar</h3>
                       
                        {this.props.props.map( props =>{
         return <SideNavitems key={props.id}  id={props.id}  imgUrl={props.imgUrl}  subHead={props.subHead} 
         
         ></SideNavitems>

        })}
                     
                      
                       
                        
                 
               
              
                    
                  
                </div>
            </div>
        );
    }
}
 
export default SideNav;