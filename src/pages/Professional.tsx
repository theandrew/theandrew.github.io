import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';

interface Company {
  name: string;
  logo?: string;
  title: string;
  date: string;
  location: string;
  overview: string;
  keyProjects: string[];
  technicalSkills: string[];
  featuredImage?: string;
}

const Professional = () => {
  const companies: Company[] = [
    {
      name: 'Kazvu Labs',
      logo: '/imgs/kazvu_icon.png',
      title: 'Electro-Mechanical Engineer II',
      date: 'June 2023 – Present',
      location: 'Irvine, CA',
      overview: 'As the mechanical engineer responsible for our custom autonomous mobile robots (AMRs) platform, I own the full lifecycle of robotic systems from conceptual design and FEA validation to ROS2 software integration and field deployment. My work bridges the gap between robust mechanical hardware and intelligent software control.',
      keyProjects: [
        'AMR Chassis & Manipulation: Designed and fabricated swerve-drive modules and full AMR assemblies, validating load paths and stability through rigorous FEA and static tipping analysis.',
        'ROS2 System Integration: Architected a ROS2-based control system on NVIDIA Jetson, integrating custom UR10e manipulator drivers, hardware interfaces, and Nav2 stacks.',
        'Advanced Control Strategies: Authored a real-time Cartesian controller plugin for compliant force control and developed trajectory offset and touch-off probe calibration systems to align simulation with reality.',
      ],
      technicalSkills: ['Fusion360', 'NX', 'FEA', 'ROS2 Humble', 'UR10e', 'URDF', 'C++', 'Python', 'GD&T', 'Nav2', 'LiDAR'],
    },
    {
      name: 'Santa Clara University - Theoretical & Computational Mechanics Lab',
      logo: '/imgs/scu_icon.png',
      title: 'Graduate Research Assistant / Research Advisor (part-time, remote)',
      date: 'July 2022 – Present',
      location: 'Santa Clara, CA',
      overview: 'Specializing in computational fluid dynamics (CFD), I research the hydrodynamics of micro-scale swimmers for biomedical applications. My work involves developing complex COMSOL simulations and custom MATLAB post-processing tools to analyze non-Newtonian fluid interactions.',
      keyProjects: [
        'Microswimmer Simulation: Modeled two- and three-sphere microswimmers in confined and porous environments to understand propulsion efficiency in biological fluids.',
        'Academic Publications: Co-authored two peer-reviewed journal papers (Physics of Fluids, Physical Review E) detailing our findings on low-Reynolds-number flow dynamics.',
      ],
      technicalSkills: ['COMSOL Multiphysics', 'MATLAB', 'CFD', 'FEA'],
    },
    {
      name: 'Mask Sterilizer (w/ Dr. Amin Kassis, Harvard University)',
      title: 'Mechanical Engineer Consultant',
      date: 'September 2020',
      location: 'Remote',
      overview: 'Partnered with Dr. Amin Kassis (Harvard Medical School) to engineer a portable mask sterilization device in response to COVID-19 PPE shortages. My role focused on validating the thermal efficacy of the steam-based system and designing the physical enclosure for rapid prototyping.',
      keyProjects: [
        'Thermal & Flow Analysis: Validated steam distribution and temperature maintenance for effective sterilization.',
        'Mechanical Design: Created full SolidWorks assemblies for the sterilization chamber and electronics enclosure.',
        'Prototyping: Delivered functional 3D-printed prototypes for testing and validation.',
      ],
      technicalSkills: ['SolidWorks', 'Thermal Analysis', 'Flow Analysis', '3D Printing', 'Product Design'],
    },
    {
      name: 'VersaEd',
      title: 'Software Architecture Engineer',
      date: 'June 2020 – August 2020',
      location: 'Remote',
      overview: 'Worked with a remote team to build educational technology tools during the shift to virtual learning. My primary contribution was developing a Mathematica-based OCR pipeline that extracted table of contents data from textbooks to construct knowledge trees. This backend system interfaced with a frontend application to create personalized learning paths for students based on a knowledgebase of book structures.',
      keyProjects: [
        'Knowledge Tree Generation: Developed Mathematica scripts to OCR textbook tables of contents and structure them into hierarchical knowledge trees.',
        'Backend Integration: Designed the data pipeline to feed structured curriculum data into the frontend learning platform.',
      ],
      technicalSkills: ['Mathematica', 'OCR', 'Web Development', 'Data Analytics'],
    },
    {
      name: 'Vision Miner',
      logo: '/imgs/vision_miner_logo.png',
      title: 'Mechanical Design Intern',
      date: 'July 2019 – September 2019',
      location: 'Santa Ana, CA',
      overview: 'Worked in R&D to design and launch products for high-temperature industrial 3D printers. Gained deep understanding of printing high-temperature filaments.',
      keyProjects: [
        'Filament Dehydrator: Led mechanical design, thermal testing, and component selection for a prototype drying unit.',
        'High-Temp Spool: Designed and released to market a metal spool for high temperature filament lifecycle.',
      ],
      technicalSkills: ['SolidWorks', '3D Printing', 'Product Design'],
      featuredImage: '/imgs/vm_product.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Professional Experience"
        subtitle="A timeline of my professional roles, showcasing mechanical engineering, robotics, and research experience."
      />
      <div className="section-container !pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto space-y-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="card p-6 md:p-8"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  {company.logo ? (
                    <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12" />
                  ) : (
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <FaBriefcase className="text-primary-600 text-2xl" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{company.name}</h3>
                    <p className="text-lg text-primary-600 font-medium">{company.title}</p>
                    <p className="text-sm text-gray-500">{company.date} • {company.location}</p>
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase mb-2 tracking-wider">Overview</h4>
                  <p className="text-gray-700">{company.overview}</p>
                </div>

                {/* Key Projects */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase mb-2 tracking-wider">Key Projects</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {company.keyProjects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </div>

                {/* Featured Image */}
                {company.featuredImage && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase mb-2 tracking-wider">Featured Product</h4>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex justify-center">
                      <img 
                        src={company.featuredImage} 
                        alt={`${company.name} Featured Product`} 
                        className="max-h-64 object-contain rounded shadow-sm"
                      />
                    </div>
                  </div>
                )}

                {/* Technical Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 uppercase mb-2 tracking-wider">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.technicalSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Professional;
