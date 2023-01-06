import Navbar2 from '../components/navbar2';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FaSpinner } from "react-icons/fa";

const Login = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor);
    }, []);

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="fixed top-0 w-full bg-white shadow-xl z-[999]">
                <Navbar2 />
            </div>
            <div className='my-40 text-center border mx-auto md:w-1/2 flex flex-col items-center'>
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
                    </div>
                    <div className="flex flex-col">

                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="py-1 px-7 text-white font-bold bg-[#FFBC00] border rounded hover:text-[#FFBC00] hover:bg-white"
                        // onClick={}
                        >
                            <span>Login</span>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;