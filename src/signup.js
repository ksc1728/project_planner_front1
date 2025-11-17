import 'bootstrap/dist/css/bootstrap.min.css';
import image from './businesspeople-meeting-office-working_23-2148908922.avif';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      await axios.post(
        'https://project-planner-server2.onrender.com/signup',
        { email, password }
      );

      alert("Signup successful! Please login.");
      navigate('/login');

    } catch (err) {
      if (!err.response) {
        alert("No server response");
      } else {
        alert(err.response.data.error || "Signup failed");
      }
    }
  };

  return (
    <section className="vh" style={{ backgroundColor: 'white' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-50">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0" style={{ background: 'linear-gradient(to right, #A9F1DF , #FFBBBB)', borderRadius: '1rem' }}>

                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={image}
                    alt="signup"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem', height: '100%', width: '100%' }}
                  />
                </div>

                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={handleSubmit}>
                      <h4 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Create your account
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

                      {/* Confirm Password */}
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          required
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label className="form-label">Confirm Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                          style={{ width: '100%' }}
                        >
                          Sign Up
                        </button>
                      </div>

                      <Link to="/login" className="small text-muted text-decoration-none">
                        Already have an account? Login
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

export default Signup;
