export default function Services({ services }) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Conditions We Treat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced photo/light therapy treatments address a wide range of health conditions naturally and effectively.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const isService = typeof service === 'object'
            const serviceName = isService ? service.name : service
            const serviceDesc = isService ? service.description : 'Natural photo/light therapy treatment'
            
            return (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-teal-700 transition-colors">
                  {serviceName}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {serviceDesc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}