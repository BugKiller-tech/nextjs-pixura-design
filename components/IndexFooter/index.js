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
              <form action="https://blockchainjobs.us15.list-manage.com/subscribe/post?u=5dfce9177b2176b567e783c36&amp;id=6bf850e75d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate contact_form" target="_blank">
                <div className="input-group input-group-lg">
                  <input type="email" name="EMAIL" id="email" className="form-control" placeholder="Enter your e-mail address" aria-label="Enter your e-mail address" aria-describedby="email-addon" required />
                  <div className="input-group-append">
                    <span className="input-group-text signup-addon" id="email-addon">
                      <button className="submit-email" style={{ display: 'none' }}></button>
                      <i className="far fa-envelope" onClick = {() => { document.querySelector('.submit-email').click(); }}></i>
                    </span>
                  </div>
                </div>
              </form>


              {/* <div className="newsletter_box">
                <div className="row">
                  <div className="twelvecol">
                    <div id="mc_embed_signup">
                      <div id="contact-form">
                        <form action="https://blockchainjobs.us15.list-manage.com/subscribe/post?u=5dfce9177b2176b567e783c36&amp;id=6bf850e75d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate contact_form" target="_blank" novalidate="novalidate">
                          <div className="mc-field-group">
                            <input placeholder="Enter Your Email Address" type="email" value="" name="EMAIL" className="required email" id="email" aria-required="true" />
                            <input id="submit-button" type="submit" value="Newsletter Signup" name="subscribe" className="button" />
                          </div>
                          <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={{display:none}}></div>
                            <div className="response" id="mce-success-response" style={{display:none}}></div>
                          </div>
                          <div style={{position: absolute, left: '-5000px'}} aria-hidden="true">
                            <input type="text" name="b_5dfce9177b2176b567e783c36_6bf850e75d" tabindex="-1" value="" />
                          </div>
                          <div className="clear">
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}




            </div>
            <div className="col-md-12 text-center mt-4 text-white">
              Or <a title="get in touch" href="mailto:hello@pixura.io" className="getintouch">get in touch</a>
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
                <li><a title="Github" href="https://github.com/pixura">Github</a></li>
                <li><a title="Twitter" href="https://twitter.com/pixura_io">Twitter</a></li>
                <li><a title="Product" href="https://www.producthunt.com/posts/superrare">ProductHunt</a></li>
                <li><a title="angle" href="https://angel.co/pixura">Angle.co</a></li>
              </ul>
            </div>
            
            

          </div>
        </div>
      </div>
    )
  }
}


export default IndexFooter;