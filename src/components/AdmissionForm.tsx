const AdmissionForm = () => {
  return (
    <section id="admission" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-montserrat font-bold text-ssa-blue mb-4">
              📝 Get Admission at Shanti Success Academy
            </h2>
            <p className="text-lg text-gray-600">
              Fill the form below to enroll and claim your FREE Demo Lecture + 15% discount.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Form Section */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-ssa-blue mb-4">🎯 Quick Admission</h3>
              
              {/* Benefits List */}
              <div className="mb-6">
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    FREE Demo Lecture
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    15% Course Discount
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Study Material Included
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Regular Mock Tests
                  </li>
                </ul>
              </div>

              {/* Google Form Button */}
              <div className="text-center mb-4">
                <a
                  href="https://forms.gle/zVVfgswW9CApuvp3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-ssa-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-all duration-300"
                >
                  📋 Fill Admission Form →
                </a>
              </div>

              {/* Alternative Contact */}
              <div className="p-3 bg-ssa-yellow/20 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">📞 Prefer to talk? Call directly:</p>
                <div className="flex gap-2">
                  <a
                    href="tel:+919324714072"
                    className="flex-1 text-center bg-ssa-blue text-white py-2 rounded font-semibold text-sm"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919324714072"
                    className="flex-1 text-center bg-green-500 text-white py-2 rounded font-semibold text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div>
              <h3 className="text-xl font-bold text-ssa-blue mb-4">🚀 Simple Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-ssa-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-ssa-blue text-sm">Fill Form</h4>
                    <p className="text-gray-600 text-xs">Complete admission details</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-ssa-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-ssa-blue text-sm">Get Call</h4>
                    <p className="text-gray-600 text-xs">We'll call within 30 minutes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-ssa-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-ssa-blue text-sm">Demo Class</h4>
                    <p className="text-gray-600 text-xs">Free trial lecture</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-ssa-blue text-white w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-ssa-blue text-sm">Start Learning</h4>
                    <p className="text-gray-600 text-xs">Begin your success journey</p>
                  </div>
                </div>
              </div>

              {/* Urgency Message */}
              <div className="mt-6 bg-ssa-red text-white p-4 rounded-xl">
                <h4 className="font-bold mb-1">⏰ Limited Seats!</h4>
                <p className="text-sm">Only 20 seats left in current batch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
