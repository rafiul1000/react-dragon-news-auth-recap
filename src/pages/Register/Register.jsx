import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
        console.log(form.get('password'));
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h2 className="text-3xl my-10 text-center">Register your account</h2>

                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                <label className="label">
                <span className="label-text">Your Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photo" placeholder="Enter your photo URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                <span className="label-text">Email address</span>
                </label>
                <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter your password" name="password" className="input input-bordered" required />
                <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
                </form>
                <p className="text-center font-semibold mt-7">Already have an account? <Link className="text-[#F75B5F]" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;