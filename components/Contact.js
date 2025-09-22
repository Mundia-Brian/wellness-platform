export default function Contact({ brand }) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">Get In Touch</h3>
            <div className="space-y-3">
              <p><strong>Phone:</strong> {brand.contact.phone}</p>
              <p><strong>Email:</strong> {brand.contact.email}</p>
              <p><strong>Address:</strong> {brand.contact.address}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-600">Location</h3>
            <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Google Maps Embed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}