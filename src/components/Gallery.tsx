
const Gallery = () => {
  const galleryImages = [
    {
      title: 'Modern Classroom',
      description: 'Well-equipped classrooms with latest teaching aids',
      category: 'Infrastructure'
    },
    {
      title: 'Interactive Learning',
      description: 'Engaging lectures with practical demonstrations',
      category: 'Teaching'
    },
    {
      title: 'Test Series',
      description: 'Regular assessments and mock exams',
      category: 'Assessment'
    },
    {
      title: 'Prize Distribution',
      description: 'Celebrating our toppers and achievers',
      category: 'Events'
    },
    {
      title: 'Laboratory Sessions',
      description: 'Hands-on practical learning experience',
      category: 'Practical'
    },
    {
      title: 'Study Materials',
      description: 'Comprehensive notes and practice books',
      category: 'Resources'
    },
    {
      title: 'Doubt Solving',
      description: 'One-on-one doubt clearing sessions',
      category: 'Support'
    },
    {
      title: 'Student Activities',
      description: 'Co-curricular activities and competitions',
      category: 'Activities'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Teaching', 'Events', 'Activities'];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-ssa-blue mb-4">
            🖼️ Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a glimpse into our vibrant learning environment and see what makes SSA special
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-white text-ssa-blue border-2 border-ssa-blue rounded-lg font-semibold hover:bg-ssa-blue hover:text-white transition-all duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">📸 {image.title}</span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-ssa-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                  <span className="inline-block mt-2 bg-ssa-yellow text-ssa-blue px-3 py-1 rounded-full text-xs font-bold">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-ssa-blue mb-2">Modern Infrastructure</h3>
            <p className="text-gray-600">Air-conditioned classrooms with smart boards and comfortable seating</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-ssa-blue mb-2">Well-Equipped Labs</h3>
            <p className="text-gray-600">Physics, Chemistry, and Biology labs for practical learning</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-ssa-blue mb-2">Rich Library</h3>
            <p className="text-gray-600">Comprehensive collection of reference books and study materials</p>
          </div>
        </div>

        {/* Virtual Tour CTA */}
        <div className="text-center mt-12">
          <div className="bg-ssa-blue text-white p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🏫 Want to See More?</h3>
            <p className="mb-6">Visit our campus and experience the SSA difference yourself!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-ssa-yellow text-ssa-blue px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-200"
              >
                Schedule Campus Visit
              </a>
              <a
                href="tel:+919324714072"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-ssa-blue transition-colors duration-200"
              >
                Call for Virtual Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
