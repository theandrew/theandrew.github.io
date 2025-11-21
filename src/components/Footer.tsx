import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiOrcid } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Andrew Lemus. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-1">Mechanical Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="mailto:andrew.lemus7@gmail.com"
              className="hover:text-primary-400 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://linkedin.com/in/andrew-lemus-s"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/theandrew"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://orcid.org/0009-0005-5202-8747"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-200"
              aria-label="ORCID"
            >
              <SiOrcid size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
