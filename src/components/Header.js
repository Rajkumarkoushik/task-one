import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function Header() {

    const [showHam, setShowHam] = useState(false);
    const [searchInput, setSearchInput] = useState(false);

    // Back to top section starts.
    const [visibleBtn, setVisibleBtn] = useState(false);

    useEffect(() => {
        const btnVisible = () => {
            const visibility = window.pageYOffset;

            if (visibility > 100) {
                setVisibleBtn(true);
            }
            else {
                setVisibleBtn(false);
            }
        };
        return () => window.addEventListener('scroll', btnVisible);
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
// Back to top section ends.

  return (
      <>
            <header className='header py-4'>
                {/* Navigation section starts. */}
                    <nav className="container navigation d-flex justify-content-between align-items-center">
                        <div className="nav-logo">
                        <Link to="/"><img src=".\assets\fenix-insight-logo-white.png" alt="" /></Link>
                        </div>
                        <div className='navigation-tabs'>
                            <ul className="nav-links d-flex gap-25">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="contact">Services</Link></li>
                                <li><Link to="Pricing">Blogs</Link></li>
                                <li><Link to="/Started">Contact Us</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                            <i className="fa-solid fa-magnifying-glass" onClick={() => setSearchInput(!searchInput)}></i>
                        </ul>
                        </div>
                        {showHam && <div className='nav-hamburger'>
                            <ul className="nav-links d-flex gap-25" style={{transform : showHam? "scale(1)" : "scale(0)"}}>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="contact">Contact Us</Link></li>
                                <li><Link to="Pricing">Pricing Packages</Link></li>
                                <li><Link to="/Started">Get Started Now</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                
                        </ul>
                        <i class="fa-solid fa-magnifying-glass"></i>
                            </div>}
                        <div className='nav-hamburger' onClick={() => setShowHam(!showHam)}>
                            <i className="fa-solid fa-bars hamburger" ></i>
                        </div>
                    </nav>
                    <form className='home-form' style={{transform : searchInput ? "scale(1)" : "scale(0)"}}>
                        <input type="search" name="" placeholder='Search...' />
                        <i className="fa-solid fa-magnifying-glass position-absolute"></i>
                    </form>
                {/* Navigation section ends. */}
                {/* head section starts. */}
                    <section className="head-section py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 className='text-white'>Artificial Intelligence. <br /> Real Insights.</h1>
                                    <p className='text-white py-3'>Fenix Insight is an advanced insight engine purpose built for EOD operations, training and risk management. It incorporates an artificial intelligence system, scanning millions of online resources, giving an accurate global map of explosive ordnance risk.</p>
                                    <button className='btn'>Get Started Now</button>
                                    <button className='btn-login'>Login</button>
                                </div>
                                <div className="col-lg-6 head-image">
                              {/* <img src=".\assets\fenix-insight-screen-section-a.png" alt="" /> */}
                              <div className='d-flex footer-icons head-icons'>
                             <a href="/"> <i className="fa-brands fa-facebook"></i></a>
                              <a href="/"><i className="fa-brands fa-twitter"></i></a>
                             <a href="/"> <i className="fa-brands fa-linkedin"></i></a>
                              <a href="/"><i className="fa-brands fa-pinterest"></i></a>
                          </div>
                                </div>
                            </div>
                        </div>
                    </section>
                {/* head section ends. */}
          </header>
          
          {/* SCroll to top section starts. */}
            {visibleBtn && (
                <button onClick={scrollToTop} className="back-to-top">
                <i class="fa-sharp fa-solid fa-angle-up"></i>
                </button>
            )}
          {/* SCroll to top section ends. */}
          
      </>
  )
}

export default Header