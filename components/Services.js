export default function Services({ services }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Conditions We Treat
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-green-600 mb-2">
                {service}
              </h3>
              <p className="text-gray-600 text-sm">
                Natural photo/light therapy treatment
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}