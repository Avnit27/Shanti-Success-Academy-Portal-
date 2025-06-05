import { useState, useEffect } from 'react';

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 12,
    minutes: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-br from-red-500 via-orange-500 to-pink-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Special Offer!
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 lg:p-8 max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Left Side - Offer Details */}
            <div>
              <div className="mb-6">
                <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm mb-4">
                  FREE
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                  FREE DEMO LECTURE
                </h3>
                <p className="text-gray-600 mb-6">
                  Experience our teaching methodology with a complimentary demo session
                </p>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">15%</div>
                  <div className="text-sm text-gray-600">OFF</div>
                </div>
                <div className="text-2xl text-gray-400">+</div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-500">FREE</div>
                  <div className="text-sm text-gray-600">Demo</div>
                </div>
                <div className="text-2xl text-gray-400">+</div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-500">FREE</div>
                  <div className="text-sm text-gray-600">Consultancy</div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">No Hidden Charges</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">Expert Faculty</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">Proven Results</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-600">Free Consultancy</span>
                </div>
              </div>
            </div>

            {/* Right Side - Timer & CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 mb-6">
                <div className="text-sm font-bold mb-2">LIMITED TIME OFFER</div>
                <div className="text-xl font-bold mb-2">Enroll Before</div>
                <div className="text-2xl font-bold">30th June</div>
              </div>

              <a
                href="https://forms.gle/zVVfgswW9CApuvp3A"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>📚</span>
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
