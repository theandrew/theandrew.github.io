import { motion } from 'framer-motion';
import { FaTrophy, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import PageTitle from '../components/PageTitle';

const Undergraduate = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLifeImageIndex, setCurrentLifeImageIndex] = useState(0);
  
  const stairClimberImages = [
    { src: '/undergraduate/MECH_114_115/CAD_render.jpg', caption: 'CAD Render' },
    { src: '/undergraduate/MECH_114_115/before_down.jpg', caption: 'Before - Down Position' },
    { src: '/undergraduate/MECH_114_115/after_lifted.jpg', caption: 'After - Lifted Position' },
    { src: '/undergraduate/MECH_114_115/ratchet_mech.jpg', caption: 'Ratchet Mechanism Detail' },
    { src: '/undergraduate/MECH_114_115/animation.gif', caption: 'Animation Sequence' },
  ];

  const lifeImages = [
    { src: '/undergraduate/senior_design/life_final_product.jpg', caption: 'Final Product' },
    { src: '/undergraduate/senior_design/life_CAD_full.png', caption: 'Full System CAD' },
    { src: '/undergraduate/senior_design/LIFE_cad.png', caption: 'CAD Detail' },
    { src: '/undergraduate/senior_design/acrylic_reservoirs.jpg', caption: 'Acrylic Reservoirs' },
    { src: '/imgs/life_logo.png', caption: 'Project Logo' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % stairClimberImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + stairClimberImages.length) % stairClimberImages.length);
  };

  const nextLifeImage = () => {
    setCurrentLifeImageIndex((prev) => (prev + 1) % lifeImages.length);
  };

  const prevLifeImage = () => {
    setCurrentLifeImageIndex((prev) => (prev - 1 + lifeImages.length) % lifeImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Undergraduate Education"
        subtitle="Bachelor of Science in Mechanical Engineering from Santa Clara University"
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
                  <p className="text-lg text-primary-600">B.S. Mechanical Engineering</p>
                  <p className="text-gray-600">Minor: Aerospace Engineering</p>
                  <p className="text-gray-600">GPA: 3.93, Summa Cum Laude | Graduated: June 2022</p>
                </div>
              </div>

              <div className="flex items-start gap-2 mt-4 p-4 bg-yellow-50 rounded-lg">
                <FaTrophy className="text-yellow-600 text-xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Senior Award</p>
                  <p className="text-gray-700">Outstanding Academic Achievement in Mechanical Engineering</p>
                </div>
              </div>
            </div>

            {/* Senior Design Project */}
            <div className="card p-8">
              <div className="flex items-start gap-4 mb-4">
                <img src="/imgs/life_icon.png" alt="LIFE Project Logo" className="w-16 h-16 object-contain" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">Senior Design Project</h3>
                  <p className="text-lg text-blue-600">LATAM Intelligent Filter for Education (LIFE)</p>
                  <p className="text-gray-600">June 2021 – June 2022 | Team of 5</p>
                </div>
              </div>

              {/* LIFE Image Carousel */}
              <div className="relative bg-gray-100 rounded-lg p-4 mb-6">
                <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
                  <img 
                    src={lifeImages[currentLifeImageIndex].src} 
                    alt={lifeImages[currentLifeImageIndex].caption}
                    className="w-full h-full object-contain rounded"
                  />
                  
                  {/* Previous Button */}
                  <button
                    onClick={prevLifeImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="text-gray-800 text-xl" />
                  </button>
                  
                  {/* Next Button */}
                  <button
                    onClick={nextLifeImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="text-gray-800 text-xl" />
                  </button>
                </div>
                
                {/* Caption and Image Counter */}
                <div className="text-center mt-4">
                  <p className="text-gray-800 font-semibold">{lifeImages[currentLifeImageIndex].caption}</p>
                  <p className="text-gray-600 text-sm mt-1">
                    {currentLifeImageIndex + 1} / {lifeImages.length}
                  </p>
                </div>
                
                {/* Thumbnail Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {lifeImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentLifeImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentLifeImageIndex 
                          ? 'bg-blue-600 w-8' 
                          : 'bg-gray-400 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Project Overview</h4>
                <p className="text-gray-700">
                  Designed and fabricated a tabletop water filtration device with a feedback-controlled flow system, intended for educational demonstrations in Latin America. The project involved the complete development of an electro-mechanical system, from initial CAD concepts to final fabrication and testing.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">My Contributions</h4>
                <p className="text-gray-700 mb-4">
                  As the lead mechanical designer, I was responsible for the complete physical architecture of the device. 
                  I created detailed SolidWorks CAD models and performed static FEA to verify the structural integrity 
                  of the frame under load. Beyond design, I handled the fabrication of custom components in the machine shop 
                  and integrated the sensors and actuators required for the feedback control system.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Outcomes</h4>
                <p className="text-gray-700 mb-4">
                  Our team successfully fabricated a fully functional prototype that met all design requirements. 
                  We presented our working device to a panel of industry judges, demonstrating its ability to 
                  filter and regulate flow autonomously. The project resulted in a published senior thesis in the SCU Digital Commons 
                  and a successful conference presentation.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">SolidWorks</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">FEA</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Feedback Control</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Fabrication</span>
              </div>
            </div>

            {/* Additional Project */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">MECH 114/115: Stair Climber Project</h3>
              <p className="text-gray-700 mb-6">
                Mechanical design and prototype development of a stair-climbing mechanism. 
                Applied course concepts in mechanism design, structural analysis, and testing validation.
              </p>
              
              {/* Image Carousel */}
              <div className="relative bg-gray-100 rounded-lg p-4">
                <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
                  <img 
                    src={stairClimberImages[currentImageIndex].src} 
                    alt={stairClimberImages[currentImageIndex].caption}
                    className="w-full h-full object-contain rounded"
                    key={currentImageIndex} // Force re-render to restart GIF
                  />
                  
                  {/* Previous Button */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="text-gray-800 text-xl" />
                  </button>
                  
                  {/* Next Button */}
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="text-gray-800 text-xl" />
                  </button>
                </div>
                
                {/* Caption and Image Counter */}
                <div className="text-center mt-4">
                  <p className="text-gray-800 font-semibold">{stairClimberImages[currentImageIndex].caption}</p>
                  <p className="text-gray-600 text-sm mt-1">
                    {currentImageIndex + 1} / {stairClimberImages.length}
                  </p>
                </div>
                
                {/* Thumbnail Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {stairClimberImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-primary-600 w-8' 
                          : 'bg-gray-400 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Undergraduate;
