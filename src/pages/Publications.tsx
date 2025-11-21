import { motion } from 'framer-motion';
import { FaBook, FaExternalLinkAlt } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';

const Publications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Publications"
        subtitle="Peer-reviewed research publications and academic work"
      />

      <div className="section-container !pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Research Publications */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Research Publications</h2>
              
              <div className="space-y-6">
                {/* Publication 1 */}
                <div className="card p-6">
                  <div className="flex items-start gap-3">
                    <FaBook className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        The Effect of Axisymmetric Confinement on Propulsion of a Three-Sphere Microswimmer
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        A. Gürbüz, <strong>A. Lemus</strong>, E. Demir, O. S. Pak, and A. Daddi-Moussa-Ider
                      </p>
                      <p className="text-sm font-medium text-primary-600 mb-3">Physics of Fluids 35:081907 (2023)</p>
                      <a
                        href="https://doi.org/10.1063/5.0163348"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                      >
                        View Publication <FaExternalLinkAlt size={14} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Publication 2 */}
                <div className="card p-6">
                  <div className="flex items-start gap-3">
                    <FaBook className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Propulsion of a Three-Sphere Microrobot in a Porous Medium
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        C.-T. Liao, <strong>A. Lemus</strong>, A. Gürbüz, A. C. H. Tsang, O. S. Pak, and A. Daddi-Moussa-Ider
                      </p>
                      <p className="text-sm font-medium text-primary-600 mb-3">Physical Review E 109:065106 (2024)</p>
                      <div className="flex gap-4">
                        <a
                          href="https://doi.org/10.1103/PhysRevE.109.065106"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                        >
                          View Publication <FaExternalLinkAlt size={14} />
                        </a>
                        <a
                          href="https://arxiv.org/abs/2402.09793"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium"
                        >
                          ArXiv Preprint <FaExternalLinkAlt size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Senior Thesis */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Senior Thesis</h2>
              
              <div className="card p-6">
                <div className="flex items-start gap-3">
                  <FaBook className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      LATAM Intelligent Filter for Education (LIFE)
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>A. Lemus</strong>, J. Woo, E. Yang, C. Jauregui, and D. McCann-Sayles
                    </p>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      Interdisciplinary Design Senior Theses 82, Santa Clara University (2022)
                    </p>
                    <a
                      href="https://scholarcommons.scu.edu/idp_senior/82"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View Thesis <FaExternalLinkAlt size={14} />
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

export default Publications;
