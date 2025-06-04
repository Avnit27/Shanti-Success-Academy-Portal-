
const WhyChooseSSA = () => {
  const features = [
    {
      icon: '💰',
      title: 'Affordable, Quality Education',
      description: 'Focused on results with value-for-money teaching'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Teachers',
      description: 'Experienced & supportive mentors'
    },
    {
      icon: '💡',
      title: 'Concept-Focused',
      description: 'Builds clarity, not just marks'
    },
    {
      icon: '🔁',
      title: 'Regular Tests',
      description: 'Weekly/Monthly assessments for improvement'
    },
    {
      icon: '🗣️',
      title: 'Doubt Solving',
      description: 'Personal attention to each child'
    },
    {
      icon: '🏆',
      title: 'Proven Results',
      description: 'History of board toppers & high scorers'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-ssa-blue mb-4">
            Why Choose Shanti Success Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to providing quality education that transforms students into achievers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-ssa-blue mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-ssa-blue text-white rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-ssa-yellow mb-2">500+</h3>
              <p className="text-lg">Students Taught</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-ssa-yellow mb-2">95%</h3>
              <p className="text-lg">Success Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-ssa-yellow mb-2">8+</h3>
              <p className="text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSSA;
