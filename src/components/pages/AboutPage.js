import React from 'react';
import Features from '../Features';

import About from '../About';
import PageinHeader from '../PageinHeader';
const AboutPage = () => {
    return ( 

        <div>
            <PageinHeader name="Hakkimizda" header="Hakkimizda"></PageinHeader>
 <About/>
<Features/>
        </div>
     );
}
 
export default AboutPage;