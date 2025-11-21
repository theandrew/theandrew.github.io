import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Home = () => {
  const skills = {
    'CAD & Engineering': {
      color: 'blue',
      items: ['SolidWorks', 'Fusion360', 'Inventor', 'NX', 'COMSOL', 'Abaqus', 'FEA', 'GD&T', 'DFM', 'Rapid Prototyping'],
    },
    'Robotics': {
      color: 'green',
      items: ['ROS2 Humble', 'Nav2', 'Isaac ROS', 'UR10e', 'URDF', 'LiDAR', 'NVIDIA Jetson'],
    },
    'Software & Programming': {
      color: 'purple',
      items: ['C++', 'Python', 'MATLAB', 'Simulink', 'Docker', 'Git', 'Linux'],
    },
    'Manufacturing': {
      color: 'yellow',
      items: ['Mill', 'Lathe', 'Drill Press', '3D Printing', 'Prototyping'],
    },
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center bg-gray-900 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/imgs/background.JPG')" }}
        >
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center p-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Andrew Lemus</h1>
            <p className="text-xl md:text-3xl text-gray-200 font-light mb-8">
              M.S. / B.S. Mechanical Engineering, Santa Clara University
            </p>
            <div className="flex justify-center gap-6">
              <button onClick={scrollToAbout} className="btn-primary text-lg px-8 py-3">
                About Me
              </button>
              <a href="/resume/Andrew_Lemus-Resume-2025-Mechanical-Engineer.pdf" download className="btn-secondary text-lg px-8 py-3">
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section-container bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            I am a mechanical engineer specializing in product design, autonomous robotics, and computational fluid dynamics. 
            I earned my B.S. and M.S. in Mechanical Engineering from Santa Clara University. 
            I am currently an Electro-Mechanical Engineer II at Kazvu Labs, where I work on autonomous mobile robots (AMRs), UR10e robotic arms, and end-to-end system integration across both hardware and software. 
            My role spans the full product lifecycle, including mechanical design, FEA validation, system integration, and field testing.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="section-container bg-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, { color, items }]) => (
              <div key={category} className="card p-6">
                <h4 className={`text-${color}-700 mb-4`}>{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`bg-${color}-100 text-${color}-800 px-3 py-1 rounded-full text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Resume Section */}
      <section className="section-container bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Resume</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Quick Contact</h3>
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:andrew.lemus7@gmail.com" className="text-primary-600 hover:underline">
                    andrew.lemus7@gmail.com
                  </a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href="https://linkedin.com/in/andrew-lemus-s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    linkedin.com/in/andrew-lemus-s
                  </a>
                </p>
              </div>
              
              <div className="text-center mb-8 pb-8 border-b">
                <a
                  href="/resume/Andrew_Lemus-Resume-2025-Mechanical-Engineer.pdf"
                  download
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FaDownload />
                  Download Resume (PDF)
                </a>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <iframe
                  src="/resume/Andrew_Lemus-Resume-2025-Mechanical-Engineer.pdf"
                  className="w-full h-[800px] rounded border border-gray-300"
                  title="Andrew Lemus Resume"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

