const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Mr. Rajesh Sharma',
      subject: 'Physics',
      experience: '10+ years'
    },
    {
      name: 'Mrs. Priya Gupta',
      subject: 'Mathematics',
      experience: '8+ years'
    },
    {
      name: 'Dr. Amit Verma',
      subject: 'Chemistry',
      experience: '12+ years'
    },
    {
      name: 'Mrs. Sunita Joshi',
      subject: 'Biology',
      experience: '9+ years'
    }
  ];

  return (
    <section id="faculty" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-ssa-blue mb-4">
            👩‍🏫 Our Faculty
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-32 lg:w-36 lg:h-36 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={`/faculty${index + 1}.png`}
                  alt={`Faculty ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-sm font-bold text-ssa-blue mb-1">{faculty.name}</h3>
              <p className="text-ssa-yellow font-semibold text-sm mb-1">{faculty.subject}</p>
              <p className="text-gray-600 text-xs">{faculty.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
