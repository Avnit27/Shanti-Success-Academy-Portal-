
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
    }, 60000); // Update every minute instead of second

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-ssa-red to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block bg-white text-ssa-red px-4 py-2 rounded-full font-bold text-sm mb-4">
            🔥 LIMITED OFFER 🔥
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-montserrat font-bold mb-4">
            FREE Demo + 15% OFF
          </h2>
          
          <p className="text-lg mb-6">
            Get your <strong>FREE Demo Lecture</strong> and enjoy <strong>15% discount</strong> on all courses!
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-6 max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-2">⏰ Offer Ends In:</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white text-ssa-red rounded-lg p-2">
                <div className="text-xl font-bold">{timeLeft.days}</div>
                <div className="text-xs">Days</div>
              </div>
              <div className="bg-white text-ssa-red rounded-lg p-2">
                <div className="text-xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs">Hours</div>
              </div>
              <div className="bg-white text-ssa-red rounded-lg p-2">
                <div className="text-xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs">Minutes</div>
              </div>
            </div>
          </div>

          {/* Single CTA */}
          <a
            href="#admission"
            className="bg-ssa-yellow text-ssa-blue px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 inline-block"
          >
            🎯 Book FREE Demo Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
