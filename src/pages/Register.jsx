import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../Context/AuthContext';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;

    // Password validation rules
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpperCase) return alert("Password must contain at least one uppercase letter.");
    if (!hasLowerCase) return alert("Password must contain at least one lowercase letter.");
    if (!isLongEnough) return alert("Password must be at least 6 characters long.");

    createUser(email, password)
      .then(result => {
        const user = result.user;
        return updateProfile(user, { displayName: name, photoURL: photoURL });
      })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Registered Successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch(error => {
        console.log("Error:", error);
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100 mt-6">
        <h1 className="text-5xl mx-auto pt-5 font-bold text-center">Register now!</h1>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Name" />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input type="text" name='photo' className="input" placeholder="Photo URL" />
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            {/* Password */}
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div className="my-2">
              <p>
                <input type="checkbox" defaultChecked className="checkbox checkbox-xs" /> Remember me.
              </p>
            </div>
            <button className="btn btn-neutral mt-4 w-full">Register</button>
            <p className="mt-4 text-center">
              Already have an account? <Link className='text-green-600 underline' to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
