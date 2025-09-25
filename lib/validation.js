export function validateBookingForm(data) {
  const errors = {}
  
  if (!data.name?.trim() || data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }
  
  if (!data.email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.email = 'Valid email address required'
  }
  
  if (!data.phone?.match(/^\+?[\d\s-()]{10,}$/)) {
    errors.phone = 'Valid phone number required'
  }
  
  if (!data.condition?.trim()) {
    errors.condition = 'Please select a health condition'
  }
  
  return { isValid: Object.keys(errors).length === 0, errors }
}

export function sanitizeInput(input) {
  return typeof input === 'string' ? input.trim().slice(0, 1000) : input
}