import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import { useNavigate  , Link} from 'react-router-dom';
import { TiHome } from "react-icons/ti";




const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    setIsLoggedIn(true);
    toast.success('Account Created');
    const accountData = {
      ...formData,
    };

    console.log('Printing Final account data:');
    console.log(accountData);

    navigate('/product');
  }




  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundImage: 'url("/food_signup.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Navbar */}
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

  
      {/* Main Content */}
      <div className="flex items-center justify-center flex-grow">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg bg-opacity-75">

        {/* Signup Form */}
        <form onSubmit={submitHandler} className="space-y-4">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">First Name</label>
              <input
                required
                type="text"
                name="firstName"
                onChange={changeHandler}
                placeholder="Enter First Name"
                value={formData.firstName}
                className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Last Name</label>
              <input
                required
                type="text"
                name="lastName"
                onChange={changeHandler}
                placeholder="Enter Last Name"
                value={formData.lastName}
                className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

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

          {/* Create Password and Confirm Password */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm text-gray-700 mb-1">Create Password</label>
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
            <div className="relative">
              <label className="block text-sm text-gray-700 mb-1">Confirm Password</label>
              <input
                required
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                className="w-full bg-gray-200 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-full transition duration-300 hover:bg-white hover:text-blue-500 border border-blue-500"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignupForm;