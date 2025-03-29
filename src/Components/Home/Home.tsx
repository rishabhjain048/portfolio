
import myimg from "../../assets/myimg.png";

const Home = () => {
  return (
    <div
      id="About"
      className="text-gray-900 flex flex-col md:flex-row items-center justify-between w-screen h-[70vh] p-6 md:p-16 bg-white"
    >
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-xl md:text-4xl font-medium tracking-tight text-gray-900">
          Hi,<br /> I'm<br />
          <span className="font-bold text-blue-600">Rishabh Jain</span><br />
          A passionate Java & React developer.
        </p>
        <button className="mt-6 md:mt-10 text-white py-3 px-6 text-lg md:text-2xl md:py-4 md:px-8 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-blue-600">
          <a href="/Contact">Contact Me</a>
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img
          className="w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-xl shadow-lg"
          src={myimg}
          alt="About"
        />
      </div>
    </div>
  );
};

export default Home;
