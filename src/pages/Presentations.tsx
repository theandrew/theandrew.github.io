import { motion } from 'framer-motion';
import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import PageTitle from '../components/PageTitle';

const Presentations = () => {
  const presentations = [
    {
      title: 'LATAM Intelligent Filter for Education (LIFE)',
      event: 'Senior Design Conference, Santa Clara University',
      date: 'May 2022',
      pdf: '/undergraduate/LIFE-Senior-Design-Conference.pdf',
      link: 'https://scholarcommons.scu.edu/idp_senior/82/',
    },
    {
      title: 'The Effect of Axisymmetric Confinement on Propulsion of a Three-Sphere Microswimmer',
      event: 'Graduate Research Presentation, Santa Clara University',
      date: 'June 2023',
      pdf: '/graduate/Gyrating-Microswimmer-in-Confinement.pdf',
      link: 'https://doi.org/10.1063/5.0163348',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Presentations"
        subtitle="A collection of my academic and conference presentations"
      />

      <div className="section-container !pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto space-y-6">
            {presentations.map((presentation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {presentation.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {presentation.event} • {presentation.date}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={presentation.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <FaFilePdf /> View Slides
                  </a>
                  {presentation.link && (
                    <a
                      href={presentation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium"
                    >
                      <FaExternalLinkAlt size={14} /> Related Publication
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Presentations;
