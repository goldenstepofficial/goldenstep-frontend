import Layout from '../components/Layout/Layout';

const Contact = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
                <div className="w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Contact Us
                        </h2>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 md:w-full w-[80%] mx-auto gap-8'>
                        <form className="mt-8 space-y-6 md:w-[90%]">
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                        placeholder="Message"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg
                                            className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 ."
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.7 4.7a1 1 0 00-1.4 1.4L9.586 12l-6.293 6.293a1 1 0 001.414 1.414l6.998-6.998a1 1 0 000-1.414L4.7 6.1a1 1 0 000-1.414z"
                                                fill="#fff"
                                            />
                                        </svg>
                                    </span>
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className='w-[70%] flex flex-col md:text-[24px]'>
                            <a href="mailto:hello@goldenstep.in">Mail us at: hello@goldenstep.in</a>
                            <a href="tel:+918700123285">Call us at: 8700123285</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;