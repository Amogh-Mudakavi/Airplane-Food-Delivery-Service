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

  function submitHandler(event) {
    event.preventDefault();

    // Get stored user data (replace this with your actual data)
    const storedUsers = [
      {
        email: 'user1@example.com',
        password: 'password1',
      },
      {
        email: 'user2@example.com',
        password: 'password2',
      },

    ];

    // Check if the entered credentials match any stored user
    const foundUser = storedUsers.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (foundUser) {
      setIsLoggedIn(true);
      toast.success('Logged in successfully!');
      navigate('/product');
    } else {
      toast.error('Invalid email or password');
    }
  }

  // Hide navbar on the login page
  const hideNavbar = location.pathname === '/login';

 
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundImage: 'url("/food_signup.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Navbar (conditionally rendered) */}
      {!hideNavbar && (
        <nav className="py-4 px-8 flex justify-end">
          <Link to="/">
            <div className="flex items-center">
              {/* Icon (IoHomeOutline) is inside the div */}
              <span className="text-2xl" style={{ color: 'white' }}>
                <TiHome />
              </span>
            </div>
          </Link>
        </nav>
      )}

      {/* Main Content */}
      <div className="flex items-center justify-center flex-grow">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg bg-opacity-75">
          {/* Login Form */}
          <form onSubmit={submitHandler} className="space-y-4">
            {/* Email Address */}
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

            {/* Password */}
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

            {/* Submit Button */}
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

export default LoginForm
