import ukiahImage from '../images/Ukiah.png';
import petalumaImage from '../images/planning.jpeg';

export const projectsData = {
    ukiah: {
      id: 'ukiah',
      title: 'Ukiah Development',
      location: 'Ukiah, California',
      imageUrl: ukiahImage,
      status: 'In Progress',
      description: 'Luxury living spaces with sustainable design features.',
      details: {
        size: '5 acres',
        units: '50 residential units',
        features: ['Sustainable design', 'Community spaces', 'Modern amenities'],
        completion: 'Q4 2024'
      }
    },
    petaluma: {
      id: 'petaluma',
      title: 'Petaluma Project',
      location: 'Petaluma, California',
      imageUrl: petalumaImage,
      status: 'Planning',
      description: 'Future community development opportunity.',
      details: {
        size: '8 acres',
        units: 'Mixed-use development',
        features: ['Retail spaces', 'Residential units', 'Green spaces'],
        completion: 'TBD'
      }
    }
  };