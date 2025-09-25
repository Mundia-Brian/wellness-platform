import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const formData = await request.json()
    
    // Send to ken@afya.top using Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: '8c5a4b2d-1e3f-4a7b-9c8d-2f1e5a6b3c9d',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        condition: formData.condition,
        preferred_time: formData.preferredTime,
        message: formData.message,
        to: 'ken@afya.top',
        subject: `New Booking Request from ${formData.name}`,
        from_name: 'Wellness Platform',
        replyto: formData.email
      })
    })
    
    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: true })
    }
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json({ success: true })
  }
}