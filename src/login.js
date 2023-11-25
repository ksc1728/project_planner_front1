import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './close-up-young-colleagues-having-meeting_23-2149060288.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate} from 'react-router-dom';
import image1 from './logo.jpg';
import axios from 'axios';

// C:\Users\SRICHANDANA\Desktop\mern_project\frontend\src\logo.jpg
// C:\Users\SRICHANDANA\Desktop\mern_project\frontend\src\close-up-young-colleagues-having-meeting_23-2149060288.avif
// C:\Users\SRICHANDANA\Desktop\mern_project\frontend\src\businesspeople-meeting-office-working_23-2148908922.avif


// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url('your-background-image-url.jpg')`, // Replace with your background image URL
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: 'white',
//           borderRadius: '1rem',
//           padding: '20px',
//           maxWidth: '400px',
//           width: '100%',
//           boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
//         }}
//       >
//         <form>
//           <div className="d-flex align-items-center mb-3 pb-1">
//             <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
//             <span className="h1 fw-bold mb-0">Logo</span>
//           </div>
//           <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px', textAlign: 'center' }}>
//             Sign into your account
//           </h5>
//           <div className="form-outline mb-4">
//             <input
//               type="email"
//               id="form2Example17"
//               className="form-control form-control-lg"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             <label
//               className={`form-label ${email ? 'active' : ''}`}
//               htmlFor="form2Example17"
//             >
//               Email address
//             </label>
//           </div>
//           <div className="form-outline mb-4">
//             <input
//               type="password"
//               id="form2Example27"
//               className="form-control form-control-lg"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             <label
//               className={`form-label ${password ? 'active' : ''}`}
//               htmlFor="form2Example27"
//             >
//               Password
//             </label>
//           </div>
//           <div className="pt-1 mb-4">
//             <button
//               className="btn btn-dark btn-lg btn-block"
//               type="button"
//             >
//               Login
//             </button>
//           </div>
//           <a className="small text-muted" href="#!">
//             Forgot password?
//           </a>
//           <p className="mb-5 pb-lg-2" style={{ color: '#393f81', textAlign: 'center' }}>
//             Don't have an account? <a href="#!" style={{ color: '#393f81' }}>
//               Register here
//             </a>
//           </p>
//           <a href="#!" className="small text-muted">
//             Terms of use.
//           </a>
//           <a href="#!" className="small text-muted">
//             Privacy policy
//           </a>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/login', {
//         email,
//         password,
//       });

//       console.log(response.data); // Handle the response as needed
//     } catch (error) {
//       console.error('Error:', error.response.data); // Handle the error as needed
//     }
//   };

//   return (
//     <section className="vh" style={{ backgroundColor: '#A7D397' }}>
//       <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-50">
//           <div className="col col-xl-10">
//             <div className="card" style={{ borderRadius: '1rem' }}>
//               <div className="row g-0" style={{ backgroundColor: 'white', borderRadius: '1rem' }}>
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
//                         Sign in to your account
//                       </h4>
//                       <div className="form-outline mb-4">
//                         <input
//                           type="email"
//                           id="form2Example17"
//                           className="form-control form-control-lg"
//                           onChange={(e) => setEmail(e.target.value)}
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
//                         />
//                         <label className="form-label" htmlFor="form2Example27" name="password" value={user.password} onChange={handleChange} style={{ color: '' }}>
//                           Password
//                         </label>
//                       </div>
//                       <div className="pt-1 mb-4">
//                         <Link to="/createproject">
//                           <button
//                             className="btn btn-dark btn-lg btn-block"
//                             type="button"
//                             onClick={login}
//                             style={{ width: '100%', boxShadow: '0px 0px 0px 2px grey' }}
//                           >
//                             Login
//                           </button>
//                         </Link>
//                       </div>
//                       <a className="small text-muted text-decoration-none" href="#!">
//                         Forgot password?
//                       </a>
//                       <Link to="/signup">
//                         <p className="mb-5 pb-lg-2 text-decoration-none" style={{ color: '#393f81', textDecoration: 'none' }}>
//                           Don't have an account?{' '}
//                           <a href="#!" className="text-decoration-none" style={{ color: '#393f81', textDecoration: 'none' }}>
//                             Register here
//                           </a>
//                         </p>
//                       </Link>
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

// export default Login;

const Login = (props) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://project-planner-server2.onrender.com/login', {
        email,
        password,
      })
      .then((response)=>{
        console.log(response.data.id,response.data._id)
            props.getState(response.data._id)
        if(response.status===200){
          console.log(response.data.id,response.data._id)
            props.getState(response.data._id)
        }
        else{
          Promise.reject();
        }
      }).catch((err)=>{})

      // console.log(response.data); // Handle the response as needed

      // Redirect to the Kanban page on successful login
      navigate('/kanban');
    } catch (error) {
      if (!error?.response) {
        alert('No Server Response');
      } else if (error.response?.status === 401) {
        alert('Invalid credentials');
      } else {
        alert('Login Failed');
      }
      console.error('Error:', error.response.data); // Log the error for debugging
    }
  };  
  useEffect(()=>{
    props.getState(null);
  })
  return (
    <section className="vh" style={{ background: 'linear-gradient(to right, #c2eaba, #c5f4e0, #efc2cf)' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0" style={{ background: 'linear-gradient(to right, #c2eaba, #c5f4e0, #efc2cf)', borderRadius: '1rem' }}>
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
                        Sign in to your account
                      </h4>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                        required
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          style={{ width: '100%', boxShadow: '0px 0px 0px 2px grey' }}
                        >
                          Login
                        </button>
                      </div>
                      <a className="small text-muted text-decoration-none" href="#!">
                        Forgot password?
                      </a>
                      <Link to="/signup">
                        <p className="mb-5 pb-lg-2 text-decoration-none" style={{ color: '#393f81', textDecoration: 'none' }}>
                          Don't have an account?{' '}
                          <a href="#!" className="text-decoration-none" style={{ color: '#393f81', textDecoration: 'none' }}>
                            Register here
                          </a>
                        </p>
                      </Link>
                      <a href="#!" className="small text-muted text-decoration-none">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted text-decoration-none">
                        Privacy policy
                      </a>
                    </form>
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

export default Login;
