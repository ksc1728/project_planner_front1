import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../logo.jpg';
import handshake from '../istockphoto-1460755337-170667a.webp'

function ContactUs({ children }) {
  const handleSubmit = (e) => {
    // Handle form submission logic here
  };

  return (
    <div>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'skyblue',
          height: '65px',
          padding: '0 20px',
        }}
      >
        <div>
          <img
            src={image}
            alt="Logo"
            style={{
              height: '50px',
              width: '50px',
              marginRight: '20px',
            }}
          />
        </div>
        <div>
          <button
            style={{
              backgroundColor: 'blue',
              borderRadius: '4px',
              padding: '8px 20px',
              marginRight: '20px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.6)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '16px',
              }}
            >
              Home
            </Link>
          </button>
          <button
            style={{
              backgroundColor: 'blue',
              borderRadius: '4px',
              padding: '8px 20px',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.6)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '16px',
              }}
            >
              Logout
            </Link>
          </button>
        </div>
      </nav>

      <div className="content" style={{backgroundImage: "url(../istockphoto-1460755337-170667a.webp)" }}>
        <div className="container" >
          <div className="row" style={{marginTop:"20px"}}>
            <div className="col-md-5 mr-auto" style={{backgroundColor:""}}>
              <h3 className="mb-3" style={{color:"red"}}>Let's work together </h3> 
              <p style={{color:"#F6AE2D"}}>
              <div style={{color:"black",fontSize:'20px'}}>General Inquiries:</div> If you have general questions or need more information about our services, feel free to send us an email at ProjectPlanner@gmail.com or call us at 0012 2244 3322.
              </p>
              <p style={{color:"#33658A"}}><div style={{color:"black",fontSize:'20px'}}>Customer Support:</div> Our dedicated support team is here to assist you. Reach out to them for any technical issues or questions you may have.</p>
              <p style={{color:"#2F4858"}}><div style={{color:"black",fontSize:'20px'}}>Business Partnerships:</div> If you're interested in partnering with us or exploring business opportunities, please contact us at ProjectPlannerpartnership@gmail.com.</p>
              <p style={{color:"#F26419"}}><div style={{color:"black",fontSize:'20px'}}>Office Location:</div> Visit our office at Cecilia Chapman,
                                                      711-2880, Nulla St.
                                                      Mankato, Mississippi, 96522
                                                      (257) 563-7401 during our business hours to meet our team in person.</p>
              </div>
            <div className="col-md-6" style={{backgroundColor:"skyblue",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:"500px",padding:"20px",borderRadius:"10px"}}>
              <div className="box" style={{backgroundColor:"",boxShadow:""}}>
                <h3 className="heading" style={{color:"red"}}>Send Us A Message</h3>
                <form
                  className="mb-5"
                  onSubmit={handleSubmit}
                  id="contactForm"
                  name="contactForm"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label for="name" className="col-form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label for="organization" className="col-form-label">
                        Organization
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="organization"
                        id="organization"
                        placeholder="Your organization"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label for="email" className="col-form-label">
                        Email *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label for="message" className="col-form-label">
                        Message *
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mb-3">
                    {/* <div className="col-md-6 form-group">
                      <label for="budget" className="col-form-label">
                        Budget
                      </label>
                      <select
                        className="custom-select"
                        id="budget"
                        name="budget"
                      >
                        <option selected>Choose...</option>
                        <option value="$1000 below">&lt; $1,000</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $25,000">$15,000 - $25,000</option>
                        <option value="$25,000 >">$25,000 &gt;</option>
                      </select>
                    </div> */}
                    {/* <div className="col-md-6 form-group"> */}
                      {/* <label for="date" className="col-form-label">
                        Target Lunch
                      </label> */}
                      {/* <input
                        type="text"
                        className="form-control"
                        name="date"
                        id="date"
                        placeholder="Example: January 15th"
                      />
                    </div> */}
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-block btn-warning text-white rounded-0 py-2 px-4"
                      />
                      <span className="submitting"></span>
                    </div>
                  </div>
                </form>
                <div id="form-message-warning mt-4"></div>
                {/* <div id="form-message-success">
                  Your message was sent, thank you!
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        
  );
}

export default ContactUs;
