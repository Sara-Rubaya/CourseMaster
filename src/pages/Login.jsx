import { use } from 'react'

import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../Context/AuthContext'
import Lottie from 'lottie-react'


const Login = () => {
  const { signIn, googleSignIn  } = use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const handleSignIn = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    // firebase sign in send
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1500,
        })
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(err => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Try Again',
          showConfirmButton: false,
          timer: 1500,
        })
      })
  }

  const handleGoogleLogin = () =>{
      googleSignIn()
      .then(result =>{
        console.log(result.user)
        alert("Logged In with Google");
        navigate('/');
      })
      .catch(error =>{
        console.log(error)
      })
    }

  return (

   <div className='flex  gap-8  items-center justify-center h-2/3 my-18 '>
     

    <div className='card w-full max-w-sm shadow-2xl bg-base-100 mt-6'>
        
    
        
      <div className='card-body'>
        <h1 className='text-5xl text-center font-bold'>Sign In now!</h1>
        <form onSubmit={handleSignIn} className='fieldset'>
          <label className='label'>Email</label>
          <input
            type='email'
            name='email'
            className='input'
            placeholder='Email'
          />
          <label className='label'>Password</label>
          <input
            type='password'
            name='password'
            className='input'
            placeholder='Password'
          />
          <div className='flex gap-18'>
            <p>New to this site? <Link className='text-green-600 underline' to="/register" >Register</Link></p>
            <a className='link link-hover'>Forgot password?</a>
             
          </div>
          <button className='btn btn-neutral mt-4'>Sign in</button>

         
        </form>
         {/* Google */}
<button  onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
      </div>
    </div>
   </div>
  )
}

export default Login;
