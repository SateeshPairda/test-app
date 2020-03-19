import React from 'react'
import Some from'../assets/css/Some.css';
import download from './download.jpg'


 class Header extends React.Component {
    render() {
        return (
           <div>              
               <header className="head">
              <b> client logo</b>
               <ul>
                   <li> <i class="fa fa-clone" aria-hidden="true"></i> </li>
                   <li><i class="fa fa-clock-o" aria-hidden="true"></i> </li>
                   <img   className="img"src={download}/>
                   <li >Roger joseph</li><i class="fa fa-chevron-down" aria-hidden="true"></i>                  
               </ul>
               </header>
           </div>
        )
    }
}

export default Header;