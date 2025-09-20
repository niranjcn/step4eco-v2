import React from 'react';
import { Users, Globe, Shield, Clock, Thermometer } from 'lucide-react';
import { FaLeaf, FaThermometerHalf, FaHome, FaMoneyBillWave } from "react-icons/fa";

const About: React.FC = () => {
  const values = [
    {
      icon: <Globe className="w-10 h-10 text-green-600" />,
      title: 'Renewable Energy',
      description: 'STEP4ECO specializes in Air Source Heat Pumps and Solar PV – renewable energy solutions that cut carbon, boost efficiency, and support your Net Zero goals. Government funding available.'
    },
    {
      icon: <FaThermometerHalf className="w-10 h-10 text-green-600" />,
      title: 'Heating Systems',
      description: 'We provide expert installation of modern heating systems that are energy-efficient and environmentally friendly.'
    },
    {
      icon: <Shield className="w-10 h-10 text-green-600" />,
      title: 'Insulation',
      description: 'Maximize energy efficiency with loft, wall, and roof insulation. Prevent heat loss, stay warm year-round, and enjoy expert installation for a more comfortable home.'
    },
    {
      icon: <FaMoneyBillWave className="w-10 h-10 text-green-600" />,
      title: 'Funding & Grants',
      description: 'We make eco-friendly upgrades affordable by guiding you through available funding and grants. Explore support from Home Energy Scotland and Business Energy Scotland.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Step4Eco</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Step4Eco is a global initiative dedicated to promoting environmental sustainability 
            through education, community action, and innovative solutions. Our mission is to 
            empower individuals and communities to take meaningful steps toward a greener future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-600"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4">
              At Step4Eco, we’re passionate about creating warmer, greener homes across North Wales. As a trusted provider under the UK Government’s ECO4 scheme, we work closely with registered and accredited installers to deliver high-quality energy efficiency improvements to households.
              <br/>
              <br/>
               Our goal is simple: to help families reduce their energy bills while cutting carbon emissions. Through the ECO4 scheme, eligible homeowners and tenants can access free or heavily subsidised upgrades, including insulation, heat pumps, solar panels, and other renewable technologies.
              <br/>
              <br/>
               We take care of the entire process—from checking your eligibility to matching you with trusted local installers and ensuring all work meets the highest standards of compliance and quality. With Step4Eco, taking action for a sustainable future has never been easier. Together, we’re making homes across North Wales warmer, greener, and more energy-efficient—one step at a time. 🌍✨
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/3738388/pexels-photo-3738388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team working on environmental project" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              style={{ minHeight: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;