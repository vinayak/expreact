import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
         <div className="container topspace">
            <div className="col-sm-2">
              <p><img src={Rakesh} alt="Rakesh Chawla" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><Link to="/profile/rakesh_chawla">Rakesh Chawla</Link></p>
              <p className="text-center">VP and MD</p>
            </div>
            <div className="col-sm-2">
              <p><img src={Sharad} alt="Sharad Verma" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><Link to="/profile/sharad_verma">Sharad Verma</Link></p>
              <p className="text-center">Head HR</p>
            </div>
            <div className="col-sm-2">
              <p><img src={Smita} alt="Smita Nair Jain" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><Link to="/profile/smita_nair_jain">Smita Nair Jain</Link></p>
              <p className="text-center">Dr Divisional VP - BPM Operations</p>
            </div>
            <div className="col-sm-2">
              <p><img src={Ashok} alt="Ashok Manjunath" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><Link to="/profile/ashok_manjunath">Ashok Manjunath</Link></p>
              <p className="text-center">Sr Divisional VP</p>
            </div>
            <div className="col-sm-2">
              <p><img src={Anindya} alt="Anindya Pal" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><Link to="/profile/anindya_pal">Anindya Pal</Link></p>
              <p className="text-center">Head Finance</p>
            </div>
            <div className="col-sm-2">
              <p><img src={Deen} alt="Deena Dayalan Naidu" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
              <p className="text-center"><Link to="/profile/deena_dayalan_naidu">Deena Dayalan Naidu</Link></p>
              <p className="text-center">Head of IT, Infrastructure Information Security</p>
            </div>
         </div>
         <div className="container">
         <div className="col-sm-2">
           <p><img src={Hari} alt="Hari Krishna Verma Nadimpali" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
           <p className="text-center"><Link to="/profile/hari_krishna_verma_nadimpali">Hari Krishna Verma Nadimpali</Link></p>
           <p className="text-center">Sr Divisional VP</p>
         </div>
         <div className="col-sm-2">
           <p><img src={Pramod} alt="Pramod Kejriwal" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
           <p className="text-center"><Link to="/profile/pramod_kejriwal">Pramod Kejriwal</Link></p>
           <p className="text-center">Associate VP - BI and Analytics</p>
         </div>
         <div className="col-sm-2">
           <p><img src={Rajesh} alt="Rajesh Apparao" width="150" height="150" sizes="(max-width: 300px) 100vw, 300px"/></p>
           <p className="text-center"><Link to="/profile/rajesh_apparao">Rajesh Apparao</Link></p>
           <p className="text-center">Sr Director</p>
         </div>
         </div>
        </div>
    );
  }
}

export default Management;
