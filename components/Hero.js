export default function Hero({ brand }) {
  const whatsappUrl = `https://wa.me/${brand.contact.whatsapp.replace(/[^0-9]/g, '')}`
  
  return (
    <section className="bg-gradient-to-r from-green-500 to-cyan-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">{brand.name}</h1>
        <p className="text-xl mb-4">{brand.tagline}</p>
        <p className="text-lg mb-8 max-w-3xl mx-auto">{brand.description}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={brand.bookingUrl}
            target="_blank"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Book Appointment
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  )
}