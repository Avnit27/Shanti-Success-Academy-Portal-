
const WhyChooseSSA = () => {
  const features = [
    {
      icon: '💰',
      title: 'Affordable Education',
      description: 'Quality teaching at low cost'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Teachers',
      description: 'Experienced mentors'
    },
    {
      icon: '💡',
      title: 'Concept-Focused',
      description: 'Builds clarity'
    },
    {
      icon: '🔁',
      title: 'Regular Tests',
      description: 'Weekly assessments'
    },
    {
      icon: '🗣️',
      title: 'Doubt Solving',
      description: 'Personal attention'
    },
    {
      icon: '🏆',
      title: 'Proven Results',
      description: 'Board toppers'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-ssa-blue mb-4">
            Why Choose SSA?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Mobile: Icon on top, Desktop: Icon on right */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="lg:flex-1">
                  <div className="text-3xl lg:text-4xl mb-2 lg:hidden">{feature.icon}</div>
                  <h3 className="text-sm lg:text-base font-bold text-ssa-blue mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-xs lg:text-sm">{feature.description}</p>
                </div>
                <div className="hidden lg:block text-4xl xl:text-5xl ml-4">{feature.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 bg-ssa-blue text-white rounded-2xl p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-2xl font-bold text-ssa-yellow mb-1">500+</h3>
              <p className="text-sm">Students</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-ssa-yellow mb-1">95%</h3>
              <p className="text-sm">Success</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-ssa-yellow mb-1">8+</h3>
              <p className="text-sm">Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSSA;
