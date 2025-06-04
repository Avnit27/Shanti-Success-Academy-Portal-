
const Gallery = () => {
  const galleryImages = [
    { 
      title: 'Interactive Learning', 
      category: 'Teaching',
      src: '/lovable-uploads/7372c55a-6610-484c-8cb4-45bc9a2bb307.png'
    },
    { 
      title: 'Modern Facilities', 
      category: 'Infrastructure',
      src: '/lovable-uploads/7372c55a-6610-484c-8cb4-45bc9a2bb307.png'
    },
    { 
      title: 'Expert Faculty', 
      category: 'Teaching',
      src: '/lovable-uploads/7372c55a-6610-484c-8cb4-45bc9a2bb307.png'
    },
    { 
      title: 'Laboratory Work', 
      category: 'Practical',
      src: '/lovable-uploads/7372c55a-6610-484c-8cb4-45bc9a2bb307.png'
    },
    { 
      title: 'Student Activities', 
      category: 'Events',
      src: '/lovable-uploads/7372c55a-6610-484c-8cb4-45bc9a2bb307.png'
    },
    { 
      title: 'Prize Distribution', 
      category: 'Achievements',
      src: '/lovable-uploads/7372c55a-6610-484c-8cb4-45bc9a2bb307.png'
    }
  ];

  return (
    <section id="gallery" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-ssa-blue mb-4">
            🖼️ Photo Gallery
          </h2>
        </div>

        {/* Static Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative w-full aspect-square bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                {/* Overlay with information that appears on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-4">
                  <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-sm md:text-lg font-bold mb-1">{image.title}</h3>
                    <span className="inline-block bg-ssa-yellow text-ssa-blue px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-bold">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
