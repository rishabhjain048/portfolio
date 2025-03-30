import sponsify from "../../assets/sponsify.webp";
import fancy from "../../assets/fancy.webp";
import academic from "../../assets/academic.webp";

export default function Project() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {[ 
          { img: sponsify, title: "Sponsify", desc: "A website which can directly provide sponsor and the creator." },
          { img: fancy, title: "Fancy Jewellers", desc: "Create the android app for jewellers who want to display live gold rate for their customer." },
          { img: academic, title: "Academic 3", desc: "Course selling website where we can sell the project." },
          { img: academic, title: "Dathub Technologies", desc: "Dathub technologies is a startup where we take the business online." }
        ].map((card, index) => (
          <div key={index} className="w-full sm:w-80 bg-white shadow-lg rounded-2xl overflow-hidden border-2 border-indigo-500 transform transition-all hover:scale-105 flex flex-col">
            <img className="w-full h-40 object-cover" src={card.img} alt={card.title} />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg md:text-xl font-bold text-indigo-700">{card.title}</h2>
              <p className="text-gray-600 mt-2 text-sm md:text-base flex-grow">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}