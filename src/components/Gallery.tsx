
const Gallery = () => {
  const galleryImages = [
    { title: 'Modern Classroom', category: 'Infrastructure' },
    { title: 'Interactive Learning', category: 'Teaching' },
    { title: 'Test Series', category: 'Assessment' },
    { title: 'Prize Distribution', category: 'Events' },
    { title: 'Laboratory Sessions', category: 'Practical' },
    { title: 'Study Materials', category: 'Resources' },
    { title: 'Student Activities', category: 'Activities' }
  ];

  return (
    <section id="gallery" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-ssa-blue mb-4">
            🖼️ Photo Gallery
          </h2>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-fast hover:pause space-x-6">
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">📸 {image.title}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-ssa-blue mb-2">{image.title}</p>
                  <span className="inline-block bg-ssa-yellow text-ssa-blue px-3 py-1 rounded-full text-xs font-bold">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
