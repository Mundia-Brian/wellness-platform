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
            <div className="rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.28963372530274!2d36.73695959150792!3d-1.3959851827530347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f054ef675e05f%3A0x95e0afc017e891c9!2sCikei%20Center!5e0!3m2!1sen!2ske!4v1758782857427!5m2!1sen!2ske" 
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}