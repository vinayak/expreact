import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Management.css';

class Management extends Component {
  render() {
    return (
        <div>
         <div className="container topspace">
            <div className="col-sm-2">
              <p><img src={process.env.PUBLIC_URL + '/images/rakesh_chawla.jpg'} alt="Rakesh Chawla" width="150" height="150" /></p>
              <p className="text-center"><Link to="/profile/rakesh_chawla">Rakesh Chawla</Link></p>
              <p className="text-center">VP and MD</p>
            </div>
            <div className="col-sm-2">
              <p><img src={process.env.PUBLIC_URL + '/images/sharad_verma.jpg'} alt="Sharad Verma" width="150" height="150" /></p>
              <p className="text-center"><Link to="/profile/sharad_verma">Sharad Verma</Link></p>
              <p className="text-center">Head HR</p>
            </div>
            <div className="col-sm-2">
              <p><img src={process.env.PUBLIC_URL + '/images/smita_nair_jain.jpg'} alt="Smita Nair Jain" width="150" height="150" /></p>
              <p className="text-center"><Link to="/profile/smita_nair_jain">Smita Nair Jain</Link></p>
              <p className="text-center">Dr Divisional VP - BPM Operations</p>
            </div>
            <div className="col-sm-2">
              <p><img src={process.env.PUBLIC_URL + '/images/ashok_manjunath.jpg'} alt="Ashok Manjunath" width="150" height="150" /></p>
              <p className="text-center"><Link to="/profile/ashok_manjunath">Ashok Manjunath</Link></p>
              <p className="text-center">Sr Divisional VP</p>
            </div>
            <div className="col-sm-2">
              <p><img src={process.env.PUBLIC_URL + '/images/anindya_pal.jpg'} alt="Anindya Pal" width="150" height="150" /></p>
              <p className="text-center"><Link to="/profile/anindya_pal">Anindya Pal</Link></p>
              <p className="text-center">Head Finance</p>
            </div>
            <div className="col-sm-2">
              <p><img src={process.env.PUBLIC_URL + '/images/deena_dayalan_naidu.jpg'} alt="Deena Dayalan Naidu" width="150" height="150" /></p>
              <p className="text-center"><Link to="/profile/deena_dayalan_naidu">Deena Dayalan Naidu</Link></p>
              <p className="text-center">Head of IT, Infrastructure Information Security</p>
            </div>
         </div>
         <div className="container">
         <div className="col-sm-2">
           <p><img src={process.env.PUBLIC_URL + '/images/hari_krishna_verma_nadimpali.jpg'}alt="Hari Krishna Verma Nadimpali"  width="150" height="150" /></p>
           <p className="text-center"><Link to="/profile/hari_krishna_verma_nadimpali">Hari Krishna Verma Nadimpali</Link></p>
           <p className="text-center">Sr Divisional VP</p>
         </div>
         <div className="col-sm-2">
           <p><img src={process.env.PUBLIC_URL + '/images/pramod_kejriwal.jpg'}alt="Pramod Kejriwal"  width="150" height="150" /></p>
           <p className="text-center"><Link to="/profile/pramod_kejriwal">Pramod Kejriwal</Link></p>
           <p className="text-center">Associate VP - BI and Analytics</p>
         </div>
         <div className="col-sm-2">
           <p><img src={process.env.PUBLIC_URL + '/images/rajesh_apparao.jpg'} alt="Rajesh Apparao" width="150" height="150" /></p>
           <p className="text-center"><Link to="/profile/rajesh_apparao">Rajesh Apparao</Link></p>
           <p className="text-center">Sr Director</p>
         </div>
         </div>
        </div>
    );
  }
}

export default Management;
