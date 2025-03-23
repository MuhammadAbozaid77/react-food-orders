import { Link } from "react-router-dom";

//
export default function PageNotFound() {
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-900 h-[100vh] flex justify-center items-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600 dark:text-gray-500">
              404
            </h1>
            <p className="text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's Missing.
            </p>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </p>
            <Link
              to="/"
              className="duration-150 border inline-flex text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-gray-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
