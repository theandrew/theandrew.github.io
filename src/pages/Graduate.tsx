import { motion } from 'framer-motion';
import { FaFlask, FaDownload } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';

const Graduate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Graduate Education"
        subtitle="Master of Science in Mechanical Engineering from Santa Clara University"
      />

      <div className="section-container !pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Education Card */}
            <div className="card p-8">
              <div className="flex items-start gap-4 mb-4">
                <img src="/imgs/scu_icon.png" alt="SCU Logo" className="w-16 h-16 object-contain" />
                <div>
                  <h2 className="text-2xl font-bold">Santa Clara University</h2>
                  <p className="text-lg text-primary-600">M.S. Mechanical Engineering</p>
                  <p className="text-gray-600">Concentration: Design and Manufacturing</p>
                  <p className="text-gray-600">GPA: 3.89 | Graduated: June 2023</p>
                </div>
              </div>
            </div>

            {/* Research Experience */}
            <div className="card p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaFlask className="text-green-600 text-3xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">Research Experience</h3>
                  <p className="text-lg text-green-600">Theoretical and Computational Mechanics Lab</p>
                  <p className="text-gray-600">Advisor: Dr. On Shun Pak</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Research Focus</h4>
                <p className="text-gray-700">
                  My research focused on the computational modeling of micro-scale swimmers for targeted drug delivery. 
                  Specializing in low Reynolds number flows and non-Newtonian fluid mechanics, I investigated how 
                  complex environments, such as confined geometries and porous media, affect the propulsion efficiency 
                  of these microscopic devices.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Key Contributions</h4>
                <p className="text-gray-700 mb-4">
                  I developed high-fidelity COMSOL Multiphysics simulations to model the interaction between 
                  micro-swimmers and their fluid environment. To analyze the complex data generated, I wrote 
                  custom MATLAB post-processing scripts for visualization and validation. This work culminated 
                  in two peer-reviewed publications in <em>Physics of Fluids</em> and <em>Physical Review E</em>. 
                  I continue to contribute to the lab as a remote research advisor, continuously running simulations and analyzing data.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">COMSOL</span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">MATLAB</span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">CFD</span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">FEA</span>
              </div>
            </div>

            {/* Featured Courses */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Featured Graduate Courses</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-primary-700">MECH 257: Engineering Simulations and Modeling</h4>
                  <p className="text-gray-700 mt-2 mb-4">
                    My first exposure to COMSOL Multiphysics before my research role in this FEM focused course. My final project (below) involved validating a counterflow heat exchanger model against theoretical calculations.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <iframe
                      src="/graduate/ALemus-MECH257-Project_Presentation.pdf"
                      className="w-full h-96 rounded border border-gray-300"
                      title="MECH 257 Presentation"
                    />
                  </div>
                  <div className="text-center">
                    <a
                      href="/graduate/ALemus-MECH257-Project_Presentation.pdf"
                      download
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <FaDownload />
                      Download Presentation (PDF)
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary-700">MECH 325: Computational Geometry for CAD/CAM</h4>
                  <p className="text-gray-700 mt-2 mb-4">
                    Computational geometry principles such as quaternions and splines. Final project (below) assessed .stl file type and non-planar 3D printing techniques using splines.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <iframe
                      src="/graduate/ALemus-MECH325-Project_Presentation.pdf"
                      className="w-full h-96 rounded border border-gray-300"
                      title="MECH 325 Presentation"
                    />
                  </div>
                  <div className="text-center">
                    <a
                      href="/graduate/ALemus-MECH325-Project_Presentation.pdf"
                      download
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <FaDownload />
                      Download Presentation (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Graduate;
