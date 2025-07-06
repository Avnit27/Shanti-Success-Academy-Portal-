const Toppers = () => {
  const toppers = [
    {
      name: 'Janvi Joshi',
      achievement: '79%',
      exam: 'SSC'
    },
    {
      name: 'Vaishnavi ',
      achievement: '74%',
      exam: 'SSC'
    },
    {
      name: 'Anchal',
      achievement: '73%',
      exam: 'SSC'
    },
    {
      name: 'Sunny',
      achievement: '61%',
      exam: 'SSC'
    }
  ];

  return (
    <section id="toppers" className="py-12 bg-gradient-to-br from-ssa-blue to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold mb-4">
            🏆 Our Toppers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {toppers.map((topper, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-xl p-6 text-center shadow-lg border border-ssa-yellow hover:shadow-xl transition-all duration-300 animate-fade-in flex flex-col items-center justify-center gap-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="text-lg font-bold text-ssa-blue mb-1">{topper.name}</h3>
              <p className="text-ssa-red font-semibold text-base">{topper.achievement}</p>
              <p className="text-gray-600 text-xs">{topper.exam}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toppers;
