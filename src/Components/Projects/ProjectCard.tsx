import sponsify from "../../assets/sponsify.webp";
import fancy from "../../assets/fancy.webp";
import academic from "../../assets/academic.webp";

export default function CardPage() {
  return (
    <div className="w-full h-full flex flex-wrap items-center justify-center p-4">
      {[ 
        { img: sponsify, title: "Sponsify", desc: "A website which can directly provide sponsor and the creator." },
        { img: fancy, title: "Fancy Jewellers", desc: "Create the android app for jewellers who want to display live gold rate for their customer." },
        { img: academic, title: "Academic 3", desc: "Course selling website where we can sell the project." },
        { img: academic, title: "Dathub Technologies", desc: "Dathub technologies is a startup. where we take the business online" }
      ].map((card, index) => (
        <div key={index} className="w-64 h-80 bg-white shadow-2xl rounded-2xl overflow-hidden border-4 border-indigo-500 m-4 flex flex-col">
          <img className="w-full h-40 object-cover" src={card.img} alt={card.title} />
          <div className="p-4 flex-grow flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-indigo-700">{card.title}</h2>
            <p className="text-gray-700 mt-2 text-sm">{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
