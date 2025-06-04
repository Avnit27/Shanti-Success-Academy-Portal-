
const CoursesOffered = () => {
  const courses = [
    {
      title: '6th–10th',
      description: 'SSC & CBSE all subjects',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'XI–XII Science',
      description: 'PCM & PCB',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'XI–XII Commerce',
      description: 'Accounts & Economics',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'JEE',
      description: 'Main & Advanced',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'NEET',
      description: 'Medical entrance',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'MHT-CET',
      description: 'State entrance',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="courses" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-ssa-blue mb-4">
            Courses Offered
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-ssa-blue mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                <button className="w-full bg-ssa-yellow hover:bg-yellow-400 text-ssa-blue font-bold py-2 rounded-lg transition-colors duration-200 text-sm">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;
