import React from 'react';
import { Leaf, Wind, Recycle, Shield , Home } from 'lucide-react';
import { FaLeaf, FaThermometerHalf, FaHome, FaMoneyBillWave } from "react-icons/fa";
import solar from '../assets/solar.webp';
import insulation from '../assets/insulation.webp';
import roof from '../assets/insulation-1.webp'; 
import pumps from '../assets/heatpump.webp';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: <Leaf className="w-12 h-12 text-white" />,
      title: 'SOLAR PANEL SYSTEMS',
      description: 'We provide expert installation of solar panel systems that harness renewable energy and reduce carbon footprints.',
      color: 'bg-green-600',
      image: solar
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: 'WALL INSULATION',
      description: 'Enhance indoor comfort and cut energy bills with expert wall insulation installation – improving temperature stability all year round.',
      color: 'bg-blue-600',
      image: insulation
    },
    {
      icon: <FaThermometerHalf className="w-12 h-12 text-white" />,
      title: 'HEAT PUMPS',
      description: 'We provide expert installation of heat pump systems that efficiently heat and cool your home using renewable energy.',
      color: 'bg-yellow-500',
      image: pumps
    },
    {
      icon: <Home className="w-12 h-12 text-white" />,
      title: 'ROOF INSULATION',
      description: 'Roof insulation prevents heat loss from above, keeping your home warmer in winter and cooler in summer. It boosts energy efficiency, reduces bills, and enhances year-round comfort.',
      color: 'bg-purple-600',
      image: roof
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Through our diverse range of programs, we address critical environmental challenges 
            and create sustainable solutions that benefit both people and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className={`${program.color} p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-gray-200 mb-6">{program.description}</p>
                <a 
                  href="#learn-more" 
                  className="inline-block text-white font-medium border-b-2 border-white pb-1 hover:border-green-400 hover:text-green-400 transition-colors duration-300 w-fit"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#join" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;