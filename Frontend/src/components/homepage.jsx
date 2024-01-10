import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/signupform';
import {LoginForm} from '../components/login' // Import your SignupForm component

const HomePage = () => {
  return (
    <div className="flex h-screen">
      {/* Empty Section (50%) */}
      <div className="w-2/3 h-screen bg-gray-200 flex flex-col items-center justify-center">
        {/* Content within the empty section */}
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Airplane Food Delivery!</h1>
          <p className="text-lg mb-6">Order your favorite meals and enjoy them during your flight.</p>

          {/* Login and Signup buttons */}
          <div className="flex justify-center">
            <Link to = "/login">
            <button className="bg-black text-white py-2 px-4 rounded-full transition duration-300 hover:bg-white hover:text-black">
              Login
            </button>
            </Link>
            
            <Link to="/signup">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full ml-4">
                Signup
              </button>
            </Link>
          </div>

          {/* Add more content as needed */}
        </div>
      </div>

      {/* Image Section (50%) */}
      <div
        className="w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url("/image_food.jpg")' }}
      ></div>
    </div>
  );
};

export default HomePage;
