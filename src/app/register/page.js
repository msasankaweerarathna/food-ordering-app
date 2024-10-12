export default function RegisterPage() {
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>

      <form className="block max-w-xs mx-auto ">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />

        <button
          type="submit"
          className="w-full bg-primary text-white rounded-full px-8 py-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-primary-dark hover:shadow-lg"
        >
          Register
        </button>

        <div className="text-center mt-3">
          <p className="text-gray-500 mb-1.5">Or login with</p>

          <div className="flex flex-col gap-1.5">
            <button className="w-full bg-blue-600 text-white rounded-full px-8 py-2 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg">
              <img
                src="/facebook-icon.png"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              Continue with Facebook
            </button>

            <button className="w-full bg-blue-400 text-white rounded-full px-8 py-2 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500 hover:shadow-lg">
              <img
                src="/twitter-icon.png"
                alt="Twitter"
                className="w-5 h-5 mr-2"
              />
              Continue with Twitter
            </button>

            <button className="w-full bg-red-500 text-white rounded-full px-8 py-2 flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-red-600 hover:shadow-lg">
              <img src="/google.png" alt="Google" className="w-5 h-5 mr-2" />
              Continue with Google
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
