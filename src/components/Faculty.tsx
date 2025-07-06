const Faculty = () => {
  const facultyMembers = [
    {
      name: 'Ambuj Sir',
      subject: 'Founder & Director',
      experience: '3+ years'
    },
    {
      name: 'Pandey Sir',
      subject: 'Hindi',
      experience: '8+ years'
    },
    {
      name: 'Avnit Sir',
      subject: 'Maths',
      experience: '5+ years'
    },
    {
      name: 'sandeep Sir',
      subject: 'Physics',
      experience: '4+ years'
    }
  ];

  return (
    <section id="faculty" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-ssa-blue mb-4">
          🧑‍🏫Our Faculty
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-ssa-blue hover:shadow-xl transition-all duration-300 animate-fade-in flex flex-col items-center justify-center gap-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-2">🧑‍🏫</div>
              <h3 className="text-lg font-bold text-ssa-blue mb-1">{faculty.name}</h3>
              <p className="text-ssa-yellow font-semibold text-base mb-1">{faculty.subject}</p>
              <p className="text-gray-600 text-xs">{faculty.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
