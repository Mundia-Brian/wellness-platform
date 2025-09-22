export default function About({ brand }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            About {brand.name}
          </h2>
          
          <div className="text-lg text-gray-600 space-y-6">
            <p>
              We specialize in advanced photo and light therapy to stimulate your body's 
              natural healing processes. Our non-invasive treatments have proven results 
              across multiple health conditions.
            </p>
            
            <p>
              Combined with full body composition analysis and targeted supplements, 
              we provide a comprehensive approach to wellness and recovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}