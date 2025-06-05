const Toppers = () => {
  const toppers = [
    {
      name: 'Janvi Joshi',
      achievement: '79%',
      exam: 'SSC'
    },
    {
      name: 'Rahul Sharma',
      achievement: '79%',
      exam: 'SSC'
    },
    {
      name: 'Priya Patel',
      achievement: '79%',
      exam: 'SSC'
    },
    {
      name: 'Arjun Kumar',
      achievement: '79%',
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
              className="bg-white text-gray-800 rounded-xl p-4 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-32 lg:w-36 lg:h-36 mx-auto mb-3 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={`/topper${index + 1}.png`}
                  alt={`Topper ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-sm font-bold text-ssa-blue mb-1">{topper.name}</h3>
              <p className="text-ssa-red font-semibold text-sm">{topper.achievement}</p>
              <p className="text-gray-600 text-xs">{topper.exam}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toppers;
