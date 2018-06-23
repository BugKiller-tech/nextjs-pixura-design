import React, { Component } from 'react';
import Link  from 'next/link';

import './index.scss';

class IndexFooter extends Component {
  render = () => {
    return (
      <div className="index-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mlr-mobile">
              <h3 className="signup-label">Sign up to Receive Updates <br/> from Pixura</h3>
            </div>           
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className="input-group input-group-lg">
                <input type="email" className="form-control" placeholder="Enter your e-mail address" aria-label="Enter your e-mail address" aria-describedby="email-addon" />>
                <div className="input-group-append">
                  <span className="input-group-text bg-success" id="email-addon">@</span>
                </div>
              </div>
            </div>
            <div className="col-md-12 text-center mt-4 text-white">
              Or <Link href="/getintouch"><a title="get in touch" className="getintouch">get in touch</a></Link>
            </div>
            <div className="col-md-12 my-5">
              <hr/>
            </div>
          </div>



          <div className="footer">
            <div className="copy-right mb-2 bold">@2018 Pixura</div>
            <div>
              <div className="mb-3">Our Product</div>
              <ul>
                <li><Link href="/"><a title="Super Rare">Super Rare</a></Link></li>
                <li><Link href="/"><a title="APIs for Ethereum">APIs for Ethereum</a></Link></li>
              </ul>
            </div>

            <div>
              <div className="mb-3">PLACE HOLDER</div>
              <ul>
                <li><Link href="/"><a title="Some Link">Some Link</a></Link></li>
                <li><Link href="/"><a title="Some other Link">Some other Link</a></Link></li>
                <li><Link href="/"><a title="A Link">A Link</a></Link></li>
                <li><Link href="/"><a title="Some other Link">Some other Link</a></Link></li>
              </ul>
            </div>

            <div>
              <div className="mb-3">PLACE HOLDER</div>
              <ul>
                <li><Link href="/"><a title="Some Link">Some Link</a></Link></li>
                <li><Link href="/"><a title="Some other Link">Some other Link</a></Link></li>
                <li><Link href="/"><a title="A Link">A Link</a></Link></li>
                <li><Link href="/"><a title="Some other Link">Some other Link</a></Link></li>
              </ul>
            </div>

            <div>
              <div className="mb-3">Community</div>
              <ul>
                <li><Link href="/"><a title="Github">Github</a></Link></li>
                <li><Link href="/"><a title="Twitter">Twitter</a></Link></li>
                <li><Link href="/"><a title="Product">Product</a></Link></li>
                <li><Link href="/"><a title="Hunt">Hunt</a></Link></li>
              </ul>
            </div>
            
            

          </div>
        </div>
      </div>
    )
  }
}


export default IndexFooter;