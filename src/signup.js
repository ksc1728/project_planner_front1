import 'bootstrap/dist/css/bootstrap.min.css';
import image from './businesspeople-meeting-office-working_23-2148908922.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useRef } from 'react';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   //
//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:5/signup', {
//         email,
//         password,
//         confirmPassword,
//       });

//       console.log(response.data); // Handle the response as needed
//     } catch (error) {
//       console.error('Error:', error.response.data); // Handle the error as needed
//     }
//   };

//   return (
//     <section className="vh" style={{ backgroundColor: 'white' }}>
//       <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-50">
//           <div className="col col-xl-10">
//             <div className="card" style={{ borderRadius: '1rem' }}>
//               <div className="row g-0" style={{ backgroundColor: 'skyblue', borderRadius: '1rem' }}>
//                 <div className="col-md-6 col-lg-5 d-none d-md-block">
//                   <img
//                     src={image}
//                     alt="login form"
//                     className="img-fluid"
//                     style={{ borderRadius: '1rem 0 0 1rem', height: '100%', width: '100%' }}
//                   />
//                 </div>
//                 <div className="col-md-6 col-lg-7 d-flex align-items-center">
//                   <div className="card-body p-4 p-lg-5 text-black">
//                     <form onClick={handleSubmit}>
//                       <h4 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', color: 'black', fontSize: '30px', fontStyle: '' }}>
//                         Create your account
//                       </h4>
//                       <div className="form-outline mb-4">
//                         <input
//                           type="email"
//                           id="form2Example17"
//                           className="form-control form-control-lg"
//                           onChange={(e) => setEmail(e.target.value)}
//                           required
//                         />
//                         <label className="form-label" htmlFor="form2Example17" name="email" value={user.email} onChange={handleChange} style={{ color: '' }}>
//                           Email address
//                         </label>
//                       </div>
//                       <div className="form-outline mb-4">
//                         <input
//                           type="password"
//                           id="form2Example27"
//                           className="form-control form-control-lg"
//                           onChange={(e) => setPassword(e.target.value)}
//                           required
//                         />
//                         <label className="form-label" htmlFor="form2Example27" name="password" value={user.password} onChange={handleChange} style={{ color: '' }}>
//                           Password
//                         </label>
//                       </div>
//                       <div className="form-outline mb-4">
//                         <input
//                           type="password"
//                           id="form2Example28"
//                           className="form-control form-control-lg"
//                           onChange={(e) => setConfirmPassword(e.target.value)}
//                           required
//                         />
//                         <label className="form-label" htmlFor="form2Example28" name="conpassword" value={user.conpassword} onChange={handleChange} style={{ color: '' }}>
//                           Confirm Password
//                         </label>
//                       </div>
//                       <div className="pt-1 mb-4">
//                         <Link to="/createproject">
//                           <button
//                             className="btn btn-dark btn-lg btn-block"
//                             type="button"
//                             onClick={signup}
//                             style={{ width: '100%', boxShadow: '0px 0px 0px 2px grey' }}
//                           >
//                             Sign Up
//                           </button>
//                         </Link>
//                       </div>
//                       <a href="#!" className="small text-muted text-decoration-none">
//                         Terms of use.
//                       </a>
//                       <a href="#!" className="small text-muted text-decoration-none">
//                         Privacy policy
//                       </a>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signup;

const Signup = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [errMsg, setErrMsg] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://project-planner-server2.onrender.com/signup', {
        email,
        password,
        confirmPassword,
      });

      console.log(response.data); // Handle the response as needed

      // Redirect to the Kanban page on successful signup
      navigate('/login');
    } catch (err) {
      if (!err?.response) {
        alert('No Server Response');
      } else if (err.response?.status === 400) {
        alert('Email already in use');
      } else {
        alert('Signup Failed');
      }
      console.error('Error:', err.response.data); // Log the error for debugging
    }
  };

  return (
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await axios.post('http://localhost:50/signup', {
  //       email,
  //       password,
  //     });
  
  //     console.log(response.data); // Handle the response as needed
  //     setSuccess(true);
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg('No Server Response');
  //     } else if (err.response?.status === 400) {
  //       setErrMsg('Email already in use');
  //     } else {
  //       setErrMsg('Signup Failed');
  //     }
  //     console.error('Error:', err.response.data); // Log the error for debugging
  //   }
  // };  
  // return (
    <section className="vh" style={{ backgroundColor: 'white' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0" style={{ background: 'linear-gradient(to right, #A9F1DF , #FFBBBB)', borderRadius: '1rem' }}>
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={image}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem', height: '100%', width: '100%' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <h4 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', color: 'black', fontSize: '30px', fontStyle: '' }}>
                        Create your account
                      </h4>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2Example17" style={{ color: '' }}>
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2Example27" style={{ color: '' }}>
                          Password
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example28"
                          className="form-control form-control-lg"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                        <label className="form-label" htmlFor="form2Example28" style={{ color: '' }}>
                          Confirm Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          style={{ width: '100%', boxShadow: '0px 0px 0px 2px grey' }}
                        >
                          Sign Up
                        </button>
                      </div>
                      <a href="#!" className="small text-muted text-decoration-none">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted text-decoration-none">
                        Privacy policy
                      </a>
                    </form>
                    {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                      {errMsg}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;