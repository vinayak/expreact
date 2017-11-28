import React, { Component } from 'react';
import './Management.css';

import Anindya from './images/Anindya.jpg';
import Ashok from './images/Ashok.jpg';
import Deen from './images/Deena-Dayalan-Naidu.jpg';
import Hari from './images/Hari.jpg';
import Pramod from './images/Pramod.jpg';
import Rajesh from './images/Rajesh.jpg';
import Rakesh from './images/Rakesh.png';
import Sharad from './images/Sharad.jpg';
import Smita from './images/Smita-Nair-Jain.jpg';


class Management extends Component {
  render() {
    return (
        <div>
          <h1>Management</h1>
         <div className="container">
            <div className="col-sm-2">
              <p><img src={Rakesh} alt="Rakesh Chawla" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><a href="https://searsholdingsindia.in/rakesh-chawla-md/">Rakesh Chawla</a></p>
              <p className="text-center">VP and MD</p>
            </div>
            <div className="col-sm-2">
              <p><img src={Rakesh} alt="Rakesh Chawla" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><a href="https://searsholdingsindia.in/rakesh-chawla-md/">Rakesh Chawla</a></p>
              <p className="text-center">VP and MD</p>
            </div>
            <div className="col-sm-2">
              <p><img src={Rakesh} alt="Rakesh Chawla" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><a href="https://searsholdingsindia.in/rakesh-chawla-md/">Rakesh Chawla</a></p>
              <p className="text-center">VP and MD</p>
            </div>
            <div className="col-sm-2">
              <p><img src={Rakesh} alt="Rakesh Chawla" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><a href="https://searsholdingsindia.in/rakesh-chawla-md/">Rakesh Chawla</a></p>
              <p className="text-center">VP and MD</p>
            </div>
            <div className="col-sm-2">
              <p><img src={Rakesh} alt="Rakesh Chawla" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><a href="https://searsholdingsindia.in/rakesh-chawla-md/">Rakesh Chawla</a></p>
              <p className="text-center">VP and MD</p>
            </div>
            <div className="col-sm-2">
              <p><img src={Rakesh} alt="Rakesh Chawla" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><a href="https://searsholdingsindia.in/rakesh-chawla-md/">Rakesh Chawla</a></p>
              <p className="text-center">VP and MD</p>
            </div>
         </div>
        </div>
    );
  }
}

export default Management;
