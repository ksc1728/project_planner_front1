import React from 'react';
import { Link } from 'react-router-dom';
import image from '../logo.jpg';
import image1 from '../logo.jpg';
// import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
// C:\Users\SRICHANDANA\Desktop\mern_project\frontend\src\logo.jpg

function About({ children }) {
  return (
      <div>
  <nav style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'skyblue',
    height: '65px',
    padding: '0 20px',
  }}>
    <div>
      <img src={image} alt='Logo' style={{
        height: '50px',
        width: '50px',
        marginRight: '20px',
      }} />
    </div>
    <div>
      <button style={{
        backgroundColor: '#39A7FF',
        borderRadius: '4px',
        padding: '8px 20px',
        marginRight: '20px',
        transition: 'opacity 0.2s',
      }} 
      onMouseEnter={(e) => e.target.style.opacity = 0.6}
      onMouseLeave={(e) => e.target.style.opacity = 1}>
        <Link to="/" style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '16px',
        }}>
          Home
        </Link>
      </button>
      <button style={{
        backgroundColor: '#39A7FF',
        borderRadius: '4px',
        padding: '8px 20px',
        transition: 'opacity 0.2s',
      }} 
      onMouseEnter={(e) => e.target.style.opacity = 0.6}
      onMouseLeave={(e) => e.target.style.opacity = 1}>
        <Link to="/login" style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '16px',
        }}>
          Logout
        </Link>
      </button>
    </div>
  </nav>

    <div>
        {<div>
    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src={image1}
              alt="About 1"
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-7" style={{backgroundColor:"#940B92",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:"400px",padding:"20px",borderRadius:"10px"}}>
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
              {/* style={{color: 'yellow',fontSize: '',}} */}
                <h2 className="mb-3" style={{color: '#A0E9FF'}}>Who Are We?</h2>
                <p className="lead fs-4 mb-3" style={{color: '#F2FFE9'}}>
                  We help organizations successfully plan, execute, and monitor their projects. 
                  Our perspective is to furnish outstanding captivating
                  services.
                </p>
                <p className="mb-5" style={{color: '#1B0F96',fontSize: '',}}>
                  We are a fast-growing company, but we have never lost sight of
                  our core values. We believe in collaboration, innovation, and
                  customer satisfaction. Our team of experienced project managers 
                  and technology experts is dedicated to making project 
                  management more accessible, intuitive, and effective. 
                  We have a passion for helping our clients achieve their 
                  project goals, and we take pride in the positive impact we've had on countless 
                  businesses and projects. We are always looking for new ways to
                  improve our products and services.
                </p>
                <div className="row gy-4 gy-md-0 gx-xxl-5X" >
                  <div className="col-12 col-md-6" >
                    <div className="d-flex" style={{backgroundColor:"#0174BE",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:"150px",padding:"20px",borderRadius:"10px"}}>
                      <div>
                        <h2 className="h4 mb-3" style={{color: '#F2FFE9',fontSize: '',}}>Versatile Brand</h2>
                        <p className="mb-0" style={{color: '#E0F4FF',fontSize: '',}}>
                          We are crafting a digital method that subsists life
                          across all mediums.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex" style={{backgroundColor:"#FFFB73",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:"150px",padding:"20px",borderRadius:"10px"}}>
                      <div className="me-4 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          className="bi bi-fire"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="h4 mb-3" style={{color: 'red',fontSize: '',}}>Digital Agency</h2>
                        <p className="mb-0" style={{color: '#F05941',fontSize: '',}}>
                          We believe in innovation by merging primary with
                          elaborate ideas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>}
      </div>
    </div>
  );
}

export default About;