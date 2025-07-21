"use client";

import Image from "next/image";
import ".//MeetTheTeamSection.css";

const team = [
  {
    name: "Bayzid",
    role: "AI Engineer",
    image: "/team1.jpg",
    quote: "Innovation drives intelligence.",
  },
  {
    name: "Sarah Smith",
    role: "Data Scientist",
    image: "/team2.jpg",
    quote: "Turning data into decisions.",
  },
  {
    name: "Alex Johnson",
    role: "Project Manager",
    image: "/team3.jpg",
    quote: "Bringing teams together for success.",
  },
  {
    name: "Emily Brown",
    role: "ML Specialist",
    image: "/team4.jpg",
    quote: "Shaping the future with machine learning.",
  },
];

const MeetTheTeamSection = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[450px] bg-gray-900 flex items-center justify-center">
        <Image
          src="/hero-bg.jpg"
          alt="Meet the Team Banner"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Meet The Team
          </h1>
          <p className="text-lg md:text-2xl text-gray-200">
            The Humans Behind the Intelligence
          </p>
        </div>
      </div>

      {/* Rotating/Flipping Cards */}
      <div className="py-12 px-4 md:px-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Our Team
        </h2>

        <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group relative w-[280px] h-[200px] flex-shrink-0 perspective"
            >
              <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-card">
                {/* Front Side */}
                <div className="absolute inset-0 bg-white border border-gray-300 rounded-lg shadow-md p-4 flex items-center space-x-4 backface-hidden">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4 flex items-center justify-center text-center rotate-y-180 backface-hidden">
                  <p className="text-sm text-gray-700 italic px-2">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Banner with CTA */}
      <div className="relative h-[280px] md:h-[380px] bg-gray-900 flex items-center justify-center mt-8">
        <Image
          src="/cta-bg.jpg"
          alt="AI Data Pipeline Banner"
          fill
          className="object-cover opacity-80"
        />
        <div className="relative text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 max-w-2xl mx-auto">
            Let Luciidai's In-House Experts Manage Your Entire AI Data Pipeline
          </h2>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeamSection;
