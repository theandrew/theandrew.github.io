import { motion } from 'framer-motion';
import { FaCogs } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';

const Personal = () => {
  const projects = [
    {
      title: 'Key Contributions',
      icon: <FaCogs className="text-blue-600 text-3xl" />,
      description: 'I was responsible for the mechanical design and fabrication of several critical subsystems. This included leading the full CAD assembly for the 2018 competition robot (excluding the intake), as well as designing the 2017 turret mechanism, frame, and drivetrain, and the 2018 elevator gearbox.',
      imageGroups: [
        {
          caption: '2018 FIRST Robotics Competition Robot',
          cad: '/personal/3309/2018_robot_cad.jpeg',
          real: '/personal/3309/2018_robot_actual.jpeg',
        },
        {
          caption: '2018 Elevator and Climber Gearbox',
          cad: '/personal/3309/gearbox/gearbox_cad.jpeg',
          real: '/personal/3309/gearbox/gearbox_actual.jpeg',
        },
        {
          caption: '2017 Turret Mechanism',
          cad: '/personal/3309/turret/turret_cad.jpeg',
          real: '/personal/3309/turret/turret_actual.jpeg',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Personal & Extracurricular"
        subtitle="Where my passion for robotics and engineering began"
      />

      <div className="section-container !pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Robotics Section */}
            <div className="card p-8">
              <div className="flex items-start gap-4 mb-6">
                <img src="/imgs/3309_icon.png" alt="Team 3309 Logo" className="w-16 h-16 object-contain" />
                <div>
                  <h2 className="text-2xl font-bold">FIRST & VEX Robotics</h2>
                  <p className="text-lg text-black font-semibold">Team 3309</p>
                  <p className="text-gray-600">July 2014 – June 2018</p>
                </div>
              </div>
              <p className="text-gray-700">
                My engineering journey began with competitive robotics in high school on Team 3309 (FIRST and VEX). This hands-on experience built my foundation in CAD, fabrication, and rapid prototyping, while teaching me the value of effective teamwork under pressure. These formative years laid the groundwork for my career in mechanical engineering.
              </p>
            </div>

            {/* Projects Section */}
            {projects.map((project, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    {project.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                </div>
                <p className="text-gray-700 mb-6">{project.description}</p>

                <div className="space-y-8">
                  {project.imageGroups.map((imageGroup, imgIndex) => (
                    <div key={imgIndex}>
                      <h3 className="text-lg font-semibold mb-4 text-center">{imageGroup.caption}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                        <div className="text-center">
                          <h4 className="font-semibold mb-2">CAD Model</h4>
                          <img src={imageGroup.cad} alt={`CAD for ${imageGroup.caption}`} className="rounded-lg shadow-md" />
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold mb-2">Final Build</h4>
                          <img src={imageGroup.real} alt={`Real build for ${imageGroup.caption}`} className="rounded-lg shadow-md" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Personal;
