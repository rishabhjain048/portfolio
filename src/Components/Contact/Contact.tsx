const Contact = () => {
  return (
    <div
      className="min-h-[50vh] h-auto flex opacity0 items-center justify-center bg-cover bg-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/db8s5neff/image/upload/v1743322207/cont_iblmnr.avif')", 
      }}
    >
      <div className="p-6 sm:p-8 md:p-10 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full bg-white bg-opacity-95 rounded-3xl shadow-2xl text-center backdrop-blur-lg border border-gray-200 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-blue-600 mb-4">Contact Me</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 text-center w-11/12 sm:w-10/12">
          Email:
          <a
            href="mailto:rishabhjain88712@gmail.com"
            className="text-blue-600 font-medium hover:text-blue-800 transition duration-300 ml-1"
            target="_blank" rel="noopener noreferrer"
          >
            rishabhjain88712@gmail.com
          </a>
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 text-center w-11/12 sm:w-10/12">
          Phone:
          <a
            href="tel:+918871266742"
            className="text-blue-600 font-medium hover:text-blue-800 transition duration-300 ml-1"
          >
            +91 88712 66742
          </a>
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 italic">Feel free to connect.</p>
      </div>
    </div>
  );
};

export default Contact;