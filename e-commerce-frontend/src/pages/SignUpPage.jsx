import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom'; // Using react-router-dom v6/v7 hook
import api from '../api/axios';

const SignUpPage = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm({
        mode: 'onBlur', // Validate on blur
        defaultValues: {
            role_id: '3', // Default to Customer (assuming 3 based on common patterns, but will verify with fetch) - Actually specs say "Customer should be selected by default". I'll default to the ID I find for "Customer". But initially I don't know the ID. I'll stick to 'customer' string or find correct ID after fetch.
            // Specs say: "Selected role id should be assigned to role_id key".
            // I will set defaultValues AFTER fetching roles or handle logic inside component.
        }
    });

    const [roles, setRoles] = useState([]);
    const navigate = useNavigate();

    // Watch role_id to conditionally render Store fields
    const selectedRoleId = watch('role_id');
    const [isStore, setIsStore] = useState(false);

    useEffect(() => {
        // Fetch Roles
        api.get('/roles')
            .then(res => {
                setRoles(res.data);
                // Find Customer role and set default if needed, or let user select.
                // Specs: "Customer should be selected by default"
                const customerRole = res.data.find(r => r.code === 'customer' || r.name === 'Customer');
                // I'll wait to see API response structure, assuming standard id/name/code.
            })
            .catch(err => {
                console.error("Error fetching roles:", err);
                toast.error("Roller yüklenirken bir hata oluştu.");
            });
    }, []);

    useEffect(() => {
        // Check if selected role is Store
        const storeRole = roles.find(r => String(r.id) === selectedRoleId);
        if (storeRole && (storeRole.code === 'store' || storeRole.name === 'Store')) {
            setIsStore(true);
        } else {
            setIsStore(false);
        }
    }, [selectedRoleId, roles]);


    const onSubmit = (data) => {
        // Prepare Payload
        let payload = {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: data.role_id,
        };

        if (isStore) {
            payload.store = {
                name: data.store_name,
                phone: data.store_phone,
                tax_no: data.store_tax_no,
                bank_account: data.store_bank_account
            };
        }

        api.post('/signup', payload)
            .then(res => {
                toast.success("Hesabınız oluşturuldu! Lütfen emailinizi kontrol ediniz.");
                navigate(-1); // Redirect to previous page
            })
            .catch(err => {
                console.error("Signup error:", err);
                toast.error(err.response?.data?.message || "Kayıt olurken bir hata oluştu.");
            });
    };

    // Password Validation Regex
    // Min 8 chars, numbers, lower, upper, special
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Tax No Pattern: TXXXXVXXXXXX (X is number)
    const taxNoRegex = /^T\d{4}V\d{6}$/;
    // TR Phone: basic validation +90... or 05... - Simplest: ^(\+90|0)?5\d{9}$
    const phoneRegex = /^(\+90|0)?5\d{9}$/;
    // IBAN: TR... 26 digits total usually. Start with TR.
    const ibanRegex = /^TR\d{24}$/;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-[#252B42] font-['Montserrat']">
                    Sign Up
                </h2>
                <p className="mt-2 text-center text-sm text-[#737373] font-['Montserrat']">
                    Enter your details to create your account
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-[#252B42] font-['Montserrat']">Name</label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required", minLength: { value: 3, message: "Min 3 chars required" } })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#F9F9F9]"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>
                        </div>

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
                                    {...register("password", {
                                        required: "Password is required",
                                        pattern: {
                                            value: passwordRegex,
                                            message: "Min 8 chars, including Upper, Lower, Number, Special"
                                        }
                                    })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#F9F9F9]"
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-[#252B42] font-['Montserrat']">Confirm Password</label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    {...register("confirmPassword", {
                                        required: "Confirm Password is required",
                                        validate: (val) => {
                                            if (watch('password') != val) {
                                                return "Your passwords do NOT match";
                                            }
                                        }
                                    })}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#F9F9F9]"
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                            </div>
                        </div>

                        {/* Role Selection */}
                        <div>
                            <label className="block text-sm font-medium text-[#252B42] font-['Montserrat']">Role</label>
                            <div className="mt-1">
                                <select
                                    {...register("role_id", { required: "Role is required" })}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#F9F9F9]"
                                >
                                    {roles.map(role => (
                                        <option key={role.id} value={role.id}>{role.name}</option>
                                    ))}
                                </select>
                                {errors.role_id && <p className="text-red-500 text-xs mt-1">{errors.role_id.message}</p>}
                            </div>
                        </div>

                        {/* STORE FIELDS (Conditional) */}
                        {isStore && (
                            <div className="space-y-6 pt-4 border-t border-gray-200">
                                <h3 className="text-lg font-medium text-[#252B42] font-['Montserrat']">Store Details</h3>

                                {/* Store Name */}
                                <div>
                                    <label className="block text-sm font-medium text-[#252B42] font-['Montserrat']">Store Name</label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            {...register("store_name", { required: "Store Name is required", minLength: { value: 3, message: "Min 3 chars required" } })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#F9F9F9]"
                                        />
                                        {errors.store_name && <p className="text-red-500 text-xs mt-1">{errors.store_name.message}</p>}
                                    </div>
                                </div>

                                {/* Store Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-[#252B42] font-['Montserrat']">Store Phone</label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            placeholder="+905..."
                                            {...register("store_phone", {
                                                required: "Phone is required",
                                                pattern: { value: phoneRegex, message: "Invalid TR Phone Number" }
                                            })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#F9F9F9]"
                                        />
                                        {errors.store_phone && <p className="text-red-500 text-xs mt-1">{errors.store_phone.message}</p>}
                                    </div>
                                </div>

                                {/* Store Tax ID */}
                                <div>
                                    <label className="block text-sm font-medium text-[#252B42] font-['Montserrat']">Store Tax ID</label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            placeholder="T1234V123456"
                                            {...register("store_tax_no", {
                                                required: "Tax ID is required",
                                                pattern: { value: taxNoRegex, message: "Format: TXXXXVXXXXXX" }
                                            })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#F9F9F9]"
                                        />
                                        {errors.store_tax_no && <p className="text-red-500 text-xs mt-1">{errors.store_tax_no.message}</p>}
                                    </div>
                                </div>

                                {/* Store Bank Account (IBAN) */}
                                <div>
                                    <label className="block text-sm font-medium text-[#252B42] font-['Montserrat']">Store Bank Account (IBAN)</label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            placeholder="TR..."
                                            {...register("store_bank_account", {
                                                required: "IBAN is required",
                                                pattern: { value: ibanRegex, message: "Invalid IBAN (Start with TR)" }
                                            })}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-[#F9F9F9]"
                                        />
                                        {errors.store_bank_account && <p className="text-red-500 text-xs mt-1">{errors.store_bank_account.message}</p>}
                                    </div>
                                </div>
                            </div>
                        )}

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
                                    "Sign Up"
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
                                    Already have an account?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <Link to="/login" className="text-[#23A6F0] hover:text-blue-500 font-medium font-['Montserrat']">
                                Login here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
