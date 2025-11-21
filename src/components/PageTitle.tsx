import { motion } from 'framer-motion';

interface PageTitleProps {
  title: string;
  subtitle: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white"
    >
      <div className="section-container !py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default PageTitle;
