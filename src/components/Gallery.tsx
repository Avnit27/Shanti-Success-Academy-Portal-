import { images } from '../images';

const Gallery = () => {
  const galleryImages = [
    { 
      title: 'Student Success', 
      category: 'Students',
      src: images.gallery[4]
    },
    { 
      title: 'Interactive Learning', 
      category: 'Teaching',
      src: images.gallery[1]
    },  
    { 
      title: 'Modern Facilities', 
      category: 'Infrastructure',
      src: images.gallery[2]
    },
    { 
      title: 'Expert Faculty', 
      category: 'Teaching',
      src: images.gallery[3]
    },
    // { 
    //   title: 'Laboratory Work', 
    //   category: 'Practical',
    //   src: images.gallery[4]
    // },
    { 
      title: 'Student Activities', 
      category: 'Events',
      src: images.gallery[5]
    },
    { 
      title: 'Prize Distribution', 
      category: 'Achievements',
      src: images.gallery[6]
    }
  ];

  return (
    <section id="gallery" className="py-10 bg-gray-50">
      <div className="container mx-auto px-2">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-montserrat font-bold text-ssa-blue mb-3">
            🖼️ Photo Gallery
          </h2>
        </div>

        {/* Static Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              style={{ maxWidth: '92%', margin: '0 auto', aspectRatio: '1.35 / 1' }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                {/* Overlay with information that appears on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-3">
                  <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xs md:text-base font-bold mb-1">{image.title}</h3>
                    <span className="inline-block bg-ssa-yellow text-ssa-blue px-2 py-1 md:px-2 md:py-1 rounded-full text-xs md:text-xs font-bold">
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
