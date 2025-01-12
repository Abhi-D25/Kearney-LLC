import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Card from '../components/common/Card';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../assets/data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Handle direct links to projects
  useEffect(() => {
    const projectId = location.hash.replace('#', '');
    if (projectId && projectsData[projectId]) {
      setSelectedProject(projectsData[projectId]);
    }
  }, [location]);

  const handleCloseModal = () => {
    setSelectedProject(null);
    navigate('/projects', { replace: true });
  };

  return (
    <div className="min-h-screen">
      {/* Projects Header */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-6 mt-20">Our Projects</h1>
          <p className="text-xl max-w-2xl">
            Discover our current developments and future opportunities
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
          {Object.values(projectsData).map((project) => (
              <Card
                key={project.id}
                imageUrl={project.imageUrl}
                title={project.title}
                subtitle={project.location}
                className="cursor-pointer hover:shadow-xl transition-all"
                onClick={() => {
                  setSelectedProject(project);
                  navigate(`/projects#${project.id}`);
                }}
              >
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === 'In Progress' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                  <Button variant="secondary" size="sm" className="flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        title={selectedProject?.title}
        size="lg"
      >
        {selectedProject && (
          <div>
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Project Details</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Location: {selectedProject.location}</li>
                  <li>Size: {selectedProject.details.size}</li>
                  <li>Units: {selectedProject.details.units}</li>
                  <li>Expected Completion: {selectedProject.details.completion}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Key Features</h3>
                <ul className="space-y-2 text-gray-600">
                  {selectedProject.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="primary">
                Request More Information
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;