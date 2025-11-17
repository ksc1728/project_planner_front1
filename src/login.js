import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './close-up-young-colleagues-having-meeting_23-2149060288.avif';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://project-planner-server2.onrender.com/login',
        { email, password }
      );

      // Save user ID
      props.getState(response.data.id);

      // Redirect
      navigate('/kanban');

    } catch (error) {
      if (!error.response) {
        alert("No server response");
      } else {
        alert(error.response.data.error || "Login failed");
      }
    }
  };

  // Clear parent state on load
  useEffect(() => {
    props.getState(null);
  }, []);

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
                    alt="login"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem', height: '100%', width: '100%' }}
                  />
                </div>

                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={handleSubmit}>
                      <h4 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Sign in to your account
                      </h4>

                      {/* Email */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label">Email address</label>
                      </div>

                      {/* Password */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit" style={{ width: '100%' }}>
                          Login
                        </button>
                      </div>

                      {/* Forgot password placeholder */}
                      <p
                        className="small text-muted"
                        style={{ cursor: 'pointer' }}
                        onClick={() => alert("Forgot password feature coming soon")}
                      >
                        Forgot password?
                      </p>

                      {/* Signup link */}
                      <Link to="/signup" className="text-decoration-none">
                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                          Don’t have an account? Register here
                        </p>
                      </Link>

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
;
