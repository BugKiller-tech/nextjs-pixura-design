import React, { Component } from 'react';
import Link  from 'next/link';

import './index.scss';

class IndexHeader extends Component {
  render = () => {
    return (
      <div className="index-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Link href="/">
                <a title="pixura" className="logo">pixura</a>
              </Link>
            </div>
            <div className="col-md-6 d-none d-sm-block">
              <nav className="top-menu">
                <Link href="/"><a title="pixura">Products <i class="fas fa-caret-down"></i></a></Link>
                <Link href="/"><a title="pixura">Home</a></Link>
                <Link href="/"><a title="pixura">Contact</a></Link>
              </nav>
            </div>
          </div>


          <div className="row secion1">
            <div className="col-md-6 text-center grid-bg d-none d-sm-block">
              <img src={require('../../assets/header-img.svg')} />
            </div>
            <div className="col-md-6 my-auto mlr-mobile text-center text-sm-left">
              <div className="next-generation">The Next Generation of Crypto Assets</div>
              <div className="next-desc">Pixura provides APIs and software solutions for non-fungible token applications on Ethereum.</div>
              <button className="get-in-touch">Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default IndexHeader;