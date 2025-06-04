
import { useState, useEffect } from 'react';

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-ssa-red to-red-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🎯</div>
        <div className="absolute top-20 right-20 text-4xl">📚</div>
        <div className="absolute bottom-20 left-20 text-5xl">🏆</div>
        <div className="absolute bottom-10 right-10 text-3xl">⭐</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-white text-ssa-red px-6 py-2 rounded-full font-bold text-lg mb-6 animate-bounce-gentle">
            🔥 LIMITED TIME OFFER 🔥
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            FREE Demo Lecture + 15% OFF
          </h2>
          
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Get your <strong>FREE Demo Lecture</strong> and enjoy <strong>15% discount</strong> on all courses. 
            Limited seats available in each batch!
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">⏰ Offer Ends In:</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white text-ssa-red rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="bg-white text-ssa-red rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-white text-ssa-red rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-white text-ssa-red rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>

          {/* Offer Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">FREE Demo Lecture</h3>
              <p>Experience our teaching quality before enrolling</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">15% Discount</h3>
              <p>Save money on all course fees with this limited offer</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Instant Callback</h3>
              <p>We'll call you back within 30 minutes to confirm</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-lg font-semibold">
              Don't miss this opportunity! Limited seats in each batch.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#admission"
                className="bg-ssa-yellow text-ssa-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 animate-bounce-gentle"
              >
                🎯 Book Your FREE Demo Now
              </a>
              
              <a
                href="tel:+919324714072"
                className="bg-white text-ssa-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                📞 Call Now: 93247 14072
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-ssa-yellow">500+</div>
              <div className="text-sm">Students Already Enrolled</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-ssa-yellow">4.9/5</div>
              <div className="text-sm">Parent Satisfaction Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-ssa-yellow">24hrs</div>
              <div className="text-sm">Demo Booking Confirmation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
