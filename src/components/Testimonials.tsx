
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mrs. Sharma',
      relation: 'Parent of Rahul Sharma (JEE Qualifier)',
      photo: '/placeholder.svg',
      quote: 'My son gained tremendous confidence at SSA. The teachers not only focus on academics but also on overall personality development. The individual attention given to each student is remarkable.',
      rating: 5
    },
    {
      name: 'Janvi Joshi',
      relation: 'HSC Science Topper (95.4%)',
      photo: '/placeholder.svg',
      quote: 'SSA is not just a coaching institute, it\'s a second home. The faculty here made even the most difficult concepts seem easy. Their constant support helped me achieve my dreams.',
      rating: 5
    },
    {
      name: 'Mr. Patel',
      relation: 'Parent of Priya Patel (NEET Qualifier)',
      photo: '/placeholder.svg',
      quote: 'The systematic approach and regular testing at SSA helped my daughter identify her weak areas and work on them. The results speak for themselves - she cracked NEET!',
      rating: 5
    },
    {
      name: 'Arjun Kumar',
      relation: 'MHT-CET Topper (99.1%)',
      photo: '/placeholder.svg',
      quote: 'The doubt-solving sessions at SSA are incredible. No question goes unanswered, and the teachers ensure you understand the concept thoroughly before moving ahead.',
      rating: 5
    },
    {
      name: 'Mrs. Gupta',
      relation: 'Parent of Sneha Gupta (Commerce Topper)',
      photo: '/placeholder.svg',
      quote: 'What sets SSA apart is their affordable fees without compromising on quality. My daughter received the same attention as students in expensive institutes, but at a fraction of the cost.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      relation: 'SSC Topper (96.2%)',
      photo: '/placeholder.svg',
      quote: 'SSA laid a strong foundation for my future studies. The conceptual clarity I gained here helped me throughout my academic journey. Thank you for making learning enjoyable!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-ssa-blue mb-4">
            💬 What Our Students & Parents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from our SSA family that showcase our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-ssa-yellow text-xl">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-500 text-xs">👤</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-ssa-blue">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.relation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-ssa-blue text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">📊 Student Satisfaction</h3>
            <p className="text-blue-100">Based on feedback from 200+ families</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="text-3xl font-bold text-ssa-yellow mb-2">98%</h4>
              <p className="text-blue-100">Parent Satisfaction</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-ssa-yellow mb-2">95%</h4>
              <p className="text-blue-100">Student Retention</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-ssa-yellow mb-2">4.9/5</h4>
              <p className="text-blue-100">Average Rating</p>
            </div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-ssa-yellow mb-2">100%</h4>
              <p className="text-blue-100">Recommend to Friends</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-ssa-yellow/10 border-2 border-ssa-yellow rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-ssa-blue mb-4">🌟 Join Our Success Family!</h3>
            <p className="text-gray-700 mb-6">
              Experience the difference that personalized attention and quality teaching can make in your child's academic journey.
            </p>
            <a
              href="#admission"
              className="bg-ssa-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors duration-200 inline-block"
            >
              Book Your Free Demo Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
