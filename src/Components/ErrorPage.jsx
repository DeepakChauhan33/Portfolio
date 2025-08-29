import React from 'react'
import error from '../assets/error_page.png';

const ErrorPage = () => {
    return (
        <>

            <main className='h-4/5 lg:h-screen p-4 flex flex-col items-center justify-around  lg:bg-gradient-to-r from-slate-300 via-gray-300 to-stone-300'>



                <div className="w-full max-w-md mb-6">
                    <img
                        src={error}
                        alt="Error illustration"
                        className="w-full h-auto rounded-lg "
                    />
                </div>



                <div className="flex flex-col items-center text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold text-red-600 mb-4">
                        ERROR :: 404
                    </h1>
                    <p className="text-sm md:text-lg lg:text-2xl text-gray-800 mb-6">
                        Sorry, the page you’re looking for doesn’t exist.
                    </p>
                    <a
                        href="/"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition  !no-underline"
                    >
                        Go Back Home
                    </a>
                </div>
            </main>

        </>
    )
}

export default ErrorPage
