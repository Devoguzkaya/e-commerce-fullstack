import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/slices/clientSlice';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        // Prepare Credentials
        const credentials = {
            email: data.email,
            password: data.password
        };

        // Dispatch Thunk
        dispatch(loginUser(credentials))
            .unwrap()
            .then((res) => {
                toast.success("Welcome back! Login successful.");

                // Handle Remember Me - Save Token if checked
                if (data.rememberMe && res.token) {
                    localStorage.setItem("token", res.token);
                } else if (!data.rememberMe) {
                    // Optional: Clear token if user explicitly unchecks? 
                    // Usually we don't clear unless logout, but "Remember Me" implies persistence across sessions.
                    // If not checked, maybe Session Storage or just Redux state (which is lost on refresh).
                    // Task says: "save token to localStorage if remember me is checked!".
                    // Implies if NOT checked, DO NOT save to localStorage.
                    // So we do nothing (store in Redux is enough for current session).
                }

                navigate(-1); // Redirect to previous page (or Home if history is empty/same)
            })
            .catch((err) => {
                console.error("Login error:", err);
                toast.error(err?.message || "Login failed. Please check your credentials.");
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-[#252B42] font-['Montserrat']">
                    Login
                </h2>
                <p className="mt-2 text-center text-sm text-[#737373] font-['Montserrat']">
                    Welcome back! Please login to your account.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-[#252B42] font-['Montserrat']">Email</label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                    })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#F9F9F9]"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-[#252B42] font-['Montserrat']">Password</label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    {...register("password", { required: "Password is required" })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#F9F9F9]"
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    type="checkbox"
                                    {...register("rememberMe")}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-[#737373] font-['Montserrat']">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-[#23A6F0] hover:text-blue-500 font-['Montserrat']">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#23A6F0] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    "Login"
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500 font-['Montserrat']">
                                    Don't have an account?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <Link to="/signup" className="text-[#23A6F0] hover:text-blue-500 font-medium font-['Montserrat']">
                                Register now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
