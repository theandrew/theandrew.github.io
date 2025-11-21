import PageTitle from '../components/PageTitle';

const Gallery = () => {
  const galleryImages = [
    {
      src: '/undergraduate/senior_design/life_final_product.jpg',
      title: 'LIFE Project - Final Product',
      description: 'The completed LATAM Intelligent Filter for Education device.',
    },
    {
      src: '/undergraduate/senior_design/life_CAD_full.png',
      title: 'LIFE Project - Full System CAD',
      description: 'Complete assembly of the LATAM Intelligent Filter for Education.',
    },
    {
      src: '/undergraduate/senior_design/LIFE_cad.png',
      title: 'LIFE Project - Electronics Box CAD',
      description: 'Detailed view of the electronics housing.',
    },
    {
      src: '/undergraduate/senior_design/acrylic_reservoirs.jpg',
      title: 'LIFE Project - Acrylic Reservoirs',
      description: 'Custom fabricated acrylic reservoirs for the filtration system.',
    },
    {
      src: '/imgs/vision_miner_cad.jpeg',
      title: 'Vision Miner Metal Spool',
      description: 'Design of a ruggedized metal filament spool for high-temperature industrial 3D printing applications.',
    },
    {
      src: '/undergraduate/MECH_114_115/CAD_render.jpg',
      title: 'Stair Climber Mechanism',
      description: 'Render of the stair-climbing robot designed for MECH 114/115.',
    },
    {
      src: '/personal/3309/2018_robot_actual.jpeg',
      title: 'FRC 2018 Robot - Final Build',
      description: 'The completed competition robot for Team 3309 (2018 season).',
    },
    {
      src: '/personal/3309/2018_robot_cad.jpeg',
      title: 'FRC 2018 Robot - CAD',
      description: 'Full CAD assembly of the FRC 2018 competition robot.',
    },
    {
      src: '/personal/3309/gearbox/gearbox_actual.jpeg',
      title: 'Elevator Gearbox - Final Build',
      description: 'Manufactured and assembled custom gearbox for the elevator mechanism.',
    },
    {
      src: '/personal/3309/gearbox/gearbox_cad.jpeg',
      title: 'Elevator Gearbox - CAD',
      description: 'Custom gearbox design for the FRC 2018 robot elevator mechanism.',
    },
    {
      src: '/personal/3309/turret/turret_actual.jpeg',
      title: 'Turret Mechanism - Final Build',
      description: 'Completed turret assembly for the 2017 competition robot.',
    },
    {
      src: '/personal/3309/turret/turret_cad.jpeg',
      title: 'Turret Mechanism - CAD',
      description: 'Turret assembly designed for the FRC 2017 competition robot.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle
        title="Project Gallery"
        subtitle="A collection of my mechanical design work, CAD, and final builds"
      />

      <div className="section-container !pt-0">
        <div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
