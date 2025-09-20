import React, { useState } from 'react';
import { Book, Video, Download, FileText } from 'lucide-react';

type ResourceCategory = 'all' | 'guides' | 'videos' | 'reports' | 'toolkits';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: Exclude<ResourceCategory, 'all'>;
  icon: JSX.Element;
  link: string;
}

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>('all');
  
  const resources: Resource[] = [
    {
      id: 1,
      title: 'Home Sustainability Guide',
      description: 'Learn practical steps to reduce your environmental footprint at home.',
      category: 'guides',
      icon: <Book className="w-6 h-6" />,
      link: '#guide-sustainable-home'
    },
    {
      id: 2,
      title: 'Climate Action Toolkit',
      description: 'A comprehensive toolkit for organizing community climate initiatives.',
      category: 'toolkits',
      icon: <Download className="w-6 h-6" />,
      link: '#toolkit-climate'
    },
    {
      id: 3,
      title: 'Composting Basics Video',
      description: 'Step-by-step tutorial on starting and maintaining a compost system.',
      category: 'videos',
      icon: <Video className="w-6 h-6" />,
      link: '#video-composting'
    },
    {
      id: 4,
      title: 'Biodiversity Impact Report',
      description: 'Research on how our reforestation efforts are affecting local biodiversity.',
      category: 'reports',
      icon: <FileText className="w-6 h-6" />,
      link: '#report-biodiversity'
    },
    {
      id: 5,
      title: 'Water Conservation Guide',
      description: 'Practical tips and technologies for reducing water usage.',
      category: 'guides',
      icon: <Book className="w-6 h-6" />,
      link: '#guide-water'
    },
    {
      id: 6,
      title: 'Renewable Energy Video Series',
      description: 'Exploring different renewable energy options for residential use.',
      category: 'videos',
      icon: <Video className="w-6 h-6" />,
      link: '#videos-renewable'
    },
    {
      id: 7,
      title: 'Sustainable Living Toolkit',
      description: 'Resources and worksheets for transitioning to a more sustainable lifestyle.',
      category: 'toolkits',
      icon: <Download className="w-6 h-6" />,
      link: '#toolkit-living'
    },
    {
      id: 8,
      title: 'Annual Environmental Impact Report',
      description: 'Our yearly report on program outcomes and environmental impacts.',
      category: 'reports',
      icon: <FileText className="w-6 h-6" />,
      link: '#report-annual'
    }
  ];
  
  const categories: { id: ResourceCategory; label: string }[] = [
    { id: 'all', label: 'All Resources' },
    { id: 'guides', label: 'Guides' },
    { id: 'videos', label: 'Videos' },
    { id: 'reports', label: 'Reports' },
    { id: 'toolkits', label: 'Toolkits' }
  ];
  
  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);
  
  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Resources</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore our collection of guides, videos, reports, and toolkits to help you 
            learn more about environmental issues and take meaningful action.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResources.map(resource => (
            <a
              key={resource.id}
              href={resource.link}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    {resource.icon}
                  </div>
                  <span className="text-xs font-semibold uppercase text-green-600">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {resource.description}
                </p>
                <div className="text-green-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
                  Access Resource
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#all-resources" 
            className="inline-block border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
          >
            View All Resources
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;