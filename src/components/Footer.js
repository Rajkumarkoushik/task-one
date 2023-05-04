import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
         <>
            <footer className="footer-section py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <img src=".\assets\fenix-insight-logo-white.png" alt="" />
                          <p className='text-white py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque eaque temporibus qui provident assumenda et nobis.</p>
                          <div className='d-flex footer-icons'>
                             <a href="/"> <i className="fa-brands fa-facebook"></i></a>
                              <a href="/"><i className="fa-brands fa-twitter"></i></a>
                             <a href="/"> <i className="fa-brands fa-linkedin"></i></a>
                              <a href="/"><i className="fa-brands fa-pinterest"></i></a>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className='text-white'>Useful Links</h5>
                            <ul className='px-0 py-3'>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="contact">Services</Link></li>
                                <li><Link to="Pricing">Blogs</Link></li>
                                <li><Link to="/Started">Contact Us</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-address">
                            <h5 className='text-white'>Contact Us</h5>
                            <div className="py-3">
                                <div className="d-flex">
                                    <h6>Location:-</h6>
                                    <p><a href="">124, Queens walk 2nd cross Denmark</a></p>
                                </div>
                                <div className="d-flex">
                                    <h6>Phone :-</h6>
                                    <p><a href="">+00-888-27-240</a></p>
                                </div>
                                <div className="d-flex">
                                    <h6>Email :-</h6>
                                    <p><a href="">support@info.com</a></p>
                                </div>
                            </div>
                        </div>
                      <div className="col-lg-3 col-md-6">
                          <h5 className='text-white'>Latest Work</h5>
                          <div className='py-3 footer-images'>
                              <img src=".\assets\footer-1.jpg" alt="" />
                              <img src=".\assets\footer-2.jpg" alt="" />
                              <img src=".\assets\footer-3.jpg" alt="" />
                              <img src=".\assets\footer-4.jpg" alt="" />
                              <img src=".\assets\footer-5.jpg" alt="" />
                              <img src=".\assets\footer-6.jpg" alt="" />
                          </div>
                      </div>
                    </div>
                </div>
            </footer>
            <section className="copy-right py-2">
                <div className="container d-flex justify-content-between copy-right-content">
                    <p className='pb-0 mb-0'>Copyright © Fenix Insight, All Rights Reserved.</p>
                    <ul className='d-flex gap-25 mb-0'>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/"> Terms & Conditions</Link></li>
                    </ul>
                </div>
            </section>
        </>
  )
}

export default Footer