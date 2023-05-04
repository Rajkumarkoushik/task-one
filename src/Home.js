import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Charts from './Charts';
import { Link } from 'react-router-dom';
function Home() {

    const listItems = [
        {id:1, item: "70+ countries and associated events"},
        {id:2, item: "Access to munition data"},
        {id:3, item: "Dynamic category munition data charts"},
        {id:4, item: "Detailed country page layout (Map layers , Markers , Heatmap , Medical facilities, Infrastructure)"},
        {id:5, item: "Complete munitions information (Pie charts, Line graphs)"},
        {id:6, item: "Informative date range selector"},
        {id:7, item: "Identified munitions"},
        {id:8, item: "Events timeline"},
        {id:9, item: "Upgrade to Teams at any time"},
    ]
    const enterprise = [
        {id:1, item: "All Benefits of Pro Access"},
        {id:2, item: "Team Management"},
        {id:3, item: "Dedicated Account Manager"},
        {id:4, item: "Technical Information Point of Contact"},
        {id:5, item: "Munition Documentation"},
        {id:6, item: "Advanced Munition Data"},
    ]

  return (
      <>
          {/* Header component  */}
            <Header/>
          {/* Header component  */}

          {/* About us section starts. */}
            <section className="about-us py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className='about-image'>
                                <img className='img-fluid' src=".\assets\about-2.png" alt="AboutImage" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className='about-content'>
                            <h6>About Company</h6>
                            <h2>Mission is to bring force of simulated intelligence to business</h2>
                            <img src=".\assets\divider-1.png" alt="" />
                            <p className='py-3'>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it but right to find fault with a man who chooses enjoy.for your business work.</p>
                            <p>Which of us ever undertakes laborious physical exercise,except to obtain advantage from it who do not know how to
                                pursue pleasure.</p>
                            <button className='pro-btn about-btn'>More ABout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          {/* About us section ends. */}

          {/* Charts component */}
            <Charts/>
          {/* Charts component */}

          {/* Why choose us section starts. */}
            <section className="why-choose-us py-5">
              <div className="container choose-us">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className='choose-text py-3'>
                            <h5 className="text-white">WHY CHOOSE US</h5> 
                            <h3 className="text-white">Why people select us</h3>
                            <img src=".\assets\divider-1.png" alt="" />
                            <p className="text-white py-4">When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed every pain avoided but in certain circumstances.</p>
                          </div>
                          <div className='d-flex p-5 choose-us-cards position-relative'>
                              <div className='choose-card-image'>
                                  <img src=".\assets\icon-7.png" alt="" />
                                  <div className='shape'></div>
                             </div>
                              <div className='choose-cards-text'>
                                  <h5 className="text-white">Incentive for Results</h5>
                                  <p className="text-white py-3">Aside from get a few focal points from ithas any to criticize an outcomes.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                      <div className='d-flex choose-us-cards p-5 position-relative'>
                        <div className='choose-card-image'>
                                  <img src=".\assets\icon-6.png" alt="" />
                                  <div className='shape'></div>
                             </div>
                              <div className='choose-cards-text'>
                                  <h5 className="text-white">Worldwide Experience</h5>
                                  <p className="text-white py-3">Nor again is there any individual who loves or seeks after agony of itself, since conditions.</p>
                              </div>
                          </div>
                          <div className='d-flex choose-us-cards p-5 position-relative'>
                          <div className='choose-card-image'>
                                  <img src=".\assets\icon-9.png" alt="" />
                                  <div className='shape'></div>
                             </div>
                              <div className='choose-cards-text'>
                                  <h5 className="text-white">High-Quality Results</h5>
                                  <p className="text-white py-3">This mistakens idea of denouncing and was born complete system.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
          {/* Why choose us section ends. */}

          {/* Pricing plans section starts. */}
            <section className="pricing-plans py-5">
              <div className="container">
                  <div className="pricing-title text-center">
                    <h5>PRICING PLAN</h5>
                    <h2>Our affordable pricing plans</h2>
                    <img src=".\assets\divider-1.png" alt="" />
                  </div>
                  <div className="row py-5">
                      <div className="col-lg-4">
                          <div className="pricing-card-1 py-3">
                              <h6>Pro Free Trial</h6>
                              <h5><strike>£ 24.99</strike></h5>
                              <p>/user/month</p>
                              <button className='pro-btn'>Monthly</button> <br />
                              <button className='pro-second-btn'>Start 7-Day Free Trail</button>
                         </div>
                          <div className="pricing-card-1 py-3">
                              <h6>Pro</h6>
                              <h5>£ 24.99</h5>
                              <p>/user/month</p>
                              <button className='pro-btn'>Monthly</button>
                              <button className='pro-btn'>Annually</button> <br />
                              <button className='pro-second-btn'>Get Started Now</button>
                         </div>
                          <div className="pricing-card-1 py-3">
                              <h6>Enterprise</h6>
                                <h3>For Larger Organisations</h3>
                              <button className='pro-btn'>Monthly</button> <br />
                              <button className='pro-second-btn'>Start 7-Day Free Trail</button>
                         </div>
                      </div>
                      <div className="col-lg-8">
                          <div className='pricing-tables-1 table-1'>
                          {
                            listItems.map((eachList) => {
                                return (
                                        <>
                                            <div className="d-flex align-items-center pro-list-items">
                                                <i className="fa-sharp fa-solid fa-check"></i>
                                                <li key={eachList.id}>{eachList.item}</li>
                                            </div>
                                                     
                                        </>
                                    )
                                })   
                          }
                     </div>
                        <div className='pricing-tables-1'>
                            <ul className='px-0 pro-links'>
                              <div className="d-flex align-items-center pro-list-items">
                                <i className="fa-sharp fa-solid fa-check"></i>
                                <li>All Benefits of Free Trial Access</li>
                              </div>
                              <div className="d-flex align-items-center pro-list-items">
                                <i className="fa-sharp fa-solid fa-check"></i>
                                <li>Team Management</li>
                              </div>
                            </ul>
                        </div>
                          <div className='pricing-tables-1'>
                            <ul className='px-0 pro-links'>
                              {
                               enterprise.map((eachList) => {
                                return (
                                        <>   
                                          <div className="d-flex align-items-center pro-list-items">
                                            <i className="fa-sharp fa-solid fa-check"></i>
                                            <li key={eachList.id}>{eachList.item}</li>
                                          </div>
                                        </>
                                      )
                                        })}
                            </ul>
                          </div>
                      </div>
                      
                  </div>
              </div>
            </section>
          {/* Pricing plans section ends. */}
      
          {/* Blogs section starts. */}
            <section className="blogs-section py-5">
              <div className="container">
                <div className="pricing-title text-center">
                  <h5>NEWS & UPDATES</h5>
                  <h2>Latest thinking in data science and <br /> our company news</h2>
                  <img src=".\assets\divider-1.png" alt="" />
                </div>
                <div className="row g-5 py-4">
                  <div className="col-lg-4 blog-card">
                    <img className='img-fluid' src=".\assets\news-4.jpg" alt="" />
                    <div className='p-4 blog-card-content'>
                      <div className="d-flex gap-25">
                      <i class="fa-solid fa-folder-open"></i>
                      <h6>Technology News</h6>
                    </div>
                      <h2>Named as a Worldwide Innovator For Information</h2>
                      <Link to="/">Read More +</Link>
                    </div>
                  </div>                            
                  <div className="col-lg-4 blog-card">
                    <img className='img-fluid' src=".\assets\news-5.jpg" alt="" />
                    <div className='p-4 blog-card-content'>
                    <div className="d-flex gap-25">
                      <i class="fa-solid fa-folder-open"></i>
                      <h6>Technology News</h6>
                      </div>
                      <h2>Present status of Man-made reasoning Infographic.</h2>
                      <Link to="/">Read More +</Link>
                    </div>
                  </div>                            
                  <div className="col-lg-4 blog-card">
                    <img className='img-fluid' src=".\assets\news-6.jpg" alt="" />
                    <div className='p-4 blog-card-content'>
                    <div className="d-flex gap-25">
                      <i class="fa-solid fa-folder-open"></i>
                      <h6>Technology News</h6>
                      </div>
                      <h2>Bteach as the Champs in the Worldwide Office Award</h2>
                      <Link to="/">Read More +</Link>
                    </div>
                  </div>                            
                </div>
              </div>
            </section>
          {/* Blogs section ends. */}

          {/* Footer component */}
          <Footer/>
          {/* Footer component */}
      </>
  )
}

export default Home