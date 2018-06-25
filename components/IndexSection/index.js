import React, { Component } from 'react';
import Link  from 'next/link';
import Slider from 'react-slick';

import './index.scss';

class IndexSection extends Component {



  render = () => {
    var sliderSettings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 850,
          settings: {
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 550,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]

    }

    return (
      <div className="index-section">
        <div className="container">
          <div className="row my-100px">
            <div className="col-md-6 order-2 order-sm-1 my-auto text-center text-sm-left mlr-mobile">
              <div className="superrare">Super Rare</div>
              <div className="social-crypto">Social Cryto Art Collecting</div>
              <p className="social-share-desc">In early 2018 we launched SuperRare, making it easy to create, sell and collect rare digital art on Ethereum.</p>
              <button className="button1">Visit the Website</button>
            </div>
            <div className="col-md-6 order-1 order-sm-2 my-auto">
              <img className="img-fluid" src={require('../../assets/super-share.png')} alt=""/>
            </div>
          </div>
        </div>


        <div className="api-section">
          <div className="container">
            <div className="row mlr-mobile">
              <div className="col-md-12 text-center p-3">
                <div className="apis-label">
                  APIs for Ethereum NFT Applications           
                </div>
                <div className="manage-chain mb-3">
                  Managing blockchain software sucks. We provide APIs &
                  services to handle all the hard stuff, so you can focus on your UI.
                </div>
                <button className="button1 mt-3 mb-4">Request Early Access</button>
              </div>


              <div className="col-md-6">
                <div className="card1 mb-4">
                  <img src={require('../../assets/svg-icons/monitor.svg')} alt=""/>
                  <div className="desc">
                    <div>Monitor any smart contract for events.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card1 mb-4">
                  <img src={require('../../assets/svg-icons/dashboard.svg')} alt=""/>
                  <div className="desc">
                    <div>Dashboard for easy & app analytics.</div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card1 mb-4">
                  <img src={require('../../assets/svg-icons/early.svg')} alt=""/>
                  <div className="desc">
                    <div>Easily get data out of the blockchain to power your app.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card1 mb-4">
                  <img src={require('../../assets/svg-icons/smart.svg')} alt=""/>
                  <div className="desc">
                    <div>Smart contract blueprints.</div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card1 mb-4">
                  <img src={require('../../assets/svg-icons/query.svg')} alt=""/>
                  <div className="desc">
                    <div>Query with GraphQL or connect with websocket.</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card1 mb-4">
                  <img src={require('../../assets/svg-icons/eprc.svg')} alt=""/>
                  <div className="desc">
                    <div>ERC721 & ERC20 tokens.</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>


        <div className="the-team text-center">
          <h3 className="the-team-label">The Team</h3>
          <div className="container">
            <div className="row">
              <div className="col-md-12 p-1">

                <Slider { ...sliderSettings}>
                  <div className="card-column">
                    <img src={require('../../assets/teams/john-crain.png')} alt=""/>
                    <div className="member-name">John Crain</div>
                    <div className="member-role">Chief Executive Officer</div>
                    <div className="member-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi id corporis sint dolorem? Laborum.</div>
                  </div>
                  <div className="card-column">
                    <img src={require('../../assets/teams/jonathan-perkins.png')} alt=""/>
                    <div className="member-name">Jonathan Perkins</div>
                    <div className="member-role">Head of Product</div>
                    <div className="member-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi id corporis sint dolorem? Laborum.</div>
                  </div>
                  <div className="card-column">
                    <img src={require('../../assets/teams/charles-crain.png')} alt=""/>
                    <div className="member-name">Charles Crain</div>
                    <div className="member-role">Chief Technology Officer</div>
                    <div className="member-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi id corporis sint dolorem? Laborum.</div>
                  </div>
                  <div className="card-column">
                    <img src={require('../../assets/teams/brian-avello.png')} alt=""/>
                    <div className="member-name">Brian Avello</div>
                    <div className="member-role">Legal Counsel</div>
                    <div className="member-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi id corporis sint dolorem? Laborum.</div>
                  </div>
                </Slider>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default IndexSection;