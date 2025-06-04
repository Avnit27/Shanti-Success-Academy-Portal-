
const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Mr. Rajesh Sharma',
      subject: 'Physics',
      experience: '10+ years experience',
      specialization: 'JEE & NEET Expert',
      photo: '/placeholder.svg',
      qualification: 'M.Sc. Physics, B.Ed.'
    },
    {
      name: 'Mrs. Priya Gupta',
      subject: 'Mathematics',
      experience: '8+ years experience',
      specialization: 'Board & JEE Specialist',
      photo: '/placeholder.svg',
      qualification: 'M.Sc. Mathematics'
    },
    {
      name: 'Dr. Amit Verma',
      subject: 'Chemistry',
      experience: '12+ years experience',
      specialization: 'NEET & MHT-CET Expert',
      photo: '/placeholder.svg',
      qualification: 'Ph.D. Chemistry'
    },
    {
      name: 'Mrs. Sunita Joshi',
      subject: 'Biology',
      experience: '9+ years experience',
      specialization: 'NEET Specialist',
      photo: '/placeholder.svg',
      qualification: 'M.Sc. Biology, B.Ed.'
    },
    {
      name: 'Mr. Vikash Kumar',
      subject: 'Accountancy',
      experience: '7+ years experience',
      specialization: 'Commerce Expert',
      photo: '/placeholder.svg',
      qualification: 'M.Com, CA (Inter)'
    },
    {
      name: 'Mrs. Neha Pandey',
      subject: 'English',
      experience: '6+ years experience',
      specialization: 'Language & Literature',
      photo: '/placeholder.svg',
      qualification: 'M.A. English, B.Ed.'
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-ssa-blue mb-4">
            👩‍🏫 Meet Our Expert Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced educators dedicated to nurturing academic excellence and building bright futures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Photo</span>
                </div>
                
                <h3 className="text-xl font-bold text-ssa-blue mb-2">{faculty.name}</h3>
                <p className="text-ssa-yellow font-semibold text-lg mb-1">{faculty.subject}</p>
                <p className="text-gray-600 text-sm mb-2">{faculty.qualification}</p>
                
                <div className="bg-ssa-blue/10 rounded-lg p-3 mb-4">
                  <p className="text-ssa-blue font-medium text-sm">{faculty.experience}</p>
                  <p className="text-gray-700 text-sm">{faculty.specialization}</p>
                </div>
                
                <div className="flex justify-center space-x-2">
                  <span className="bg-ssa-yellow text-ssa-blue px-3 py-1 rounded-full text-xs font-bold">
                    Expert
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                    Experienced
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Highlights */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-ssa-blue mb-6 text-center">🌟 Why Our Faculty Stands Out</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🎓</div>
              <h4 className="font-bold text-ssa-blue mb-2">Qualified</h4>
              <p className="text-gray-600 text-sm">Masters & Ph.D. holders with teaching expertise</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">💡</div>
              <h4 className="font-bold text-ssa-blue mb-2">Innovative</h4>
              <p className="text-gray-600 text-sm">Modern teaching methods and technology integration</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">❤️</div>
              <h4 className="font-bold text-ssa-blue mb-2">Caring</h4>
              <p className="text-gray-600 text-sm">Personal attention and mentorship for every student</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div>
              <h4 className="font-bold text-ssa-blue mb-2">Results-Driven</h4>
              <p className="text-gray-600 text-sm">Proven track record of student success</p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-12 text-center">
          <div className="bg-ssa-blue text-white p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">💬 Our Teaching Philosophy</h3>
            <p className="text-lg italic">
              "We believe every student has the potential to excel. Our role is to guide, inspire, and provide the right environment for learning and growth."
            </p>
            <p className="mt-4 text-ssa-yellow font-semibold">- SSA Faculty Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
