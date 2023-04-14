import Layout from '../components/Layout/Layout'
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FaSpinner } from "react-icons/fa";

const Login = () => {

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Layout>
                <div className='md:my-40 my-20 pt-2 rounded-lg text-center border mx-auto md:w-[40%] flex flex-col items-center text-black'>
                    <h1 className='text-[30px]'>LogIn</h1>
                    <form
                        className="flex flex-col justify-center space-y-5 md:w-[80%] w-full rounded-lg p-7"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col">
                            <label>
                                Email:
                                <span className="text-red-500 font-bold">
                                    *
                                </span>
                            </label>
                            <input
                                type="email"
                                className="border rounded px-4 py-2"
                                placeholder="Enter your email"
                                name="email"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>
                                Password:
                                <span className="text-red-500 font-bold">
                                    *
                                </span>
                            </label>
                            <input
                                type="password"
                                className="border rounded px-4 py-2"
                                placeholder="Enter your password"
                                name="password"
                                // value={pass}
                                // onChange={(e) => setPass(e.target.value)}
                                required
                            />
                            <span className="text-sm my-2 text-blue-800 cursor-pointer"
                            // onClick={() => router.push('/forgot_password')}
                            >
                                Forgot password?
                            </span>
                            <p className='mb-10'>Don&apos;t have an account? <span className=' text-blue-800 cursor-pointer' onClick={() => router.push('/signup')}>SignUp</span></p>
                        </div>
                        <div className="flex flex-col">

                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="text-center px-2 md:px-0 py-1 md:w-[40%] w-[60%] bg-[#231F20] text-[#ebebeb] rounded-lg shadow hover:cursor-pointer hover:bg-[#3c3a3b] hover:text-[#FAB038]"
                            // onClick={}
                            >
                                <span>Login</span>
                            </button>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Login;