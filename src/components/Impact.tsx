import React, { useState, useEffect } from 'react';

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const Stat: React.FC<StatProps> = ({ value, label, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(value * progress);
      
      setCount(currentCount);
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [value]);
  
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const Impact: React.FC = () => {
  const stats = [
    { value: 50000, label: 'Trees Planted', suffix: '+' },
    { value: 120, label: 'Communities Engaged', suffix: '+' },
    { value: 1500, label: 'Volunteers Worldwide', suffix: '+' },
    { value: 25, label: 'Tons of Waste Recycled', suffix: 'K+' }
  ];
  
  const achievements = [
    {
      year: '2020',
      title: 'Community Reforestation',
      description: 'Planted 10,000 native trees across 5 degraded ecosystems.'
    },
    {
      year: '2021',
      title: 'Clean Water Access',
      description: 'Provided clean water solutions to 15 communities facing water scarcity.'
    },
    {
      year: '2022',
      title: 'Renewable Energy Initiative',
      description: 'Installed solar panels in 30 schools, reducing carbon emissions by 500 tons.'
    },
    {
      year: '2023',
      title: 'Zero Waste Program',
      description: 'Implemented comprehensive recycling programs in 25 communities.'
    },
    {
      year: '2024',
      title: 'Biodiversity Conservation',
      description: 'Protected 1,000 hectares of critical wildlife habitat from development.'
    }
  ];
  
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Through collective action and dedicated efforts, we've made significant 
            strides in environmental conservation and sustainability. Here's the impact 
            we've created together.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Stat 
              key={index} 
              value={stat.value} 
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          ))}
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>
          
          {achievements.map((achievement, index) => (
            <div key={index} className="relative mb-12 md:mb-24 md:flex">
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 md:ml-auto'}`}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-600">
                  <div className="text-green-600 font-bold mb-2">{achievement.year}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
              
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 rounded-full border-4 border-white hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;