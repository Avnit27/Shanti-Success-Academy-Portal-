
const CoursesOffered = () => {
  const courses = [
    {
      title: '6th–10th (SSC & CBSE)',
      description: 'Complete foundation building for all subjects',
      subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi'],
      duration: 'Full Academic Year',
      price: 'Starting ₹5,000/month',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'XI–XII Science',
      description: 'Physics, Chemistry, Biology & Mathematics',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics'],
      duration: '2 Years Program',
      price: 'Starting ₹8,000/month',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'XI–XII Commerce',
      description: 'Accounts, Economics & Business Studies',
      subjects: ['Accountancy', 'Economics', 'Business Studies', 'Mathematics'],
      duration: '2 Years Program',
      price: 'Starting ₹6,000/month',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'JEE Preparation',
      description: 'Complete JEE Main & Advanced preparation',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      duration: '1-2 Years',
      price: 'Starting ₹12,000/month',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'NEET Preparation',
      description: 'Medical entrance exam preparation',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      duration: '1-2 Years',
      price: 'Starting ₹12,000/month',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'MHT-CET',
      description: 'Maharashtra state entrance preparation',
      subjects: ['Physics', 'Chemistry', 'Mathematics/Biology'],
      duration: '1 Year',
      price: 'Starting ₹10,000/month',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-ssa-blue mb-4">
            Courses Offered
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational programs designed to help students excel in academics and competitive exams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-3 bg-gradient-to-r ${course.color}`}></div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-ssa-blue mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                  <span>📅 {course.duration}</span>
                  <span className="font-semibold text-ssa-blue">{course.price}</span>
                </div>

                <button className="w-full bg-ssa-yellow hover:bg-yellow-400 text-ssa-blue font-bold py-3 rounded-lg transition-colors duration-200">
                  Join This Batch
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Notice */}
        <div className="mt-16 bg-ssa-yellow/10 border-l-4 border-ssa-yellow p-6 rounded-lg">
          <h3 className="font-bold text-ssa-blue mb-2">📢 Special Batches Available:</h3>
          <p className="text-gray-700">
            • Weekend batches for working students<br/>
            • Crash courses for board exams<br/>
            • One-on-one doubt clearing sessions<br/>
            • Online + Offline hybrid classes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;
