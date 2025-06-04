
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-ssa-blue mb-4">
            📞 Contact & Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for admissions, queries, or visit our campus
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-ssa-blue mb-8">📍 Get In Touch</h3>
            
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="bg-ssa-blue text-white p-3 rounded-lg mr-4">
                    📞
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-ssa-blue mb-2">Phone Number</h4>
                    <a 
                      href="tel:+919324714072" 
                      className="text-lg text-gray-700 hover:text-ssa-blue transition-colors duration-200"
                    >
                      +91 93247 14072
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Available 9 AM - 7 PM (Mon-Sat)
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="bg-green-500 text-white p-3 rounded-lg mr-4">
                    💬
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-ssa-blue mb-2">WhatsApp Chat</h4>
                    <a 
                      href="https://wa.me/919324714072" 
                      className="text-lg text-gray-700 hover:text-green-600 transition-colors duration-200"
                    >
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Instant replies • Quick admission support
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="bg-ssa-yellow text-ssa-blue p-3 rounded-lg mr-4">
                    📍
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-ssa-blue mb-2">Address</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Shop No.16, Phase 1, Pavitra Dhrushti,<br/>
                      Pavitra Dham, Near Sunteck OneWorld,<br/>
                      Tivri Road, Naigaon(E) 401208
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="bg-ssa-red text-white p-3 rounded-lg mr-4">
                    ⏰
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-ssa-blue mb-2">Office Hours</h4>
                    <div className="text-gray-700">
                      <p><strong>Monday - Saturday:</strong> 9:00 AM - 7:00 PM</p>
                      <p><strong>Sunday:</strong> 10:00 AM - 2:00 PM</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Classes run in morning and evening batches
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <a
                href="tel:+919324714072"
                className="bg-ssa-blue text-white p-4 rounded-lg font-bold text-center hover:bg-blue-800 transition-colors duration-200"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919324714072"
                className="bg-green-500 text-white p-4 rounded-lg font-bold text-center hover:bg-green-600 transition-colors duration-200"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Map and Directions */}
          <div>
            <h3 className="text-2xl font-bold text-ssa-blue mb-8">🗺️ Find Us Here</h3>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center mb-6">
              <div className="text-center text-gray-600">
                <div className="text-4xl mb-2">🗺️</div>
                <p>Interactive Google Map</p>
                <p className="text-sm">Naigaon(E), Mumbai</p>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-ssa-blue mb-4">🚗 How to Reach</h4>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="text-ssa-blue mr-2">🚊</span>
                  <div>
                    <strong>By Train:</strong> Naigaon Railway Station (5 min walk)
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-ssa-blue mr-2">🚌</span>
                  <div>
                    <strong>By Bus:</strong> Multiple bus routes to Naigaon
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-ssa-blue mr-2">🚗</span>
                  <div>
                    <strong>By Car:</strong> Parking available near Sunteck OneWorld
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-ssa-blue mr-2">🏪</span>
                  <div>
                    <strong>Landmark:</strong> Near Sunteck OneWorld, Pavitra Dham
                  </div>
                </div>
              </div>
              
              <a
                href="https://goo.gl/maps/your-location"
                className="inline-block mt-4 bg-ssa-yellow text-ssa-blue px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-200"
              >
                📍 Get Directions
              </a>
            </div>

            {/* Nearby Landmarks */}
            <div className="mt-6 bg-ssa-blue/10 p-6 rounded-xl">
              <h4 className="font-bold text-ssa-blue mb-3">📍 Nearby Landmarks</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Sunteck OneWorld (Adjacent)</li>
                <li>• Naigaon Railway Station (5 min)</li>
                <li>• Pavitra Dham Temple (2 min)</li>
                <li>• Local Market Area (3 min)</li>
                <li>• Bus Stop (2 min walk)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-ssa-blue text-white p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🤝 Ready to Start Your Success Journey?</h3>
            <p className="mb-6 text-blue-100">
              Visit our campus, meet our faculty, and see why SSA is the right choice for your education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#admission"
                className="bg-ssa-yellow text-ssa-blue px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-200"
              >
                📝 Apply for Admission
              </a>
              <a
                href="tel:+919324714072"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-ssa-blue transition-colors duration-200"
              >
                📞 Schedule Campus Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
