'use client'
import { useState } from 'react'

export default function BookingForm({ brand }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    condition: '',
    preferredTime: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', email: '', condition: '', preferredTime: '', message: '' })
      }
    } catch (error) {
      console.error('Booking error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Booking Request Sent!</h3>
        <p className="text-green-700 mb-4">We'll contact you within 24 hours to confirm your appointment.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-green-600 hover:text-green-800 font-semibold"
        >
          Book Another Appointment
        </button>
      </div>
    )
  }

  return (
    <section id="booking-form" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Book Your Consultation
            </h2>
            <p className="text-xl text-gray-600">
              Take the first step towards natural healing. Schedule your personalized consultation today.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Primary Health Condition *</label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                >
                  <option value="">Select your primary concern</option>
                  <option value="cysts">Cysts Treatment</option>
                  <option value="heart">Heart Conditions</option>
                  <option value="numbness">Numbness & Nerve Issues</option>
                  <option value="diabetes">Diabetes Management</option>
                  <option value="hypertension">Hypertension</option>
                  <option value="pain">Body Pain Relief</option>
                  <option value="aging">Anti-Aging Therapy</option>
                  <option value="arthritis">Arthritis Treatment</option>
                  <option value="fibroids">Fibroids Treatment</option>
                  <option value="analysis">Body Composition Analysis</option>
                  <option value="supplements">Nutritional Supplements</option>
                  <option value="other">Other (please specify in message)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Appointment Time</label>
                <input
                  type="text"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                  placeholder="e.g., Weekday mornings, Saturday afternoon"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all resize-none"
                  placeholder="Tell us more about your condition or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Request...' : '📅 Book My Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}