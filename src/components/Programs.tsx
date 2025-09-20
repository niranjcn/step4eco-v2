import React, { useState } from 'react';
import { Leaf, Shield, Home, X, Thermometer } from 'lucide-react';

const programDetails = {
  'SOLAR PANEL SYSTEMS': {
    title: 'Solar Panel Systems',
    description: 'Harness clean, renewable energy with our advanced solar panel systems. Utilizing cutting-edge photovoltaic technology, these systems maximize energy absorption even during cloudy conditions. By installing our solar panels, you reduce your dependence on conventional energy grids, lower electricity bills, and contribute positively to the environment.',
    benefits: [
      'Lower electricity costs through self-generated power.',
      'Durable systems with over 25 years lifespan.',
      'Increase property value and energy independence.',
      'Support sustainability and reduce carbon footprint.',
      'Integration with smart energy management solutions.'
    ]
  },
  'ROOF INSULATION': {
    title: 'Roof Insulation',
    description: 'Our roof insulation solutions create an effective barrier that minimizes heat transfer through your roof. This helps keep your home warm during winters and cool during summers, improving comfort and reducing energy consumption. The materials used are eco-friendly and designed for longevity.',
    benefits: [
      'Stabilizes indoor temperatures for year-round comfort.',
      'Reduces energy bills by enhancing heating and cooling efficiency.',
      'Protects your roof from thermal wear and extends its life.',
      'Noise dampening benefits for a quieter home environment.',
      'Environmentally friendly, safe for your family and pets.'
    ]
  },
  'WALL INSULATION': {
    title: 'Wall Insulation',
    description: 'Wall insulation enhances your home’s thermal and acoustic performance. Using advanced eco-friendly materials, it reduces heat loss and noise penetration, creating a more energy-efficient and peaceful living space. Suitable for both new constructions and renovations.',
    benefits: [
      'Maintains stable indoor temperatures all year.',
      'Lowers HVAC energy consumption and related costs.',
      'Improves soundproofing from outside disturbances.',
      'Prevents drafts and moisture for healthier air quality.',
      'Easy installation for new and existing walls.'
    ]
  },
  'HEAT PUMPS': {
    title: 'Heat Pumps',
    description: 'Our high-efficiency heat pumps provide both heating and cooling by transferring heat instead of generating it. This technology significantly reduces your energy usage and emissions while maintaining comfortable indoor temperatures all year round.',
    benefits: [
      'Efficient heating in winter and cooling in summer.',
      'Lower energy consumption compared to traditional HVAC.',
      'Reduces environmental impact through fewer emissions.',
      'Compatible with renewable energy sources like solar.',
      'Quiet operation with smart, easy-to-use controls.'
    ]
  }
};


const Programs: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isClosing, setIsClosing] = useState(false);

  const programs = [
    {
      icon: <Leaf className="w-12 h-12 text-white" />,
      title: 'SOLAR PANEL SYSTEMS',
      description: 'We provide expert installation of solar panel systems that harness renewable energy and reduce carbon footprints.',
      color: 'bg-green-600',
      image: 'https://images.pexels.com/photos/356070/pexels-photo-356070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Shield className="w-12 h-12 text-white" />,
      title: 'WALL INSULATION',
      description: 'Enhance indoor comfort and cut energy bills with expert wall insulation installation – improving temperature stability all year round.',
      color: 'bg-blue-600',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Thermometer className="w-12 h-12 text-white" />,
      title: 'HEAT PUMPS',
      description: 'We provide expert installation of heat pump systems that efficiently heat and cool your home using renewable energy.',
      color: 'bg-yellow-500',
      image: 'https://images.pexels.com/photos/8136340/pexels-photo-8136340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      icon: <Home className="w-12 h-12 text-white" />,
      title: 'ROOF INSULATION',
      description: 'Roof insulation prevents heat loss from above, keeping your home warmer in winter and cooler in summer. It boosts energy efficiency, reduces bills, and enhances year-round comfort.',
      color: 'bg-purple-600',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const openModal = (programTitle: string) => {
    const programData = programs.find(p => p.title === programTitle);
    setSelectedProgram(programData);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProgram(null);
      setIsClosing(false);
    }, 300); // Animation duration
  };

  const details = selectedProgram ? programDetails[selectedProgram.title as keyof typeof programDetails] : null;

  return (
    <>
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
                  <button
                    onClick={() => openModal(program.title)}
                    className="inline-block text-white font-medium border-b-2 border-white pb-1 hover:border-green-400 hover:text-green-400 transition-colors duration-300 w-fit"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>

      {selectedProgram && details && (
        <div 
          className={`fixed inset-0 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
          onClick={closeModal}
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
          <div 
            className={`bg-white rounded-2xl shadow-2xl max-w-2xl w-full relative transition-all duration-300 ${isClosing ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between pb-4 border-b border-gray-200 mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`${selectedProgram.color} p-3 rounded-full flex items-center justify-center`}>
                    {React.cloneElement(selectedProgram.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{details.title}</h2>
                </div>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-800 transition-colors p-1 rounded-full hover:bg-gray-100">
                  <X className="w-7 h-7" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto pr-4 -mr-4">
                <p className="text-gray-600 mb-6 text-base leading-relaxed">{details.description}</p>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits:</h3>
                  <ul className="space-y-3">
                    {details.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start p-2 rounded-lg hover:bg-green-50/50">
                        <span className="text-green-500 mr-3 mt-1">🌿</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Programs;

