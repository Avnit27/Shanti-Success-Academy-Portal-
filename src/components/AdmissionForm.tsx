
const AdmissionForm = () => {
  return (
    <section id="admission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-ssa-blue mb-4">
              📝 Get Admission at Shanti Success Academy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill the form below to enroll for our batches and claim your FREE Demo Lecture + 15% discount. 
              Limited seats are available in each batch. After submission, we will call you back to confirm your admission.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-ssa-blue mb-6">🎯 Quick Admission Process</h3>
              
              {/* Benefits List */}
              <div className="mb-8">
                <h4 className="font-bold text-ssa-blue mb-4">✅ What You Get:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    FREE Demo Lecture (Worth ₹500)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    15% Discount on Course Fees
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Comprehensive Study Material
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Regular Mock Tests & Assessments
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Doubt Solving Sessions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Parent-Teacher Meetings
                  </li>
                </ul>
              </div>

              {/* Google Form Button */}
              <div className="text-center">
                <a
                  href="https://forms.google.com/your-form-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-ssa-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105 mb-4"
                >
                  📋 Fill Admission Form →
                </a>
                <p className="text-sm text-gray-600">
                  Secure Google Form • Takes only 2 minutes
                </p>
              </div>

              {/* Alternative Contact */}
              <div className="mt-8 p-4 bg-ssa-yellow/20 rounded-lg border-l-4 border-ssa-yellow">
                <h4 className="font-bold text-ssa-blue mb-2">📞 Prefer to Talk?</h4>
                <p className="text-gray-700 mb-3">Call us directly for instant admission guidance</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+919324714072"
                    className="flex items-center justify-center bg-ssa-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
                  >
                    📞 Call: 93247 14072
                  </a>
                  <a
                    href="https://wa.me/919324714072"
                    className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                  >
                    💬 WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div>
              <h3 className="text-2xl font-bold text-ssa-blue mb-6">🚀 Simple 4-Step Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-ssa-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-ssa-blue mb-1">Fill the Admission Form</h4>
                    <p className="text-gray-600">Complete the Google Form with your details and course preferences</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-ssa-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-ssa-blue mb-1">Instant Confirmation Call</h4>
                    <p className="text-gray-600">We'll call you within 30 minutes to discuss your requirements</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-ssa-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-ssa-blue mb-1">FREE Demo Lecture</h4>
                    <p className="text-gray-600">Attend a complimentary demo class to experience our teaching</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-ssa-blue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-ssa-blue mb-1">Enroll & Start Learning</h4>
                    <p className="text-gray-600">Complete admission formalities and begin your success journey</p>
                  </div>
                </div>
              </div>

              {/* Urgency Message */}
              <div className="mt-8 bg-ssa-red text-white p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-2">⏰ Limited Seats Available!</h4>
                <p className="mb-4">
                  Only <strong>20 seats left</strong> in the current batch. Secure your spot today to avoid disappointment.
                </p>
                <div className="flex items-center text-sm">
                  <span className="bg-white text-ssa-red px-3 py-1 rounded-full font-bold mr-3">
                    🔥 URGENT
                  </span>
                  <span>Admissions close in 5 days</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="font-bold text-ssa-blue text-sm">500+ Students</div>
                  <div className="text-xs text-gray-600">Successfully Enrolled</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">⭐</div>
                  <div className="font-bold text-ssa-blue text-sm">4.9/5 Rating</div>
                  <div className="text-xs text-gray-600">Parent Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
