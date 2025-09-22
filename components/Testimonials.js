export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      condition: "Diabetes Management",
      text: "After 6 sessions, my blood sugar levels have stabilized significantly. The natural approach really works!",
      rating: 5
    },
    {
      name: "John K.",
      condition: "Chronic Pain",
      text: "Years of back pain reduced dramatically. I can finally sleep through the night without medication.",
      rating: 5
    },
    {
      name: "Grace W.",
      condition: "Hypertension",
      text: "My blood pressure readings have improved consistently. The staff is professional and caring.",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real patients who chose natural healing with Afya Ray Wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-teal-600 text-sm">{testimonial.condition}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}