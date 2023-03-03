import Navbar from '../components/navbar';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FaSpinner } from "react-icons/fa";

const Signup = () => {
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

    const router = useRouter()

    const [cPassClass, setCPassClass] = useState("form-control");
    const [pass, setPass] = useState("");
    const [cPass, setCPass] = useState("");
    const [showErr, setShowErr] = useState(false);
    const [showErr2, setShowErr2] = useState(false);
    const [showErr3, setShowErr3] = useState(false);

    const handlePassword = (e) => {
        setPass(e.target.value);
        if (e.target.value.length < 6) setShowErr2(true);
        else setShowErr2(false);
        if (e.target.value == cPass) {
            setShowErr(false);
        } else {
            setShowErr(true);
        }
    };

    const handleCPass = (e) => {
        setCPass(e.target.value);
        if (e.target.value == pass) {
            setShowErr(false);
        } else {
            setShowErr(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="fixed top-0 w-full bg-[#3c3a3b] shadow-xl z-[999]">
                <Navbar />
            </div>
            <div className='my-40 pt-2 rounded-lg text-center border mx-auto md:w-[40%] flex flex-col items-center text-[#ebebeb]'>
                <h1 className='text-[30px]'>SIGN UP</h1>
                <form
                    className="flex flex-col justify-center space-y-5 md:w-[80%] w-full rounded-lg p-7"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <label>
                            Name:
                            <span className="text-red-500 font-bold">
                                *
                            </span>
                        </label>
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Enter your name"
                            name="name"
                            // value={name}
                            // onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                            value={pass}
                            onChange={handlePassword}
                            required
                        />
                    </div>
                    {showErr2 && (
                        <p className="text-red-500 text-xs">
                            Password must be at least 6 characters long
                        </p>
                    )}
                    <div className="flex flex-col">
                        <label>
                            Confirm Password:
                            <span className="text-red-500 font-bold">
                                *
                            </span>
                        </label>
                        <input
                            type="password"
                            className={
                                cPassClass + " border rounded px-4 py-2"
                            }
                            placeholder="Confirm your password"
                            name="confirmPassword"
                            value={cPass}
                            onChange={handleCPass}
                            disabled={showErr2}
                            required
                        />
                    </div>
                    {showErr && !showErr2 && (
                        <div className="text-red-500 text-xs">
                            Passwords do not match
                        </div>
                    )}
                    <div className="flex flex-col">
                        <label>
                            Phone Number:
                            <span className="text-red-500 font-bold">
                                *
                            </span>
                        </label>
                        <input
                            type="number"
                            className="border rounded px-4 py-2"
                            placeholder="Enter your phone number"
                            // value={phone}
                            onWheel={(e) => e.target.blur()}
                            // onChange={handleNumber}
                            required
                        />
                    </div>
                    {showErr3 && (
                        <div className="text-red-500 text-xs">
                            Phone number should be of 10 digits
                        </div>
                    )}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="py-1 px-7 text-white font-bold bg-[#FFBC00] rounded hover:text-[#FFBC00] hover:bg-[#ebebeb]"
                            disabled={showErr || showErr2}
                        >
                            <span>Sign Up</span>
                        </button>
                    </div>
                </form>
                <p className='mb-10'>Already have an account? <span className=' text-blue-800 cursor-pointer' onClick={() => router.push('/login')}>LogIn</span></p>
            </div>
        </>
    )
}

export default Signup;