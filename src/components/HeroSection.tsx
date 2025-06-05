import { images } from '../images';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-ssa-blue to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-montserrat font-bold mb-4">
              SHANTI SUCCESS
              <span className="text-ssa-yellow block">ACADEMY</span>
            </h1>
            
            <div className="text-xl mb-6 font-medium">
              <p className="text-ssa-yellow mb-2">KEEP LEARNING | KEEP GROWING</p>
              <p className="text-lg">
                6th–10th (SSC, CBSE) | XI–XII (Science, Commerce) | JEE | NEET | MHT-CET
              </p>
            </div>

            <div className="mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
                <h3 className="text-ssa-yellow font-semibold text-lg mb-2">🏆 Our Star Topper</h3>
                <p className="text-lg">
                  <strong>Janvi Joshi</strong> - Rank 1 - 79% in Board Exams
                </p>
              </div>
              
              <div className="text-sm text-gray-200">
                📍 Shop No.16, Phase 1, Pavitra Dhrushti, Pavitra Dham, Near Sunteck OneWorld, Tivri Road, Naigaon(E) 401208
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/zVVfgswW9CApuvp3A"
                className="bg-ssa-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 text-center animate-bounce-gentle"
              >
                🎯 Book FREE Demo Lecture
              </a>
              <a
                href="#courses"
                className="bg-ssa-yellow hover:bg-yellow-400 text-ssa-blue px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 text-center"
              >
                📚 Enroll Now
              </a>
              <a
                href="https://maps.app.goo.gl/FnM71zK784qeowS98"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ssa-yellow text-ssa-blue px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-200 mt-6"
              >
                📍 Get Directions
              </a>
            </div>
          </div>

          {/* Right Content - Student Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-ssa-yellow to-yellow-400 p-8 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={images.heroStudent}
                      alt="Janvi Joshi - Top Performer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-ssa-blue font-bold text-xl mb-2">Janvi Joshi</h3>
                  <p className="text-ssa-blue font-semibold">Rank 1 - 79%</p>
                  <p className="text-gray-600 mt-2">"SSA helped me achieve my dreams!"</p>
                </div>
              </div>
              
              {/* Floating Achievement Badges */}
              <div className="absolute -top-4 -right-4 bg-ssa-red text-white px-4 py-2 rounded-full font-bold animate-bounce-gentle">
                🏆 #1 Rank
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                ✅ 79%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
