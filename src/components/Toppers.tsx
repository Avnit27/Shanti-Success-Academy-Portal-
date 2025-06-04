
const Toppers = () => {
  const toppers = [
    {
      name: 'Janvi Joshi',
      achievement: 'Board Topper - 95.4%',
      exam: 'HSC Science',
      photo: '/placeholder.svg',
      quote: 'SSA gave me the confidence and knowledge to achieve my dreams!'
    },
    {
      name: 'Rahul Sharma',
      achievement: 'JEE Main - 96.2 Percentile',
      exam: 'JEE Main 2023',
      photo: '/placeholder.svg',
      quote: 'The faculty at SSA made complex concepts simple to understand.'
    },
    {
      name: 'Priya Patel',
      achievement: 'NEET - 680/720',
      exam: 'NEET 2023',
      photo: '/placeholder.svg',
      quote: 'Regular tests and doubt sessions helped me score high in NEET.'
    },
    {
      name: 'Arjun Kumar',
      achievement: 'MHT-CET - 99.1 Percentile',
      exam: 'MHT-CET 2023',
      photo: '/placeholder.svg',
      quote: 'The structured approach at SSA made all the difference.'
    },
    {
      name: 'Sneha Gupta',
      achievement: 'Commerce Topper - 94.8%',
      exam: 'HSC Commerce',
      photo: '/placeholder.svg',
      quote: 'Individual attention helped me excel in commerce subjects.'
    },
    {
      name: 'Vikram Singh',
      achievement: 'SSC Topper - 96.2%',
      exam: 'SSC 2023',
      photo: '/placeholder.svg',
      quote: 'Foundation building at SSA set the stage for my success.'
    }
  ];

  const achievements = [
    { number: '100+', text: 'Students scored above 90%' },
    { number: '30+', text: 'Students cracked NEET/JEE' },
    { number: '15+', text: 'Board toppers in last 3 years' },
    { number: '250+', text: 'Success stories and counting' }
  ];

  return (
    <section id="toppers" className="py-20 bg-gradient-to-br from-ssa-blue to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold mb-4">
            🏆 Our Toppers & Achievements
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Success stories that inspire and motivate future achievers
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-3xl font-bold text-ssa-yellow mb-2">{achievement.number}</h3>
              <p className="text-blue-100">{achievement.text}</p>
            </div>
          ))}
        </div>

        {/* Toppers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Photo</span>
                </div>
                <h3 className="text-xl font-bold text-ssa-blue mb-1">{topper.name}</h3>
                <p className="text-ssa-red font-semibold">{topper.achievement}</p>
                <p className="text-gray-600 text-sm">{topper.exam}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 italic text-sm">"{topper.quote}"</p>
              </div>
              
              <div className="mt-4 flex justify-center">
                <span className="bg-ssa-yellow text-ssa-blue px-4 py-2 rounded-full font-bold text-sm">
                  🌟 Top Performer
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-ssa-yellow text-ssa-blue p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🎯 Ready to Join Our Success Stories?</h3>
            <p className="mb-6">Get personalized guidance and achieve your academic goals with our proven teaching methods.</p>
            <a
              href="#admission"
              className="bg-ssa-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors duration-200 inline-block"
            >
              Start Your Success Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toppers;
