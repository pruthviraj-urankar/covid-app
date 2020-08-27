import React from 'react';
import { Link } from 'react-router-dom';

import './ErrorPage.scss';


export default ()=>{
    return(
        <div id="main">
            <div class="fof">
                    <h1>Error 404</h1>
                    <h3>Page Not Found</h3>
                    <br/><br/><br/><br/>
                    <Link to="/">
                    <h5>Go to HomePage?</h5>
                    </Link>

            </div>
        </div>
    );
}