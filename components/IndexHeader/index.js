import React, { Component } from 'react';
import Link  from 'next/link';

import './index.scss';

class IndexHeader extends Component {
  componentDidMount = () => {
    document.querySelector('.hamburger').addEventListener('click', function() {
console.log(this);
      if (
        document.querySelector('.top-menu').style.display == 'none' ||
        document.querySelector('.top-menu').style.display == ''
      ){
        document.querySelector('.top-menu').style.display = 'block';
        this.classList.remove('fa-bars'); this.classList.add('fa-times');
      } else {
        document.querySelector('.top-menu').style.display = 'none';
        document.querySelector('.top-menu li ul').style.display = 'none';
        this.classList.remove('fa-times'); this.classList.add('fa-bars');
      }
    })


    document.querySelector('.top-menu li').addEventListener('click', function() {
      if (
        this.querySelector('ul').style.display == 'none' ||
        this.querySelector('ul').style.display == ''
      )
        this.querySelector('ul').style.display = 'block';
      else
        this.querySelector('ul').style.display = 'none';
    })


    window.addEventListener('resize', this.hookResizeWindow);
  }

  hookResizeWindow = () => {
    if (window.innerWidth > 800) {
      document.querySelector('.top-menu').style = '';
      document.querySelector('.top-menu li ul').style = '';
      
      document.querySelector('.hamburger').classList.remove('fa-times'); 
      document.querySelector('.hamburger').classList.add('fa-bars');
    }
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.hookResizeWindow);
    
  }



  render = () => {
    return (
      <div className="index-header">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Link href="/"><a title="home"><img src={require('../../assets/logo.png')} alt=""/></a></Link>
            </div>
            <div className="col-6 text-right text-lg-left">
              <i className="hamburger fas fa-bars pull-right d-md-none text-white"></i>

              <nav className="top-menu">
                <ul>
                  <li>
                    <a title="pixura" href="#" className="has-submenu">Products <i className="fas fa-caret-down"></i></a>
                    <ul>
                      <li><Link href="/superrare"><a title="SuperRare">SuperRare</a></Link></li>
                      <li><Link href="/"><a title="APIs for">APIs for</a></Link></li>
                    </ul>
                                        
                  </li>
                  <li><Link href="/"><a title="pixura">Home</a></Link></li>
                  <li><Link href="/"><a title="pixura">Contact</a></Link></li>
                </ul>
              </nav>
            </div>
          </div>


          <div className="row secion1">
            <div className="col-lg-6 col-md-12 text-center grid-bg d-none d-sm-block">
              <img src={require('../../assets/header-img.svg')} />
            </div>
            <div className="col-lg-6 col-md-12 my-auto mlr-mobile text-center text-lg-left">
              <div className="next-generation">The Next Generation of Crypto Assets</div>
              <div className="next-desc">Pixura provides APIs and software solutions for non-fungible token applications on Ethereum.</div>
              <a className="get-in-touch" href="mailto:hello@pixura.io">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default IndexHeader;