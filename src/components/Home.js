import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
//import welcomeImage from '../4Types.png';
import './home.css';

// function Home() {
//   return (
//     <div className="flex flex-col items-center w-full pt-10">
//       <img src={welcomeImage} className="w-5/12" alt="" />
//       <Link to="/login">Login</Link>
//       <Link to="/signup">Sign Up</Link> 

//     </div>
//   );
// }

// export default Home;#E5CFF7

const Home = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center"
      style={{ backgroundColor: 'white', height: '100vh', width: '100%' }}
    >
      <div className="container" style={{ background: 'white',position:'relative', top:'-30px'}}>
      <h1 style={{ color: 'tomato',fontSize:'54px',fontFamily:'TimesNewRoman', textAlign:'center',top:'50px' }}>Welcome to Project Planner</h1><br></br>
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <p style={{ color: 'rgb(125, 107, 231)',fontFamily:'TimesNewRoman',fontSize:'21px'}}>At Project Planner, we are dedicated to helping you efficiently manage your projects from start to finish. Our user-friendly platform is designed to streamline your project management processes, enhance collaboration, and improve productivity.</p>
            <p style={{ color: 'rgb(125, 107, 231)',fontFamily:'TimesNewRoman',fontSize:'21px' }}>Whether you're a small business or a large enterprise, we have the tools and expertise to support your project management needs. Explore our site to learn 
            more about our services, read success stories, and discover valuable resources to boost your project management skills.</p>
            <div>
              <Link to="/login">
                <a
                  href="#"
                  className="btn btn-lg active"
                  style={{
                    backgroundColor: '#363062',
                    color: 'white',
                    border: 'none',
                    marginRight: '30px',
                    marginTop:'35px',
                    padding:'10px 40px'
                  }}
                  role="button"
                  aria-pressed="true"
                >
                  Login
                </a>
              </Link>
              <Link to="/signup">
                <a
                  href="#"
                  className="btn btn-lg active"
                  style={{
                    backgroundColor: '#363062',
                    color: 'white',
                    border: 'none',
                    marginTop:'35px',
                    padding:'10px 40px'
                  }}
                  role="button"
                  aria-pressed="true"
                >
                  Signup
                </a>
              </Link>
              {/* <div class="text-center mb-3">
                <button type="button" class="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign in</button>
              </div> */}
            </div>
          </div>
          {/* <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={welcomeImage} className="img-fluid animated oscillate" alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/ksc1728/test7.git
// git push -u origin main