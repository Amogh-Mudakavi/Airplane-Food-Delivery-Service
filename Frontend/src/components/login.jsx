import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4001/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Response:', data); // Log the response

      if (response.ok) {
        setIsLoggedIn(true);
        toast.success('Logged in successfully!');
        navigate('/product');
      } else {
        toast.error(data.message || 'Error logging in');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while logging in');
    }
  }

  const hideNavbar = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundImage: 'url("/food_signup.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {!hideNavbar && (
        <nav className="py-4 px-8 flex justify-end">
          <Link to="/">
            <div className="flex items-center">
              <span className="text-2xl" style={{ color: 'white' }}>
                <TiHome />
              </span>
            </div>
          </Link>
        </nav>
      )}

      <div className="flex items-center justify-center flex-grow">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg bg-opacity-75">
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email Address</label>
              <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter Email Address"
                value={formData.email}
                className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="relative">
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                required
                type={showPassword ? 'text' : 'password'}
                name="password"
                onChange={changeHandler}
                placeholder="Enter Password"
                value={formData.password}
                className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-full transition duration-300 hover:bg-white hover:text-blue-500 border border-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
