function login() {
    return(
        <>
            <div
                className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-100 dark:bg-slate-900">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 dark:bg-slate-800">
                        <div className="text-center">
                            <img
                                alt="Your Company"
                                src=""
                                className="mx-auto h-10 w-auto"
                            />
                            <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Sign in to your account
                            </h2>
                        </div>

                        <form action="#" method="POST" className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="email"
                                       className="block text-sm font-medium text-gray-900 dark:text-white">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-500 hover:text-indigo-400">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="current-password"
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                            <div className="mt-6 flex items-center justify-center">
                                <div className="text-sm">
                                    <p className="dark:text-white">
                                        Don't have an account?
                                        <a href="/signup"
                                           className="font-semibold text-indigo-500 hover:text-indigo-400">
                                            Sign up
                                        </a>
                                    </p>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login;